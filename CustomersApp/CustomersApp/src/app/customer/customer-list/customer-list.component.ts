import { Component, OnInit } from '@angular/core';
import { CustomerService } from ".././customer.service";
import { ICustomer } from "../customer";

@Component({
    selector: 'app-customer-list',
    templateUrl: 'customer-list.component.html'
})


export class CustomerListComponent implements OnInit {

    customers: ICustomer[];
    errorMessage: string;

    constructor(private _httpService: CustomerService) {

    }

    ngOnInit() {
        this._httpService.getAll()
            .subscribe(customers => {
                this.customers = customers
            },
            error => this.errorMessage = <any>error);
    };

};
