import { NgModule } from '@angular/core';

import { CustomerRouting } from './customer.routing';
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerDetailsComponent } from "./customer-details/customer-details.component";
import { CustomerService } from "./customer.service";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CustomerRouting,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CustomerListComponent,
        CustomerDetailsComponent
    ],
    declarations: [
        CustomerListComponent,
        CustomerDetailsComponent
    ],
    providers: [
        CustomerService
    ]
})
export class CustomerModule {
}
