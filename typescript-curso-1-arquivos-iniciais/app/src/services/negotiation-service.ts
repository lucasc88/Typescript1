import { NegotiationsToday } from "../interfaces/negotiationsToday.js";
import { Negotiation } from "../models/negotiation.js";

export class NegotiationsService {

    //fetch API is used to request an external API. Assynchronous function. Returning Promise
    public getNegotiationsFromAPI(): Promise<Negotiation[]> {
        return fetch('http://localhost:8080/dados')
            .then(res => {
                return res.json();//JS do the parse to JSON
            })
            .then((data: NegotiationsToday[]) => {//the response is parsing to interface NegotiationsToday. Map to create Negotiation objects
                return data.map(d => {
                    return new Negotiation(new Date(), d.vezes, d.montante)
                })
            });
    }
}