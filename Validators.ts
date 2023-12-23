export class Validators {
	static required(val): boolean {
		const requiredValues = [null, undefined, ''];
		return !requiredValues.includes(val);
	}
	
	static minLength(min: number): Function {
		return (val) => {
			return val.length >= min;
		};
	}
	
	static maxLength(max: number): Function {
		return (val) => {
			return val.length <= max;
		};
	}
	
	static length(length: number): Function {
		return (val) => {
			return val.length === length;
		};
	}
	
	static email(email) {
		const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
	
	static onlyLetters(val): boolean {
		return /^[a-zA-Z]+$/.test(val);
	}
	
	static notContainSpaces(val): boolean {
		return /^\S+$/.test(val);
	}
	
	static containsAnyOfSymbols(symbols) {
		return (str) => {
			const regex = new RegExp(`[${symbols}]`);
			return regex.test(str);
		};
	}
	
	static containsAllSymbols(symbols) {
		return (str) => {
			const symbolArray = symbols.split('');
			return symbolArray.every(symbol => str.includes(symbol));
		};
	}
	
	static endsWithSymbols(substring) {
		return (str) => {
			return str.endsWith(substring);
		};
	}
}
