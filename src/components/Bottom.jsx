import { Footer, Content, Button, Icon } from 'react-bulma-components'
import Song from './Song';

export default function Bottom() {
    return (
        <Footer style={{
            //marginTop: '10rem'
        }}>
            <Content style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <h1 style={{
                    display: 'flex'
                }}>
                    Made with

                    <div className='ml-3' id="heart-shape" />
                </h1>

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

                <Song />
            </Content>
        </Footer>
    );
};