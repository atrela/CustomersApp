import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { ICustomer } from './customer';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CustomerService {
    private _url = 'http://localhost:3281/api/customer';

    constructor(private _http: Http) {

    }

    getAll(): Observable<ICustomer[]> {
        return this._http.get(this._url)
            .map((response: Response) => <ICustomer[]>response.json())
            .do(data => console.log((data)))
            .catch(this.handleError);
    }

    get(customerId: number): Observable<ICustomer> {
        return this._http.get(this._url + '/' + customerId)
            .map((response: Response) => <ICustomer>response.json())
            .catch(this.handleError);
    }

    add(customer: ICustomer) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        this._http.post(
            this._url,
            JSON.stringify(customer),
            options
        ).subscribe();   
    }

    update(customer: ICustomer) {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var ades = this._url + "/" + customer.customerId;
        console.log(ades);
        let options = new RequestOptions({ headers: headers });
        this._http.put(
            ades,
            JSON.stringify(customer),
            options
        ).subscribe();

    }

     
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
