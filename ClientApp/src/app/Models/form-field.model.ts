import { FormFieldState } from '../Enums/index.enums';

export class FormField {
    public internalName: string;
    public displayName: string;
    public state: FormFieldState = FormFieldState.readonly;

    constructor(internalName, displayName: string = internalName) {
        this.internalName = internalName;
        this.displayName = displayName;
    }
}
