import { Navbar, Heading } from 'react-bulma-components';
import { useState } from 'react';

export default function Header() {
    const [burger, setBurger] = useState(false);
    const [projects, setProjects] = useState(false);

    return (
        <Navbar active={burger}>
            <Navbar.Brand>
                <Navbar.Item className='p-5'>
                    <div id="heart-shape"></div>
                </Navbar.Item>

                <Navbar.Item href="/">
                    <Heading>
                        ProgrammingAStorm
                    </Heading>
                </Navbar.Item>

                <Navbar.Burger 
                    onClick={ e => {
                        setBurger(!burger)
                    }}
                />
            </Navbar.Brand>

            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item active={projects}>
                        <Navbar.Link
                            onClick={ e => {
                                setProjects(!projects)
                            }}
                        >
                            Projects
                        </Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item href='/projects/bootcamp'>
                                Bootcamp
                            </Navbar.Item>
                            <Navbar.Item href='/projects/personal'>
                                Personal
                            </Navbar.Item>
                            <Navbar.Item href='/projects/toys'>
                                Toys
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>

                    <Navbar.Item href='/about'>
                        About Me
                    </Navbar.Item>

                    <Navbar.Item href='/contact'>
                        Contact
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};