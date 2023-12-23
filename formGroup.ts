import { FormControl } from '@/utils/formControl';

export interface IFromGroup<T> {
	[key: string]: FormControl<T>;
}

export class FormGroup<T> {
	controls: T;
	
	constructor(controls: T) {
		this.controls = controls;
	}
	
	isValidForm() {
		for (const key in this.controls) {
			if (!this.controls[key].valid()) {
				return false;
			}
		}
		return true;
	}
	
	getRowValue() {
		const obj = {};
		for (const objKey in this.controls) {
			obj[objKey] = this.controls[objKey].value;
		}
		return obj;
	}
	
	patchValue(obj: any) {
		for (const objKey in obj) {
			if (this.controls[objKey]) (this.controls[objKey].value = obj[objKey]);
		}
	}
	
	isDirtyForm(): boolean {
		for (const key in this.controls) {
			if (this.controls[key]?.dirty) return true;
		}
	}
}
