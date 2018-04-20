export class Address {
    country: string;
    zip: string;
    city: string;
    street: string;
    number: string;

    constructor(country: string, zip: string, city: string, street: string, number: string) {
        this.country = country;
        this.zip = zip;
        this.city = city;
        this.street = street;
        this.number = number;
    }
}
