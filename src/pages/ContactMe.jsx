import { Box, Columns, Container, Content, Heading } from "react-bulma-components"
import EmailForm from "../components/EmailForm";

export default function ContactMe() {
    return (
        <Container
            className="is-flex"
        >
            <Columns
                style={{
                    width: '85vw',
                    margin: '1rem'
                }}
            >
                <Columns.Column
                    size={'half'}
                >
                    <Box
                        style={{
                            background: '#5BC0BE'
                        }}
                    >
                        <address>
                            <Heading
                                className="is-flex"
                            >
                                <Box
                                    style={{
                                        background: '#6FFFE9'
                                    }}
                                >
                                    Mark Pavel
                                </Box>
                            </Heading>

                            <Box
                                style={{
                                    background: '#6FFFE9'
                                }}
                            >
                                <Content
                                    display="flex"
                                    flexDirection="column"
                                >


                                    <ul>
                                        <li
                                            className="is-flex is-justify-content-center"
                                        >
                                            <p>
                                                Email:
                                            </p>

                                            <a
                                                className="ml-2"
                                                href="mailto: programmingastorm@gmail.com"
                                            >
                                                programmingastorm@gmail.com
                                            </a>
                                        </li>

                                        <li
                                            className="is-flex is-justify-content-center"
                                        >
                                            <p>
                                                Facebook:
                                            </p>

                                            <a
                                                className="ml-2"
                                                href="https://www.facebook.com/mark.pavel.528/"
                                            >
                                                Mark Pavel
                                            </a>
                                        </li>

                                        <li
                                            className="is-flex is-flex-direction-column"
                                        >
                                            <div
                                                className="is-flex is-justify-content-center"
                                            >
                                                <p>
                                                    Phone:
                                                </p>

                                                <p
                                                    className="ml-2"
                                                >
                                                    (734) 341-9709
                                                </p>
                                            </div>

                                            <p>
                                                Feel free to call, just know that I don't pick up numbers I don't recognize, so leave a message and I'll get back to you ASAP. Thanks.
                                            </p>
                                        </li>
                                    </ul>
                                </Content>
                            </Box>
                        </address>
                    </Box>
                </Columns.Column>

                <Columns.Column
                    size={'half'}
                >
                    <Box
                        style={{
                            background: '#5BC0BE'
                        }}
                    >
                        <Heading
                            className="is-flex"
                        >
                            <Box
                                style={{
                                    background: '#6FFFE9'
                                }}
                            >
                                Send me an email!
                            </Box>
                        </Heading>

                        <EmailForm />
                    </Box>
                </Columns.Column>
            </Columns>
        </Container>
    );
};