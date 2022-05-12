import { View } from "./view.js";
//View responsable to show the messages
export class MessageView extends View {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
