import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FormField } from '../Models/index.models';

import { FormFieldState } from '../Enums/index.enums';

@Component({
    selector: 'app-input-field',
    templateUrl: './input-field.component.html',
    styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
    public FormFieldState = FormFieldState;
    @Input() formField: FormField;
    @Input() value: any;
    @Output() changeSubmitted: EventEmitter<{ formField: FormField, value: any }>
        = new EventEmitter<{ formField: FormField, value: any }>();

    constructor() { }

    ngOnInit(): void { }

    public handleEditClicked(): void {
        this.formField.state = FormFieldState.editable;
    }

    public handleValueChanged(): void {
        this.formField.state = FormFieldState.modified;
    }
    public handleSaveClicked(): void {
        // this.changeSubmitted.emit({ formField: this.formField, value: this.value });
        this.submitChange();
    }
    public submitChange(): void {
        // submit change to back end
        // backend detects which value changed / reads formField data
        // update table
        // return result
        // success => lock field
        this.formField.state = FormFieldState.readonly;
        // failure => display Error
    }
}
