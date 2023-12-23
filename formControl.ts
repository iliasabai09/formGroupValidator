export interface IFormControl<T> {
	value: T;
	readonly validators: ((val) => boolean)[] | Function[];
	dirty: boolean;
	readonly errors: string[];
	error: string;
	valid: () => boolean;
	patchValue: (val) => void;
}

export class FormControl<T> implements IFormControl<T> {
	public value: T;
	readonly validators: ((val) => boolean)[] | Function[];
	public dirty: boolean;
	private readonly errors: string[];
	public error: string = '';
	
	constructor(value: T, validators: ((val) => boolean)[] | Function[], errors: string[] = []) {
		this.value = value;
		this.validators = validators;
		this.errors = errors;
	}
	
	valid(): boolean {
		for (let i = 0; i < this.validators.length; i++) {
			if (!this.validators[i](this.value)) {
				this.errors[i] ? this.error = this.errors[i] : this.error = '';
				return false;
			}
		}
		this.error = '';
		return true;
	}
	
	patchValue(val): void {
		this.dirty = true;
		this.value = val;
	}
}
