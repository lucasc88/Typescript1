import { NegotiationController } from "./controllers/negotiation-controller.js";

//new Controller instance
const controller = new NegotiationController();

//get the form from index.html
const form = document.querySelector('.form');
//add an EventListener when Submit
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.add();
    
})