import { NegotiationController } from "./controllers/negotiation-controller.js";
const controller = new NegotiationController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
});
const buttonImport = document.querySelector('#import');
if (buttonImport) {
    buttonImport.addEventListener('click', event => {
        controller.importData();
    });
}
else {
    throw Error('Import data button was not found');
}
