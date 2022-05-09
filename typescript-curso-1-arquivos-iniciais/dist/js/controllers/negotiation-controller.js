import { Negotiation } from "../models/negotiation.js";
export class NegotiationController {
    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }
    add() {
        const negotiation = new Negotiation(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
        console.log(negotiation);
    }
}
