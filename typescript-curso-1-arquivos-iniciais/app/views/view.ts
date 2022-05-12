export class View {

    //it's the HTML Element get by Id using the document.querySelector in the constructor
    protected element: HTMLElement;

    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }


}