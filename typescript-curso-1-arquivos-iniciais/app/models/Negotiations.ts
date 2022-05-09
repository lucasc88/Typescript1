import { Negotiation } from "./negotiation.js";

export class Negotiations {

    private negotiations: Array<Negotiation> = [];

    add(negotiation: Negotiation){
        this.negotiations.push(negotiation);
    }

    //ReadonlyArray is a immutable array
    list(): ReadonlyArray<Negotiation> {
        return this.negotiations;
    }
}