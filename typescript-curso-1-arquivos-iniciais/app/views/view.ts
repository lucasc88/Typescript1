export class View<T> {

    //it's the HTML Element get by Id using the document.querySelector in the constructor
    protected element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }


    //render the element using the selector received in the constructor
    update(model: T): void {
        this.element.innerHTML = this.template(model);
    }

    template(model: T): string {
        throw Error('SubClass must override the TemplateMethod of the SuperClass');
    }
}