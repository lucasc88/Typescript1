import { Negotiation } from "../models/negotiation.js";

export class NegotiationController {

    //HTMLInputElement as a type for the Controller Variables
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;

    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }

    add() {
        //regular expresion to replace hifen for ,
        const expression = /-/g;
        const date = new Date(this.inputDate.value.replace(expression, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);

        const negotiation = new Negotiation(date, quantity, value);

        console.log(negotiation);
    }
}