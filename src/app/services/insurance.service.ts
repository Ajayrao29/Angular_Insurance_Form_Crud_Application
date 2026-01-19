import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, map } from 'rxjs';
import { Insurance } from '../models/insurance.model';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  private apiUrl = 'http://localhost:3001/insurances';

  constructor(private http: HttpClient) { }

  // Get all insurance records
  getAll(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(this.apiUrl);
  }

  // Get insurance by ID
  getById(id: number): Observable<Insurance> {
    return this.http.get<Insurance>(`${this.apiUrl}/${id}`);
  }

  // Get next sequential ID
  private getNextId(): Observable<number> {
    return this.getAll().pipe(
      map((insurances: Insurance[]) => {
        if (insurances.length === 0) {
          return 1;
        }
        const maxId = Math.max(...insurances.map(i => i.id || 0));
        return maxId + 1;
      })
    );
  }

  // Generate policy number: HF + Last 2 digits of birth year + Sequential 3-digit number
  private generatePolicyNumber(dateOfBirth: string): Observable<string> {
    const birthYear = new Date(dateOfBirth).getFullYear();
    const lastTwoDigits = birthYear.toString().slice(-2);
    
    return this.getAll().pipe(
      map((insurances: Insurance[]) => {
        // Filter all policies with same birth year
        const sameBirthYearPolicies = insurances.filter(i => 
          i.dateOfBirth && new Date(i.dateOfBirth).getFullYear().toString().slice(-2) === lastTwoDigits
        );
        
        // Get the next sequence number (count + 1)
        const nextSequence = sameBirthYearPolicies.length + 1;
        
        // Format: HF + 2-digit year + 3-digit sequence
        const sequenceStr = nextSequence.toString().padStart(3, '0');
        return `HF${lastTwoDigits}${sequenceStr}`;
      })
    );
  }

  // Add new insurance with sequential ID and generated policy number
  addInsurance(insurance: Insurance): Observable<Insurance> {
    return this.generatePolicyNumber(insurance.dateOfBirth).pipe(
      switchMap(policyNumber => 
        this.getNextId().pipe(
          switchMap(nextId => {
            const insuranceWithIdAndPolicy = {
              ...insurance,
              id: nextId,
              policyNumber: policyNumber
            };
            return this.http.post<Insurance>(this.apiUrl, insuranceWithIdAndPolicy);
          })
        )
      )
    );
  }

  // Update insurance
  updateInsurance(id: number, insurance: Insurance): Observable<Insurance> {
    return this.http.put<Insurance>(`${this.apiUrl}/${id}`, insurance);
  }

  // Delete insurance
  deleteInsurance(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
