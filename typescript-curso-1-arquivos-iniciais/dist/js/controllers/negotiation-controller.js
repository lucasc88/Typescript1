import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiation-view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        //instance of NegotiationView using the div id #negotiationView
        this.negotiationView = new NegotiationView('#negotiationView');
        this.messageView = new MessageView('#messageView');
        this.SUNDAY = 0;
        this.SATURDAY = 6;
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.negotiationView.update(this.negotiations);
    }
    add() {
        const neg = this.negotiationCreation();
        if (!this.isWorkDay(neg.date)) {
            this.messageView.update('Trading is only allowed on business days.');
            return;
        }
        this.negotiations.add(neg);
        this.cleanForm();
        this.viewUpdate();
        this.messageView.update('The transaction was successful!');
    }
    isWorkDay(date) {
        //0 - is Sunday , 6 - is Saturday
        return date.getDay() > this.SUNDAY && date.getDay() < this.SATURDAY;
    }
    negotiationCreation() {
        //regular expresion to replace hifen for ,
        const expression = /-/g;
        const date = new Date(this.inputDate.value.replace(expression, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    viewUpdate() {
        //when a new negotiation is add into array, the table is updated
        this.negotiationView.update(this.negotiations);
        console.log(this.negotiations);
    }
}
