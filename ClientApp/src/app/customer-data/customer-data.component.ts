import { Component, OnInit } from '@angular/core';

// Configs
import { formConfig } from '../config/form.config';

// Models
import { CustomerData, FormField, FormConfig } from '../Models/index.models';

@Component({
    selector: 'app-customer-data',
    templateUrl: './customer-data.component.html',
    styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {

    public customerData: CustomerData = new CustomerData();
    public formConfig: FormConfig = formConfig;

    constructor() { }

    ngOnInit(): void {
    }

    public getFormFieldByInternalName(internalName: string): FormField | undefined {
        const field = this.formConfig.fields.find(ff => ff.internalName === internalName);
        if (field === undefined) {
            console.log('Could not find field with name "' + internalName + '"!');
            return undefined;
        }
        else return field;
    }

    public handleChangeSubmitted(field: { formField: FormField, value: any }): void {
        // ToDo: do we need to bubble up here?
        console.log(field);
        // submit data
        // success => lock field
        // failure => display error
    }
}
