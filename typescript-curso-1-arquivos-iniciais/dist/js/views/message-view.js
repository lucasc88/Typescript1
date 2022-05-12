import { View } from "./view.js";
//View responsable to show the messages
export class MessageView extends View {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
