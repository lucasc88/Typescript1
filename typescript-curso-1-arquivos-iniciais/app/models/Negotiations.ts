import { Negotiation } from "./negotiation.js";

export class Negotiations {

    //Negotiation[] is a simpler way to write Array<Negotiation>
    private negotiations: Array<Negotiation> = [];

    public add(negotiation: Negotiation){
        this.negotiations.push(negotiation);
    }

    //ReadonlyArray is a immutable array
    //readonly Negotiation[] is a simplest way to declare -> ReadonlyArray<Negotiation>
    public list(): readonly Negotiation[] {
        return this.negotiations;
    }
}