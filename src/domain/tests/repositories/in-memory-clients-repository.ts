import {ClientsRepository} from "../../../application/repositories/ClientsRepository";
import {Client} from "../../entities/client";

export class InMemoryClientsRepository implements ClientsRepository {
    public  items: Client[] = [];

    async findById(id: string): Promise<Client | null> {
        const client = this.items.find(client => client.id === id)

        if (!client) {
            return null;
        }

        return client;

    }

}