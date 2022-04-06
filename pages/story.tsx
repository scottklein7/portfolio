import Img from 'next/image'
import React from 'react'
import Nav from '../components/Nav'
import Head from 'next/head';

const conformImg = "/assets/conform.png"

function story() {

    return (
        <>
            <Head>
                <title>About Scott Klein - Freelance Web Developer</title>
                <meta name="description" content="Curious about my background? How did I get into Web development & design? My life before Web Development in Shenandoah Valley and Northern VA" />
            </Head>

            <main className="bg-sky-100">
                <Nav />
                <article className="max-w-3xl p-5 flex flex-col items-center gap-5 mx-auto font-mono text-gray-700">
                    <Img
                        src={conformImg}
                        width={400}
                        height={450}
                        className="mt-5"
                        priority
                        objectFit="cover"

                    />
                    <h1 className="font-extrabold text-2xl">Intrested in my story, well take a look below!</h1>
                    <div className="flex flex-col gap-5 mb-5">
                        <p>I often times forget how blessed I truly am. Although it was a strange and windy path getting here, I reflect on how God has been my light in the dark at every moment.</p>
                        <p>
                            I would have never imagined to be in the position I am today... When I was younger I used to dread the thought of the traditional 9-5 cubicle job, thinking that somehow I was predestined for it, just as all my peers were.  I was told I had to go to college to "be successful" (whatever that means). Yet, college seemed like it would only force we further into a conventional drab life. I soon realized I could do whatever I wanted, it just required attention and effort. So, I dropped out of college and tried something different.
                        </p>
                        <p>
                            This ideology has followed me ever since. Before web development I worked restaurant jobs, started a successful landscaping company with hundred of completed projects and many happy clients, to managing an estate (something I still do). But, I always wanted to do something technical, as software has always interested me. So, I took a chance, and enrolled in a speciality school called general assembly. It was like going to become a plumber but for software engineering. I was taught how to learn, rather than being told how to learn (a common problem in schooling). I left with actual skills not a glorified piece of paper.
                        </p>

                        <p>
                            My desire to learn made Web development the perfect pursuit for me, as it takes a curious mind to navigate the ever changing field. Things are constantly changing as software updates come out, new tech stacks evolve, protocols change, etc. I have never been able to quench my curiosity, I am constantly exploring topics whether it be my faith, software, macro economics, health, or farming. Trust me, if something is changing I am gonna be on top if it, otherwise I wouldn't be able to provide you with the best services.
                        </p>
                        <p>Anyways, go outside, be joyful, praise God, and hire me for your web development needs! 😉</p>
                    </div>
                </article>
            </main>
        </>
    )
}

export default story