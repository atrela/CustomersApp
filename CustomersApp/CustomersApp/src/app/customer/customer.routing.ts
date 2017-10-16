import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component'
import { CustomerDetailsComponent } from './customer-details/customer-details.component'

const appRoutes: Routes = [
    { path: 'customer/:id', component: CustomerDetailsComponent },
    { path: 'customer', component: CustomerDetailsComponent },
    { path: 'customers', component: CustomerListComponent }
];

export const CustomerRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
