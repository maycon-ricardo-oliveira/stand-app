import {Ticket} from "../../domain/entities/ticket";
import {ClientsRepository} from "../repositories/ClientsRepository";
import {AttractionsRepository} from "../repositories/AttractionsRepository";

type CreateTicketAttractionRequest = {
    clientId: string;
    attractionId: string;
}
export class CreateTicketAttraction {

    constructor (
        private clientsRepository: ClientsRepository,
        private attractionsRepository: AttractionsRepository
    ) { }

    async execute({clientId, attractionId}: CreateTicketAttractionRequest) {

        const client = await this.clientsRepository.findById(clientId)
        const attraction = await this.attractionsRepository.findById(attractionId)

        if (!client) {
            throw new Error('Student does not exists.')
        }

        if (!attraction) {
            throw new Error('Attraction does not exists.')
        }

        return Ticket.create({
            clientId,
            attractionId
        });

    }

}