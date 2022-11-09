import { Container, Heading } from "react-bulma-components";
import MessageBoard from "../components/MessageBoard";

export default function Home() {
    return (
        <Container className="p-3">
            <Heading>Welcome!</Heading>

            <p>
                This is my portfolio. I hope you enjoy what you see.
                Everything you see is made by me with lots of love,
                and is hosted on my decentralized NFT domain.
            </p>

            <br />

            <p>

                I hope you enjoy the toys that I have created
                as much as I enjoyed creating them!
            </p>

            <p>
                Please leave a note, comment, or suggestion
                in the message board below!
            </p>

            <MessageBoard />
        </Container>
    );
};