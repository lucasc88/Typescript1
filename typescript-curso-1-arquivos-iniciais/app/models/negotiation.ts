export class Negotiation {

    #date;
    #quantity;
    #value;

    constructor(date, quantity, value){
        this.#date = date;
        this.#quantity = quantity;
        this.#value = value;
    }

    get date(){
        return this.#date;
    }

    get quantity(){
        return this.#quantity;
    }

    get value(){
        return this.#value;
    }

    get volume(){
        return this.#value * this.#quantity;
    }
}