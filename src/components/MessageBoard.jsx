import { useState, useEffect } from "react";
import { Box, Button, Container, Content, Form, Heading, Media } from "react-bulma-components";
import { ref, getDatabase, push, onValue } from "firebase/database";

import { app } from "../utils/firebaseConfig";

export default function MessageBoard() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('');
    const [messageState, setMessageState] = useState('');
    const [noHelp, setNoHelp] = useState(true)
    const [messages, setMessages] = useState([]);

    const messageRef = ref(getDatabase(app), 'messages/');

    useEffect(() => {
        onValue(messageRef, (snapshot) => {
            const x = [];

            snapshot.forEach(s => {
                x.push({
                    name: s.val().name,
                    message: s.val().message,
                    key: s.key
                })
            })
            setMessages(x)
        })
    }, [])

    function sendMessage(body = null) {
        if (!body) {
            return;
        }

        push(messageRef, body);
    };

    return (
        <Container
            className="p-3"
        >
            <Box
                style={{
                    background: '#6FFFE9'
                }}
            >
                {!messages && <span>Loading...</span>}
                {messages.length === 0 &&
                    <Box
                        style={{
                            background: '#6FFFE9'
                        }}
                    >
                        <Heading>
                            The message board is empty!
                        </Heading>

                        <p>
                            Thats actually good news for you.
                            Now you get to be the first one to leave a message!
                        </p>
                    </Box>}
                {messages && (
                    messages.map(m => {
                        return (
                            <Media
                                renderAs="article"
                                key={m.key}
                            >
                                <Media.Item>
                                    <Content>
                                        <Heading>
                                            {m.name}
                                        </Heading>
                                        <p>
                                            {m.message}
                                        </p>
                                    </Content>
                                </Media.Item>
                            </Media>
                        );
                    })
                )}
            </Box>

            <Box
                style={{
                    background: '#6FFFE9'
                }}
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();

                        if (!message) {
                            setMessageState('danger');
                            setNoHelp(false);
                            return;
                        }

                        if (!name) {
                            sendMessage({
                                name: 'Anonymous',
                                message
                            });
                        } else {
                            sendMessage({
                                name,
                                message
                            });
                        }

                        setName('');
                        setMessage('');
                        setMessageState('');
                        setNoHelp(true);
                    }}
                >
                    <Form.Field>
                        <Form.Label>
                            Name
                        </Form.Label>
                        <Form.Control>
                            <Form.Input
                                placeholder="Anonymous"
                                value={name}
                                onChange={(e) => {
                                    return setName(e.target.value)
                                }}
                            />
                        </Form.Control>
                    </Form.Field>

                    <Form.Field>
                        <Form.Label>
                            Message
                        </Form.Label>
                        <Form.Control>
                            <Form.Textarea
                                color={messageState}
                                value={message}
                                onChange={(e) => {
                                    const value = e.target.value

                                    if (!value) {
                                        setMessageState('danger');
                                        setNoHelp(false);
                                    } else {
                                        setMessageState('');
                                        setNoHelp(true);
                                    }

                                    setMessage(value);
                                }}
                            />
                        </Form.Control>
                        <Form.Help
                            color={messageState}
                            invisible={noHelp}
                        >
                            Message field cannot be empty.
                        </Form.Help>
                    </Form.Field>

                    <Form.Field
                        kind="group"
                    >
                        <Form.Control>
                            <Button
                                color="success"
                            >
                                Submit
                            </Button>
                        </Form.Control>
                    </Form.Field>
                </form>
            </Box>
        </Container>
    );
};