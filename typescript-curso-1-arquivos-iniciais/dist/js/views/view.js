export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    //render the element using the selector received in the constructor
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
