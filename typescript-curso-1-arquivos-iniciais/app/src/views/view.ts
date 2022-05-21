import { RuntimeLog } from "../decorators/RuntimeLog.js";

export abstract class View<T> {

    //it's the HTML Element get by Id using the document.querySelector in the constructor
    protected element: HTMLElement;

    constructor(selector: string) {
        this.element = <HTMLInputElement> document.querySelector(selector);
    }


    //render the element using the selector received in the constructor
    @RuntimeLog(true)
    public update(model: T): void {
        this.element.innerHTML = this.template(model);
    }

    //access modifier as protected just to avoid its access. Only Update Method is available to use
    protected abstract template(model: T): string;
}