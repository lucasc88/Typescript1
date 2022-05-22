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
    constructor(
        private readonly _date: Date,
        public readonly quantity: number,
        public readonly value: number
    ) {
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

    get volume(): Number {
        return this.value * this.quantity;
    }

    //Now the object date is immutable as well. Defensive Programming
    //Sometimes we need this technique because the Readonly is not enough
    get date(): Date {
        const date = new Date(this._date.getTime());
        return date;
    }

    public static createFrom(dateString: string, quantityString: string, valueString: string): Negotiation {
        //regular expresion to replace hifen for ,
        const expression = /-/g;
        const date = new Date(dateString.replace(expression, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);

        return new Negotiation(date, quantity, value);
    }

    public isEqual(n: Negotiation): boolean {
        return this.date.getDate() == n.date.getDate()
            && this.date.getMonth() == n.date.getMonth()
            && this.date.getFullYear() == n.date.getFullYear()
            && this.quantity == n.quantity
            && this.value == n.value;
    }
}