import { Component } from '@angular/core';
import { Router } from "@angular/router/router";

@Component({
    selector: 'app-customer-list',
    templateUrl: 'customer-list.component.html'
})
export class CustomerListComponent {
    redirectToCustomerDetails: Function;

    constructor(private _router: Router) {
        this.redirectToCustomerDetails = function (customerId) {
            this._router.navigate(['/customer'], { queryParams: { id: customerId } });
        }
    };
};
