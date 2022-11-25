import { useState, useRef } from "react";
import { Button, Form, Box } from "react-bulma-components";
import emailjs from '@emailjs/browser';

export default function EmailForm() {
    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('')
    const [closing, setClosing] = useState('');
    const [signature, setSignature] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', form.current, 'zcS3kZHsT8dpr6au_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setSubject('');
        setName('');
        setMessage('');
        setEmail('');
        setClosing('');
        setSignature('');
    };

    return (
        <Box
            style={{
                background: "#6FFFE9"
            }}
        >
            <form ref={form} onSubmit={sendEmail}>
                <Form.Field>
                    <Form.Label>
                        Subject
                    </Form.Label>
                    <Form.Control>
                        <Form.Input
                            name="subject"
                            value={subject}
                            placeholder={'Job Offer For You!'}
                            onChange={
                                (e) => {
                                    setSubject(e.target.value)
                                }
                            }
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field>
                    <p>
                        Hello Mark,
                    </p>

                    <br />

                    <p>
                        My name is
                    </p>

                    <Form.Control>
                        <Form.Input
                            name="name"
                            value={name}
                            placeholder="Billy Bob,"
                            onChange={
                                (e) => {
                                    setName(e.target.value)
                                }
                            }
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field>
                    <Form.Label>
                        Message
                    </Form.Label>

                    <Form.Control>
                        <Form.Textarea
                            name="message"
                            value={message}
                            placeholder="and I have a killer job offer for you!"
                            onChange={
                                (e) => {
                                    setMessage(e.target.value)
                                }
                            }
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field>
                    <p>
                        You can email me back at
                    </p>

                    <Form.Control>
                        <Form.Input
                            name="email"
                            value={email}
                            placeholder="recruiter@company.com"
                            onChange={
                                (e) => {
                                    setEmail(e.target.value);
                                }
                            }
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field
                    className="is-flex is-justify-content-space-around"
                >

                    <Form.Control
                        className="m-1"
                    >
                        <Form.Label>
                            Closing
                        </Form.Label>

                        <Form.Input
                            name="closing"
                            value={closing}
                            placeholder={'Yours Truly,'}
                            onChange={
                                (e) => {
                                    setClosing(e.target.value)
                                }
                            }
                        />
                    </Form.Control>


                    <Form.Control
                        className="m-1"
                    >
                        <Form.Label>
                            Signature
                        </Form.Label>

                        <Form.Input
                            name="signature"
                            value={signature}
                            placeholder={'Billy'}
                            onChange={
                                (e) => {
                                    setSignature(e.target.value)
                                }
                            }
                        />
                    </Form.Control>
                </Form.Field>

                <Form.Field>
                    <Form.Control
                        className="is-flex is-justify-content-space-around"
                    >
                        <Button
                            color={'success'}
                            type='submit'
                        >
                            Submit
                        </Button>

                        <Button
                            color={'danger'}
                        >
                            Clear
                        </Button>
                    </Form.Control>
                </Form.Field>

                <p>
                    I would just like to note that the lack of input validation is intentional.
                    If you would like to send me a completely empty email for no reason, then please feel free to do so.
                </p>
            </form>
        </Box>
    );
};