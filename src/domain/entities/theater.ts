import {Entity} from "../../core/domain/Entity";

type TheaterProps = {
    name: string;
    address: string;
    amountPeople: number;
}

export class Theater extends Entity<TheaterProps> {
    private constructor(props: TheaterProps, id?: string) {
        super(props, id);
    }

    static create(props: TheaterProps, id?: string) {
        return new Theater(props, id);
    }
}