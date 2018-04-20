import { FormConfig, FormField } from '../Models/index.models';

export const formConfig: FormConfig = {
    fields: [
        new FormField('name', 'Name'),
        new FormField('id', 'Id'),
    ]
};
