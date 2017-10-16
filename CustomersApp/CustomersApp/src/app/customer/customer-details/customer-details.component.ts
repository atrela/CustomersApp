import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from "../customer.service";
import { ICustomer } from "../customer";
import { Customer } from "../customer";

@Component({
    selector: 'app-customer-details',
    templateUrl: 'customer-details.component.html'
})
export class CustomerDetailsComponent implements OnInit {
    private id: number;
    private customer: Customer = new Customer();
    private errorMessage: string;
    private form: FormGroup;
    private title: string;

    constructor(private _httpService: CustomerService,
        private _productService: CustomerService, private _router: Router, private _route: ActivatedRoute,
        formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            name: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            surname: ['', [
                Validators.required,
                Validators.minLength(3)
            ]],
            address: ['', [
                Validators.required,
                Validators.minLength(6)
            ]],
            telephoneNumber: ['', [
                Validators.required,
                Validators.pattern('^\\d{9}$')
            ]],
        });
    }

    ngOnInit(): void {
        const id = +this._route.snapshot.paramMap.get('id');
        this.title = id ? 'Edit Customer' : 'New Customer';

        if (!id)
            return;

        this._httpService.get(id).subscribe(
            customer => this.customer = customer,
            error => this.errorMessage = <any>error);
    }

    save() {
        var result,
            userValue = this.form.value as ICustomer;

        const id = +this._route.snapshot.paramMap.get('id');

        if (id > 0)
            userValue.customerId = id;

        if (userValue.customerId) {
            this._httpService.update(userValue);
            console.log('udate');
            console.log(userValue);
        } else {
            //result = this.usersService.addUser(userValue);
            this._httpService.add(userValue);
            console.log('new record');
            console.log(userValue);
        }

        //result.subscribe(data => this._router.navigate(['customers']));
    }
}
