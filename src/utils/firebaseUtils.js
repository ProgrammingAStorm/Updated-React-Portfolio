import { database } from "./firebaseConfig";
import { ref, set } from "firebase/database";

export function sendMessage(body = null) {
    if(! body) {
        return;
    }

    set(ref(database, 'messages/'), {
        body
    });
}
