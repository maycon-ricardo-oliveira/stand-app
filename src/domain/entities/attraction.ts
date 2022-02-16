import {Entity} from "../../core/domain/Entity";

type AttractionProps = {
    theaterId: string;
    comedianId: string;
    duration: number;
    date?: Date;
}

export class Attraction extends Entity<AttractionProps> {
    private constructor(props: AttractionProps, id?: string) {
        super(props, id);
    }

    static create(props: AttractionProps, id?: string) {
        return new Attraction({
            ...props,
            date: props.date ?? new Date(),
        }, id);
    }
}