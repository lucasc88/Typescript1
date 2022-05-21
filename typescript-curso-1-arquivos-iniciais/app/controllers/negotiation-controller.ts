import { WorkDay } from "../enums/WorkDay.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiation-view.js";

export class NegotiationController {

    //HTMLInputElement as a type for the Controller Variables
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();
    //instance of NegotiationView using the div id #negotiationView
    private negotiationView = new NegotiationView('#negotiationView');
    private messageView = new MessageView('#messageView');

    constructor() {
        this.inputDate = document.querySelector('#date');
        this.inputQuantity = document.querySelector('#quantity');
        this.inputValue = document.querySelector('#value');
        this.negotiationView.update(this.negotiations);
    }

    public add(): void {
        const neg = Negotiation.createFrom(
            this.inputDate.value,
            this.inputQuantity.value,
            this.inputValue.value
        );

        if (!this.isWorkDay(neg.date)) {
            this.messageView.update('Trading is only allowed on business days.');
            return;
        }
        this.negotiations.add(neg);
        this.cleanForm();
        this.viewUpdate();
        this.messageView.update('The transaction was successful!');
    }

    private isWorkDay(date: Date): boolean {
        //0 - is Sunday , 6 - is Saturday
        return date.getDay() > WorkDay.SUNDAY && date.getDay() < WorkDay.SATURDAY;
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