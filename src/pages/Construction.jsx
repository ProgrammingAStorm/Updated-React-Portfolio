import { Heading, Container, Section, Box } from "react-bulma-components";

export default function Construction() {
    return (
        <Container
            className="is-flex is-align-items-center"

            style={{
                fontSize: 'clamp(.75em, 1.5vw, 2rem)' 
            }}
        >
            <Box
                style={{
                    background: '#5BC0BE'
                }}
            >
                <Section>
                    <Box
                        style={{
                            background: '#6FFFE9'
                        }}
                    >
                        <Heading>
                            Under Construction!
                        </Heading>

                        <p>
                            This page is still under construction. Please be patient as I continue to work on it.
                            Please check often as I am still actively working on this site. Thank You!
                        </p>
                    </Box>
                </Section>
            </Box>
        </Container>
    );
};