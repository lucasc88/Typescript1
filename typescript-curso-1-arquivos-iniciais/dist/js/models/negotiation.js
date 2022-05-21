export class Negotiation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get volume() {
        return this.value * this.quantity;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    static createFrom(dateString, quantityString, valueString) {
        const expression = /-/g;
        const date = new Date(dateString.replace(expression, ','));
        const quantity = parseInt(quantityString);
        const value = parseFloat(valueString);
        return new Negotiation(date, quantity, value);
    }
}
