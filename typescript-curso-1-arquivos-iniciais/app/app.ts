import { NegotiationController } from "./src/controllers/negotiation-controller.js";

//new Controller instance
const controller = new NegotiationController();

//get the form from index.html
//The "strictNullChecks": true in the tsconfig.json is to force the developer to deal with possible null variables
//In this case bellow, a explicit cast is applied in the document.querySelector();
// as HTMLInputElement or <HTMLInputElement> are 2 valid ways to cast
const form = <HTMLInputElement> document.querySelector('.form');

//add an EventListener when Submit
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();

})