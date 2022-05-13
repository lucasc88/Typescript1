import { View } from "./view.js";

//View responsable to show the messages
export class MessageView extends View<string> {

    //access modifier as protected just to avoid its access. Only Update Method is available to use
    protected template(model: string): string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }

}