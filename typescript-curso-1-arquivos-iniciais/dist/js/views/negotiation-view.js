import { View } from "./view.js";
export class NegotiationView extends View {
    //returning a Template String. Lines without concatenetion (+).
    //It's a table with array of Negotiation. Each element is added in the table
    //join('') replaces the , to nothing
    //new Intl.DateTimeFormat().format() to format the date
    template(model) {
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
                    ${model.list().map(negotiation => {
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
