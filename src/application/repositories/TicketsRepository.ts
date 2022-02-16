import {Ticket} from "../../domain/entities/ticket";

export interface TicketsRepository {
    findById(id: string): Promise<Ticket | null>
}