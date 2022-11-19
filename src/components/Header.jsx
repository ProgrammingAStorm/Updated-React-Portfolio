import { Navbar, Heading } from 'react-bulma-components';
import { useState } from 'react';

export default function Header({ setSection }) {
    const [burger, setBurger] = useState(false);
    const [projects, setProjects] = useState(false);

    return (
        <Navbar
            style={{
                maxWidth: '100vw'
            }}
            active={burger}
        >
            <Navbar.Brand
                className='mobile-flex-column'
            >
                <Navbar.Item
                    onClick={e => {
                        setSection('home');
                    }}
                >
                    <div className='p-5'>
                        <div id="heart-shape"></div>
                    </div>

                    <Heading>
                        ProgrammingAStorm
                    </Heading>
                </Navbar.Item>

                <Navbar.Burger
                    onClick={e => {
                        setBurger(!burger)
                    }}
                />
            </Navbar.Brand>

            <Navbar.Menu>
                <Navbar.Container>
                    <Navbar.Item active={projects}>
                        <Navbar.Link
                            onClick={e => {
                                setProjects(!projects)
                            }}
                        >
                            Projects
                        </Navbar.Link>
                        <Navbar.Dropdown>
                            <Navbar.Item
                                onClick={e => {
                                    setSection('bootcamp');
                                    setProjects(!projects)
                                }}
                            >
                                Bootcamp
                            </Navbar.Item>
                            <Navbar.Item
                                onClick={e => {
                                    setSection('construction');
                                    setProjects(!projects)
                                }}
                            >
                                Personal
                            </Navbar.Item>
                            <Navbar.Item
                                onClick={e => {
                                    setSection('construction');
                                    setProjects(!projects)
                                }}
                            >
                                Toys
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>

                    <Navbar.Item
                        onClick={e => {
                            setSection('about');
                        }}
                    >
                        About Me
                    </Navbar.Item>

                    <Navbar.Item
                        onClick={e => {
                            setSection('contact');
                        }}
                    >
                        Contact
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};