import { useState } from "react";
import { Box, Button, Container, Content, Form, Heading, Media } from "react-bulma-components";
import { ref, getDatabase, push, set } from "firebase/database";
import { useList } from 'react-firebase-hooks/database';

import { app } from "../utils/firebaseConfig";
import { getMessages } from "../utils/firebaseUtils";

export default function MessageBoard() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('');
    const [messageState, setMessageState] = useState('');
    const [noHelp, setNoHelp] = useState(true)

    const [snapshots, loading, error] = useList(ref(getDatabase(app), 'messages'))

    function sendMessage(body = null) {
        if (!body) {
            return;
        }

        const database = getDatabase(app)

        const messages = ref(database, 'messages/');
        const newMessage = push(messages);
        set(newMessage, {
            body
        });

        window.location.reload();
    };

    return (
        <Container
            className="p-3"
        >
            <Box>
                {error && <strong>Error: {error}</strong>}
                {loading && <span>List: Loading...</span>}
                {!loading && snapshots && (
                    snapshots.map(s => {
                        return (
                            <Media renderAs="article" key={s.key}>
                                <Media.Item>
                                    <Content>
                                        <Heading>
                                            {s.val().body.name}
                                        </Heading>
                                        <p>
                                            {s.val().body.message}
                                        </p>
                                    </Content>
                                </Media.Item>
                            </Media>
                        );
                    })
                )}
            </Box>

            <Box>
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
                                        setMessageState('danger')
                                        setNoHelp(false)
                                        return;
                                    }

                                    setMessageState('')
                                    setNoHelp(true)
                                    return setMessage(value);
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