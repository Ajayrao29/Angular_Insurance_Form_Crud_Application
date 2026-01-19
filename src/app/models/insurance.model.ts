export interface Insurance {
  id?: number;
  policyNumber?: string;
  holderName: string;
  dateOfBirth: string;
  policyType: string;
  premium: number;
  startDate: string;
  endDate: string;
  nominee: string;
  status: 'Active' | 'Inactive';
}
 

