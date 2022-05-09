export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    //ReadonlyArray is a immutable array
    list() {
        return this.negotiations;
    }
}
