import {Entity} from "../../core/domain/Entity";

type ClientProps = {
    name: string;
    email: string;
}

export class Client extends Entity<ClientProps> {
    private constructor(props: ClientProps, id?: string) {
        super(props, id);
    }

    static create(props: ClientProps, id?: string) {
        return new Client(props, id);
    }
}