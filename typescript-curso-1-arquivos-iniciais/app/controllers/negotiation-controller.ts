import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
import { NegotiationView } from "../views/negotiation-view.js";

export class NegotiationController {

    //HTMLInputElement as a type for the Controller Variables
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();
    //instance of NegotiationView using the div id #negotiationView
    private negotiationView = new NegotiationView('#negotiationView');

    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.negotiationView.update(this.negotiations);
    }

    add(): void {
        const neg = this.negoatiationCreation();
        this.negotiations.add(neg);
        
        //when a new negotiation is add into array, the table is updated
        this.negotiationView.update(this.negotiations);
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