import {Client} from "../../domain/entities/client";

export interface ClientsRepository {
    findById(id: string): Promise<Client | null>
}