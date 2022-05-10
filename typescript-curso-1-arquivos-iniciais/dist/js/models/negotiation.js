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
    constructor(date, quantity, value) {
        this.date = date;
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
}
