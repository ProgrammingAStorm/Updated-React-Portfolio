import { Container, Content, Heading } from "react-bulma-components";
import MessageBoard from "../components/MessageBoard";
import Banner from "../components/Banner";

export default function Home() {
    return (
        <>
            <Banner />
            
            <Container>
                <Content
                    className="p-3"
                >
                    <Heading>Welcome!</Heading>

                    <p>
                        This is my portfolio. I hope you enjoy what you see,
                        as it is all made with lots of love
                    </p>

                    <br />

                    <p>
                        If you are seeing this paragraph, then I'm sure you can already tell that my portfolio is yet to be completed.
                        I ask for your forgiveness as, the more I continue to develop my portfolio, the more ambitious and/or elaborate it becomes.
                        I hope to complete it soon, but I still hope that you find what you see an impressive display of my abilities, nonetheless.
                        Thank you for understanding.
                    </p>

                    <br />

                    <p>
                        I hope you enjoy the toys that I have created
                        as much as I enjoyed creating them!
                    </p>

                    <p>
                        Please leave a note, comment, suggestion, joke, etc.
                        in the message board below!
                    </p>
                </Content>

                <MessageBoard />
            </Container>
        </>
    );
};