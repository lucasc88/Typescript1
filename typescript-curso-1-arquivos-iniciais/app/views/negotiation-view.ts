import { Negotiations } from "../models/Negotiations.js";
import { View } from "./view.js";

export class NegotiationView extends View<Negotiations> {

    //returning a Template String. Lines without concatenetion (+).
    //It's a table with array of Negotiation. Each element is added in the table
    //join('') replaces the , to nothing
    //new Intl.DateTimeFormat().format() to format the date
    //access modifier as protected just to avoid its access. Only Update Method is available to use
    protected template(model: Negotiations): string {
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


}