var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RuntimeLog } from "../decorators/RuntimeLog.js";
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
__decorate([
    RuntimeLog()
], NegotiationController.prototype, "add", null);
