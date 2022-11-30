import { Navbar, Heading } from 'react-bulma-components';
import { useState } from 'react';

export default function Header({ setSection }) {
    const [burger, setBurger] = useState(false);
    const [projects, setProjects] = useState(false);

    return (
        <Navbar
            style={{
                fontSize: 'clamp(.75em, 1.5vw, 2rem)',
                minWidth: '100vw',
                background: '#1956FF'
            }}
            active={burger}
        >
            <Navbar.Brand
                className='mobile-flex-column'
            >
                <Navbar.Item
                    onClick={e => {
                        setSection('home');
                        setProjects(false)
                        setBurger(false)
                    }}
                >
                    <div className='p-5'>
                        <div id="heart-shape"></div>
                    </div>

                    <Heading
                        style={{
                            fontSize: 'clamp(1.75sem, 2vw, 3rem)'
                        }}
                    >
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
                    <Navbar.Item active={projects}

                        onBlur={(e) => {
                            setProjects(false)
                            setBurger(false)
                        }}
                    >
                        <Navbar.Link
                            onClick={e => {
                                setProjects(!projects)
                            }}
                        >
                            Projects
                        </Navbar.Link>
                        <Navbar.Dropdown
                        >
                            <Navbar.Item
                                onClick={e => {
                                    setSection('bootcamp');
                                    setProjects(false)
                                    setBurger(false)
                                }}
                            >
                                Bootcamp
                            </Navbar.Item>
                            <Navbar.Item
                                onClick={e => {
                                    setSection('construction');
                                    setProjects(false)
                                    setBurger(false)
                                }}
                            >
                                Personal
                            </Navbar.Item>
                        </Navbar.Dropdown>
                    </Navbar.Item>

                    <Navbar.Item
                        onClick={e => {
                            setSection('about');
                            setProjects(false)
                            setBurger(false)
                        }}
                    >
                        About Me
                    </Navbar.Item>

                    <Navbar.Item
                        onClick={e => {
                            setSection('contact');
                            setProjects(false)
                            setBurger(false)
                        }}
                    >
                        Contact
                    </Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
};