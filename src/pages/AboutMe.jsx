import { Container, Heading, Image, Columns, Content } from "react-bulma-components"

export default function AboutMe() {
    return (
        <Container
            className="p-3"
        >
            <Columns
                multiline
            >
                <Columns.Column
                    size={'half'}
                    mobile={
                        {
                            size: 'full',
                        }
                    }
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Heading

                    >
                        This is me:
                    </Heading>
                </Columns.Column>

                <Columns.Column
                    size={'one-quarter'}
                    //offset={'one-quarter'}
                    mobile={
                        {
                            size: 'full',
                        }
                    }
                >
                    <Image
                        src="/assets/imgs/1660255004624.jpeg"
                        rounded
                    //size={128}
                    />
                </Columns.Column>
            </Columns>

            <Container>
                <div
                    className="
                    has-text-centered
                    is-size-5"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas harum commodi, delectus excepturi ratione voluptates error itaque id consequuntur, nostrum minima. Cum ut tempora modi dignissimos tempore odio, totam consequatur?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cupiditate odio, enim accusantium aliquam quia maiores sequi tempora, saepe deleniti obcaecati nihil, fugit vero omnis debitis sint natus totam officia?
                </div>
            </Container>
        </Container>
    );
};