import { Routes } from '@angular/router';
import { AddInsuranceComponent } from './components/add-insurance/add-insurance.component';
import { ViewInsuranceComponent } from './components/view-insurance/view-insurance.component';
import { UpdateInsuranceComponent } from './components/update-insurance/update-insurance.component';

export const routes: Routes = [
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: 'add', component: AddInsuranceComponent },
  { path: 'view', component: ViewInsuranceComponent },
  { path: 'update/:id', component: UpdateInsuranceComponent },
  { path: '**', redirectTo: '/view' }
];


