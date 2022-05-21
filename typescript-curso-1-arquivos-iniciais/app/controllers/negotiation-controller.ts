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

    public add(): void {
        const neg = this.negotiationCreation();
        this.negotiations.add(neg);
        this.cleanForm();
        this.viewUpdate();
    }

    private negotiationCreation(): Negotiation {
        //regular expresion to replace hifen for ,
        const expression = /-/g;
        const date = new Date(this.inputDate.value.replace(expression, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);

        return new Negotiation(date, quantity, value);
    }

    private cleanForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }

    private viewUpdate(): void {
        //when a new negotiation is add into array, the table is updated
        this.negotiationView.update(this.negotiations);
        console.log(this.negotiations);
    }
}