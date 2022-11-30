import { Container, Heading, Image, Columns, Content, Box } from "react-bulma-components"

export default function AboutMe() {
    return (
        <Container
            className="p-3"

            style={{
                fontSize: 'clamp(.75em, 1.5vw, 2rem)'
            }}
        >
            <Box
                style={{
                    background: '#5BC0BE'
                }}
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
                        <Box
                            style={{
                                background: '#6FFFE9'
                            }}
                        >
                            <Heading
                                size={'2'}
                            >
                                This is me:
                            </Heading>
                        </Box>
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
                            src="public/assets/imgs/1660255004624.jpeg"
                            rounded
                        //size={128}
                        />
                    </Columns.Column>
                </Columns>

                <Container>
                    <Box
                        style={{
                            background: '#6FFFE9'
                        }}
                    >
                        <Content
                            className="
                    has-text-centered
                    is-size-5"
                        >
                            <Heading
                                size={'3'}
                            >
                                Introduction
                            </Heading>

                            <p>
                                My name is Mark Pavel and thank you very much for visiting my portfolio website. I like to code for fun, and if your here, then I'm hoping to code something for you.
                                I was born and raised an American, but my parents were immigrants from Romania. My heritage has taught me that if you work hard, keep going, and trust God, you will be taken care.
                                I have applied that mindset to becoming the best programmer I could be, and I hope that mindset is demonstrated to you as you browse my works.
                                Please feel free to leave a note on the <a href="/">message board</a>, or if you would like to get into <a href="/contact">contact</a> with me then you can feel free to send me an email.
                            </p>

                            <Heading
                                size={'3'}
                            >
                                Education and Experience
                            </Heading>

                            <p>
                                I started to learn to code during Fall semester of 2019 at Schoolcraft College, my first semester at that, where I started out learning the basics of coding with Python.
                                The following Spring semester I began to learn slightly more advanced coding topics (mostly OOP with a light sprinkling of algorithms and data structures) with C++ and C#,
                                which both greatly impacted my coding style and syntax preferences. Feeling hopeful that I could score a job with what I knew, I spent that Summer applying to jobs with no luck.
                                That frustration lead me to enlisting with United States Marine Corps. in the Spring of 2020, which only lead to me dropping out and wasting 3 months of my life while not learning to code.
                                When I got home, I knew that it was time to pay attention and finish my schooling, so during the Winter semester of 2020 and early into 2021, I learned Java at Schoolcraft College.
                            </p>

                            <p>
                                While I was still learning Java is when I first had heard about coding bootcamps.
                                College began to drag from the poor technical-to-GenEd class ratio; I felt most of my time was spent learning things that had nothing to do with coding, and the coding classes were too spread out while not teaching me the things I saw people wanted me to know.
                                Needless to say, when I saw companies were offering programs to teach the skills of an actual coding career, I was immediatly convinced that I had to sign-up for one.
                                I ending up settling with a bootcamp from U2 Bootcamps through Michigan State University; I was very excited as all of the skills and technologies I was going to be taught were desired requisites at positions I have previously applied to.
                                I ended up signing up with U2 in the Winter of 2021 with the bootcamp starting in April of 2022, and I spent the mean time learning Kotlin and Android development.
                                Now after being trained in Javascript and the MERN stack, I continue on my own coding for fun in hopes of attracting the attention of employers to me.
                            </p>

                            <Heading
                                size={'3'}
                            >
                                The Future
                            </Heading>

                            <p>
                                Now that I'm no longer studying, I look forward to the projects that I work towards to further my web development career.
                                I am learning new things every day, and am always full of new ideas, and I hope to one day return to college to study game development, my true love in programming.
                            </p>
                        </Content>
                    </Box>
                </Container>
            </Box>
        </Container>
    );
};