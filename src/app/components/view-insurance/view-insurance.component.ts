import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../models/insurance.model';

@Component({
  selector: 'app-view-insurance',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-insurance.component.html',
  styleUrls: ['./view-insurance.component.css']
})
export class ViewInsuranceComponent implements OnInit {
  insurances: Insurance[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';
  deleteMessage = '';

  constructor(private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.loadInsurances();
  }

  loadInsurances(): void {
    this.loading = true;
    this.errorMessage = '';
    this.insuranceService.getAll().subscribe({
      next: (data) => {
        this.insurances = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading insurances: ' + error.message;
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  deleteInsurance(id: number | undefined): void {
    if (!id) return;

    if (confirm('Are you sure you want to delete this insurance?')) {
      this.insuranceService.deleteInsurance(id).subscribe({
        next: () => {
          this.deleteMessage = 'Insurance deleted successfully!';
          this.loadInsurances();
          setTimeout(() => {
            this.deleteMessage = '';
          }, 3000);
        },
        error: (error) => {
          this.errorMessage = 'Error deleting insurance: ' + error.message;
          console.error('Error:', error);
        }
      });
    }
  }

  getStatusBadgeClass(status: string): string {
    return status === 'Active' ? 'badge-success' : 'badge-danger';
  }

  formatDate(date: string): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}
