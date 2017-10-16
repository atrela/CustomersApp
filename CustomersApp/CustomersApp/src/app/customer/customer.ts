export interface ICustomer {
    customerId: number;
    name: string;
    surname: string;
    address: string;
    telephoneNumber: string;
}

export class Customer implements ICustomer {
    customerId: number;
    name: string;
    surname: string;
    address: string;
    telephoneNumber: string;
}
