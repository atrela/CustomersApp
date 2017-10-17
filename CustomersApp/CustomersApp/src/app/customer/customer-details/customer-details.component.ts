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
    private form: FormGroup;
    private title: string;
    private isReadOnly: boolean;

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
        this.id = +this._route.snapshot.paramMap.get('id');
        this.title = this.id ? 'Manage Customer' : 'New Customer';

        if (!this.id) {
            this.isReadOnly = false;
            return;
        }
        this.getData();
        this.isReadOnly = true;
    }

    getData()
    {
        this._httpService.get(this.id).subscribe(
            customer => this.customer = customer);
    }

    save() {
        var formValue = this.form.value as ICustomer;

        if (this.id > 0)
            formValue.customerId = this.id;

        if (formValue.customerId) {
            this._httpService.update(formValue);
            this.changeActivity();
        } else {
            this._httpService.add(formValue).subscribe(() => this.goToCustomerList());
        }
    }
    cancel() {
        if (this.id == 0)
            this.goToCustomerList();

        else {
            this.getData();
            this.changeActivity();
        }
    }

    delete() {
        this._httpService.delete(this.id).subscribe(() => this.goToCustomerList());
    }

    changeActivity() {
        this.isReadOnly = !this.isReadOnly;
    }

    goToCustomerList() {
        this._router.navigateByUrl('/customers')
    }
}
