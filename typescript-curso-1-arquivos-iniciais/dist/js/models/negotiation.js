export class Negotiation {
    //In Typescript we can declare the the private variable as constructor parameters
    //private sintaxe using underscore in the variables
    //    constructor(
    //        private _date: Date,
    //        private _quantity: number,
    //        private _value: number
    //    ) {
    //    }
    //constructor using readonly in public variable. In this way we have a immutable object. Gets are no longer necessary
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    // get date(): Date {
    //     return this._date;
    // }
    // get quantity(): Number {
    //     return this._quantity;
    // }
    // get value(): Number {
    //     return this._value;
    // }
    get volume() {
        return this.value * this.quantity;
    }
    //Now the object date is immutable as well. Defensive Programming
    //Sometimes we need this technique because the Readonly is not enough
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    static createFrom(dateString, quantityString, valueString) {
        //regular expresion to replace hifen for ,
        const expression = /-/g;
        const date = new Date(dateString.replace(expression, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Negotiation(date, quantity, value);
    }
}
