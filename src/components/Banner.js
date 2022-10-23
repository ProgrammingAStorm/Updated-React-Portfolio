import { Hero, Container, Heading } from 'react-bulma-components';

export default function Banner() {
    return (
        <Hero style={{
            animation: "gradient 13s ease infinite",
            background: "linear-gradient(-50deg, var(--primary-color), var(--tertiary-color), var(--secondary-color))",
            backgroundSize: "400% 400%"
        }}>
            <Hero.Body>
                <Container>
                    <Heading>
                        Mark Pavel
                    </Heading>
                    <Heading
                        size={3}
                        subtitle
                    >
                        Portfolio
                    </Heading>
                </Container>
            </Hero.Body>
        </Hero>
    );
};