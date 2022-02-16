import {AttractionsRepository} from "../../../application/repositories/AttractionsRepository";
import {Attraction} from "../../entities/attraction";

export class InMemoryAttractionsRepository implements AttractionsRepository {
    public  items: Attraction[] = [];

    async findById(id: string): Promise<Attraction | null> {
       const attraction = this.items.find(attraction => attraction.id === id)

        if (!attraction) {
            return null;
        }

        return attraction;

    }
}