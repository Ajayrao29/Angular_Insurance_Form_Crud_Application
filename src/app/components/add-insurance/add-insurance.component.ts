import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../models/insurance.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-insurance',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent {
  insuranceForm!: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  policyTypes = ['Health', 'Life', 'Auto', 'Home', 'Travel'];
  statusOptions = ['Active', 'Inactive'];

  constructor(
    private formBuilder: FormBuilder,
    private insuranceService: InsuranceService,
    private router: Router
  ) {
    this.initializeForm();
  }

  initializeForm(): void {
    this.insuranceForm = this.formBuilder.group({
      holderName: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: ['', Validators.required],
      policyType: ['', Validators.required],
      premium: ['', [Validators.required, Validators.min(0.01)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      nominee: ['', [Validators.required, Validators.minLength(3)]],
      status: ['Active', Validators.required]
    }, { validators: this.dateValidator });
  }

  // Custom validator for end date after start date
  dateValidator(group: FormGroup): { [key: string]: any } | null {
    const startDate = group.get('startDate')?.value;
    const endDate = group.get('endDate')?.value;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (start >= end) {
        return { dateInvalid: true };
      }
    }
    return null;
  }

  get f() {
    return this.insuranceForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.insuranceForm.invalid) {
      this.errorMessage = 'Please fix the validation errors below.';
      return;
    }

    const formData: Insurance = this.insuranceForm.value;

    this.insuranceService.addInsurance(formData).subscribe({
      next: (response) => {
        this.successMessage = 'Insurance added successfully!';
        this.insuranceForm.reset();
        this.submitted = false;
        this.insuranceForm.patchValue({ status: 'Active' });
        setTimeout(() => {
          this.router.navigate(['/view']);
        }, 1500);
      },
      error: (error) => {
        this.errorMessage = 'Error adding insurance: ' + error.message;
        console.error('Error:', error);
      }
    });
  }

  resetForm(): void {
    this.insuranceForm.reset();
    this.submitted = false;
    this.successMessage = '';
    this.errorMessage = '';
    this.insuranceForm.patchValue({ status: 'Active' });
  }
}
