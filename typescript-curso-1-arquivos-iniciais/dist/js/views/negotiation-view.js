export class NegotiationView {
    //NegotiationController will create an instance passing as a parameter the div Id #negotiationView
    constructor(selector) {
        this.element = document.querySelector(selector); //div #negotiationView
    }
    //returning a Template String. With new lines without concatenetion (+). Declare the view template
    template() {
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
                </tbody>
            </table>
        `;
    }
    //render the element using the selector received in the constructor
    update() {
        this.element.innerHTML = this.template();
    }
}
