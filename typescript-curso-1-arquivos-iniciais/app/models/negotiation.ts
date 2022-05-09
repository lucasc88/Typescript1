export class Negotiation {

    //private sintaxe using underscore in the variables
    private _date: Date;
    private _quantity: number;
    private _value: number;

    constructor(date: Date, quantity: number, value: number) {
        this._date = date;
        this._quantity = quantity;
        this._value = value;
    }

    get date(): Date {
        return this._date;
    }

    get quantity(): Number {
        return this._quantity;
    }

    get value(): Number {
        return this._value;
    }

    get volume(): Number {
        return this._value * this._quantity;
    }
}