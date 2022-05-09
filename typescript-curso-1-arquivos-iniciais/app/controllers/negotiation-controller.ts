import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/Negotiations.js";

export class NegotiationController {

    //HTMLInputElement as a type for the Controller Variables
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();

    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
    }

    add(): void {
        const neg = this.negoatiationCreation();
        this.negotiations.add(neg);
        console.log(this.negotiations);
        this.cleanForm();
    }

    negoatiationCreation(): Negotiation {
        //regular expresion to replace hifen for ,
        const expression = /-/g;
        const date = new Date(this.inputDate.value.replace(expression, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);

        return new Negotiation(date, quantity, value);
    }

    cleanForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}