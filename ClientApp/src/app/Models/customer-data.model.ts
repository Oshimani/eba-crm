import { Address, Contact, Product, Issue, FormField } from './index.models';

export class CustomerData {
    name: string;
    id: string;
    address: Address;
    contacts: Array<Contact>;
    products: Array<Product>;
    issues: Array<Issue>;
}
