import { runtimeLog } from "../decorators/runtimeLog.js";

export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
