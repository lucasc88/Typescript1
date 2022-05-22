import { Negotiation } from "../models/negotiation.js";
export class NegotiationsService {
    getNegotiationsFromAPI() {
        return fetch('http://localhost:8080/dados')
            .then(res => {
            return res.json();
        })
            .then((data) => {
            return data.map(d => {
                return new Negotiation(new Date(), d.vezes, d.montante);
            });
        });
    }
}
