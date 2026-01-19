import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../models/insurance.model';

@Component({
  selector: 'app-update-insurance',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-insurance.component.html',
  styleUrls: ['./update-insurance.component.css']
})
export class UpdateInsuranceComponent implements OnInit {
  insuranceForm!: FormGroup;
  submitted = false;
  loading = true;
  successMessage = '';
  errorMessage = '';
  insuranceId!: number;

  policyTypes = ['Health', 'Life', 'Auto', 'Home', 'Travel'];
  statusOptions = ['Active', 'Inactive'];

  constructor(
    private formBuilder: FormBuilder,
    private insuranceService: InsuranceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.insuranceId = +params['id'];
      this.loadInsurance();
    });
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

  loadInsurance(): void {
    this.insuranceService.getById(this.insuranceId).subscribe({
      next: (data) => {
        this.insuranceForm.patchValue({
          holderName: data.holderName,
          dateOfBirth: data.dateOfBirth,
          policyType: data.policyType,
          premium: data.premium,
          startDate: data.startDate,
          endDate: data.endDate,
          nominee: data.nominee,
          status: data.status
        });
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error loading insurance: ' + error.message;
        this.loading = false;
      }
    });
  }

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

    this.insuranceService.updateInsurance(this.insuranceId, formData).subscribe({
      next: (response) => {
        this.successMessage = 'Insurance updated successfully!';
        setTimeout(() => {
          this.router.navigate(['/view']);
        }, 1500);
      },
      error: (error) => {
        this.errorMessage = 'Error updating insurance: ' + error.message;
        console.error('Error:', error);
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/view']);
  }
}
