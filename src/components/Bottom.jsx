import { Footer, Content, Button, Icon, Heading, Box } from 'react-bulma-components'
//import Song from './Song';

export default function Bottom() {
    return (
        <Footer style={{
            background: '#1956FF'
        }}>
            <Box
                style={{
                    background: '#FF23FF'
                }}
            >
                <Content style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Heading style={{
                        display: 'flex'
                    }}>
                        Made with

                        <div className='ml-3' id="heart-shape" />
                    </Heading>

                    <Button.Group>
                        <Button>
                            <a href='https://github.com/ProgrammingAStorm'>
                                <Icon>
                                    <i className="fa-brands fa-github"></i>
                                </Icon>
                            </a>
                        </Button>

                        <Button>
                            <a href='https://www.linkedin.com/in/mark-pavel-744297202/'>
                                <Icon>
                                    <i className="fa-brands fa-linkedin"></i>
                                </Icon>
                            </a>
                        </Button>
                    </Button.Group>

                    {/*<Song />*/}
                </Content>
            </Box>
        </Footer>
    );
};