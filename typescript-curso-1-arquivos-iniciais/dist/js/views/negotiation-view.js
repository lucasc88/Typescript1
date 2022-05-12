export class NegotiationView {
    //NegotiationController will create an instance passing as a parameter the div Id #negotiationView
    constructor(selector) {
        this.element = document.querySelector(selector); //div #negotiationView
    }
    //returning a Template String. Lines without concatenetion (+).
    //It's a table with array of Negotiation. Each element is added in the table
    //join('') replaces the , to nothing
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
                                <td>${negotiation.date}</td>
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
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
