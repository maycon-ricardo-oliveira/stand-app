import {Entity} from "../../core/domain/Entity";

type TicketProps = {
    clientId: string;
    attractionId: string;
    isPaid?: boolean;
}

export class Ticket extends Entity<TicketProps> {
    private constructor(props: TicketProps, id?: string) {
        super(props, id);
    }

    static create(props: TicketProps, id?: string) {
        return new Ticket({
            ...props,
            isPaid: props.isPaid ?? true,
        }, id);
    }
}