import { Socket } from "socket.io-client";
import { EventList } from "./EventList";

export class On {
    static addListener(event: string, data: any)  {
        let eventData;

        switch(event) {
            // case EventList.Message.Receive:
            //     eventData = data
            //     break;
            default:
                eventData = data;
                break;
        }
    }
}