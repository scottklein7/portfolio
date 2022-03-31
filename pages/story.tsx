import Img from 'next/image'
import React from 'react'
import Nav from '../components/Nav'
import Head from 'next/head';


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
                    <img
                        src={'https://imgs.search.brave.com/y39yHuzVOpCqMGSn_rA8c42a-iXzekZVdxOvzwsEhDA/rs:fit:640:640:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FkLzc0/LzA1L2FkNzQwNTk4/YjBjYWYwMjQ5N2I2/MDg1MmIzM2IyMjMx/LmpwZw'}
                        width={400}
                        height={450}
                        className="mt-5"
                    />
                    <h1 className="font-extrabold text-2xl">Intrested in my story, well take a look below!</h1>
                    <div className="flex flex-col gap-5 mb-5">
                        <p>I often times forget how blessed I truly am. Although it was a strange and windy path getting here,I reflect on how God has guided me through the dark in each and every moment in my life.</p>
                        <p>
                            I would have never imagined to be in the position I am today...
                            When I was younger I used to dread the thought of the traditional
                            9-5 cubicle job, thinking that somehow I was predestined for it, just as all my peers were. And that I had to go to college to "be successful" (whatever that means). I soon realized I could do whatever I wanted, it just required attention and effort. I dropped out of college and tried something different.
                        </p>
                        <p>
                            This ideology has followed me ever since. Before web development I worked restaurant jobs, started a successful landscaping company with hundred of completed projects and many happy clients, managing an estate (something I still do). But, I always wanted to do something technical, as software has always interested me.
                            So I decided software was something I wanted to do, and enrolled in a speciality school called general assembly. It was basically like going to become a plumber but for software engineering. I was taught how to learn, rather than being told how to learn (a common problem in schooling). And ever since then its been nothing but coding!
                        </p>

                        <p>
                            Web Design is a constantly changing field, software updates, new tools come out, etc. Being on top of it takes a curious mind, lucky for you my mind is always hungry for more information. I have never been able to quench my curiosity, I am constantly exploring topics weather it be my faith, software, macro economics, health, or farming.
                            I listned to enough podcasts this past year to make my head explode. If you didnt realize already, Im not a fan of the tradtional EDU system. I love learning for fun, not for grades, or piece of paper.
                        </p>
                        <p>Anyways, go outside, be joyful, praise God, and hire me for your web development needs! 😉</p>
                    </div>
                </article>
            </main>
        </>
    )
}

export default story