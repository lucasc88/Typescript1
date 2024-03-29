import { WorkDay } from "../enums/WorkDay.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiation-view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationView = new NegotiationView('#negotiationView');
        this.messageView = new MessageView('#messageView');
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.negotiationView.update(this.negotiations);
    }
    add() {
        const neg = Negotiation.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
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
        return date.getDay() > WorkDay.SUNDAY && date.getDay() < WorkDay.SATURDAY;
    }
    cleanForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
    viewUpdate() {
        this.negotiationView.update(this.negotiations);
    }
}
