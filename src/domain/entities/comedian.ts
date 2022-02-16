import {Entity} from "../../core/domain/Entity";

type ComedianProps = {
    name: string;
    bio: string;
    thumbnail: string;
}

export class Comedian extends Entity<ComedianProps> {
    private constructor(props: ComedianProps, id?: string) {
        super(props, id);
    }

    public create(props: ComedianProps, id?: string) {
        return new Comedian(props, id);
    }
}