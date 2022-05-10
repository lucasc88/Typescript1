export class Negotiations {
    constructor() {
        //Negotiation[] is a simpler way to write Array<Negotiation>
        this.negotiations = [];
    }
    add(negotiation) {
        this.negotiations.push(negotiation);
    }
    //ReadonlyArray is a immutable array
    //readonly Negotiation[] is a simplest way to declare -> ReadonlyArray<Negotiation>
    list() {
        return this.negotiations;
    }
}
