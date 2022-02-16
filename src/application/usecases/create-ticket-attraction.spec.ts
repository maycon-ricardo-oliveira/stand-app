import {CreateTicketAttraction} from "./create-ticket-attraction";
import {InMemoryAttractionsRepository} from "../../domain/tests/repositories/in-memory-attractions-repository";
import {InMemoryClientsRepository} from "../../domain/tests/repositories/in-memory-clients-repository";
import {Client} from "../../domain/entities/client";
import {Attraction} from "../../domain/entities/attraction";

describe('Create ticket attraction use case', () => {
    it('should be able to create a new ticket attraction', async () => {
        const attractionRepository = new InMemoryAttractionsRepository();
        const clientsRepository = new InMemoryClientsRepository();

        const client = Client.create({
            name: 'Maycon',
            email: 'example@example.com'
        })

        const attraction = Attraction.create({
            theaterId: 'fake-theater-id',
            comedianId: 'fake-comedian-id',
            duration: 90
        })

        clientsRepository.items.push(client)
        attractionRepository.items.push(attraction)

        const sut = new CreateTicketAttraction(
            clientsRepository,
            attractionRepository
        );

        const response = await sut.execute({
            clientId: client.id,
            attractionId: attraction.id
        })

        expect(response).toBeTruthy()

    })

})