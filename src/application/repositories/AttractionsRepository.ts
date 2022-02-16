import {Attraction} from "../../domain/entities/attraction";

export interface AttractionsRepository {
    findById(id: string): Promise<Attraction | null>
}