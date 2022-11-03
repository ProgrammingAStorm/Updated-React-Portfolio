import { database } from "./firebaseConfig";
import { ref, set, onValue, push } from "firebase/database";

export function sendMessage(body = null) {
    if(!body) {
        return;
    }

    const messages = ref(database, 'messages/');
    const newMessage = push(messages);
    set(newMessage, {
        body
    });
};

export function getMessages() {
    const messages = ref(database, 'messages/');
    onValue(messages, (snapshot) => {
        console.log(snapshot.val())
    });
};