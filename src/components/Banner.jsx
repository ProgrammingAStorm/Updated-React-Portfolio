import { Hero, Container, Heading, Content } from 'react-bulma-components';

export default function Banner() {
    return (
        <Hero style={{
            animation: "gradient 13s ease infinite",
            background: "linear-gradient(-50deg, var(--primary-color), var(--tertiary-color), var(--secondary-color))",
            backgroundSize: "400% 400%"
        }}>
            <Hero.Body>
                <Container
                    className='is-flex is-justify-content-space-between mobile-flex-column'
                >
                    <div>
                        <Heading>
                            Mark Pavel
                        </Heading>
                        <Heading
                            size={3}
                            subtitle
                        >
                            Portfolio
                        </Heading>
                    </div>

                    <Content
                        className='is-flex is-flex-direction-column is-align-items-center px-2 mt-5'
                        style={{
                            minWidth: '15vw',
                            minHeight: '15vh'
                        }}
                    >
                        <p
                            className='m-0'
                            style={{
                                fontSize: '1.75rem',
                                color: '#4a4a4a'
                            }}
                        >
                            The style is:
                        </p>

                        <div
                            className='is-flex mt-1 is-align-items-center'
                        >
                            <div
                                className='is-flex'
                                style={{
                                    fontSize: '1.25rem'
                                }}
                            >
                                <p
                                    className='m-0'
                                    style={{
                                        color: '#5BC0BE'
                                    }}
                                >
                                    M
                                </p>
                                <p
                                    className='m-0'
                                    style={{
                                        color: '#6FFFE9'
                                    }}
                                >
                                    I
                                </p>
                                <p
                                    className='m-0'
                                    style={{
                                        color: '#5BC0BE'
                                    }}
                                >
                                    N
                                </p>
                                <p
                                    className='m-0'
                                    style={{
                                        color: '#6FFFE9'
                                    }}
                                >
                                    T
                                </p>
                            </div>

                            <Heading
                                className='m-0 ml-3'
                                style={{
                                    color: '#0B132B',
                                    fontSize: '1.3rem'
                                }}
                            >
                                Chocolate Cake
                            </Heading>
                        </div>

                        <p
                            className='m-0'
                            style={{
                                fontSize: '1.75rem',
                                color: '#4a4a4a'
                            }}
                        >
                            with
                        </p>

                        <div
                            className='is-flex'
                        >
                            <p
                                className='m-0'
                                style={{
                                    color: '#1956FF',
                                    fontSize: '1.75rem'
                                }}
                            >
                                raspberry
                            </p>

                            <p
                                className='m-0 ml-2'
                                style={{
                                    color: '#FF23FF',
                                    fontSize: '1.75rem'
                                }}
                            >
                                frosting.
                            </p>
                        </div>
                    </Content>
                </Container>
            </Hero.Body>
        </Hero>
    );
};