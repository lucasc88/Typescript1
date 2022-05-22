import { domInjector } from "../decorators/dom-injector.js";
import { RuntimeLog } from "../decorators/RuntimeLog.js";
import { WorkDay } from "../enums/WorkDay.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/Negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationView } from "../views/negotiation-view.js";

export class NegotiationController {

    //HTMLInputElement as a type for the Controller Variables
    @domInjector('#date')
    private inputDate: HTMLInputElement;
    @domInjector('#quantity')
    private inputQuantity: HTMLInputElement;
    @domInjector('#value')
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();
    //instance of NegotiationView using the div id #negotiationView
    private negotiationView = new NegotiationView('#negotiationView');
    private messageView = new MessageView('#messageView');

    //The "strictNullChecks": true in the tsconfig.json is to force the developer to deal with possible null variables
    //In this case bellow, a explicit cast is applied in the document.querySelector();
    // as HTMLInputElement or <HTMLInputElement> are 2 valid ways to cast
    constructor() {
        this.negotiationView.update(this.negotiations);
    }

    @RuntimeLog()
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
    }

    //fetch API is used to request an external API. Assynchronous function
    importData(): void {
        fetch('http://localhost:8080/dados')
            .then(res => {
                return res.json();//JS do the parse to JSON
            })
            .then((data: any[]) => {//the response is a Array<any>. Map to create Negotiation objects
                return data.map(d => {
                    return new Negotiation(new Date(), d.vezes, d.montante)
                })
            })
            .then(negotiationsFromAPI => {//here the data is an Array<Negotiation>
                for (let n of negotiationsFromAPI) {
                    this.negotiations.add(n);//add in the Negotiations
                }
                this.negotiationView.update(this.negotiations);
            });

    }
}