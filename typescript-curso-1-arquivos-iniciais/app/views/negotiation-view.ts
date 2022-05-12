import { Negotiations } from "../models/Negotiations.js";

export class NegotiationView {

    //it's the HtmlElement div #negotiationView
    private element: HTMLElement;


    //NegotiationController will create an instance passing as a parameter the div Id #negotiationView
    constructor(selector: string) {
        this.element = document.querySelector(selector);//div #negotiationView
    }

    //returning a Template String. Lines without concatenetion (+).
    //It's a table with array of Negotiation. Each element is added in the table
    //join('') replaces the , to nothing
    //new Intl.DateTimeFormat().format() to format the date
    template(model: Negotiations): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Quantity</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.list().map(negotiation =>{
                        return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
                                <td>${negotiation.quantity}</td>
                                <td>${negotiation.value}</td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    //render the element using the selector received in the constructor
    update(model: Negotiations): void{
        this.element.innerHTML = this.template(model);
    }
}