import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ICustomer } from './customer';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()

export class CustomerService {
    private _url = 'http://localhost:3281/api/customer';
    private _options: RequestOptions;

    constructor(private _http: Http) {
        this.prepareHeader();
    }

    prepareHeader() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        this._options = new RequestOptions({ headers: headers });
    }

    getCustomerUrl(customerId: number): string {
        return this._url + "/" + customerId;
    }

    getAll(): Observable<ICustomer[]> {
        return this._http.get(this._url)
            .map((response: Response) => <ICustomer[]>response.json());
    }

    get(customerId: number): Observable<ICustomer> {
        return this._http.get(this.getCustomerUrl(customerId))
            .map((response: Response) => <ICustomer>response.json());
    }

    delete(customerId: number){
        this._http.delete(
            this.getCustomerUrl(customerId)
        ).subscribe();

    }

    add(customer: ICustomer) {
        this._http.post(
            this._url,
            JSON.stringify(customer),
            this._options
        ).subscribe();
    }

    update(customer: ICustomer) {
        this._http.put(
            this.getCustomerUrl(customer.customerId),
            JSON.stringify(customer),
            this._options
        ).subscribe();
    }

}
