import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function hireTheBestFreelanceDevAround() {
    return (
        <>
            <main className="bg-sky-100 h-full md:h-screen">
                <Head>
                    <title>Hire Me - Scott Klein - a Freelance Web Developer, Designer </title>
                    <meta name="description" content="Hire me, a freelance Web Developer, Designer, SEO startegiest, and more... Servicing the Shenandoah Valley and Northern Virginia" />
                    <meta name="keywords" content="Hire web developer, Hire web designer, Shenandoah Valley, Harrisonburg VA, Reston VA, Woodstock VA," />
                </Head>

                <Nav />
                <div>
                    <div className="flex flex-col p-10 gap-5 md:text-center">
                        <h1 className="font-extrabold text-4xl text-center">Proposal Request</h1>
                        <p className="text-2xl font-thin">Do you need awesome web services such as web development, design , SEO, digital ads, or more? Let me know below</p>
                        <p className="text-2xl font-thin">Don't hesitate to reach out, even if your just saying hello! I'd love to help in any way possible</p>
                    </div>
                    <form className="flex flex-col p-5 max-w-2xl mx-auto gap-5" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <p className="hidden">
                            <label>
                                Don’t fill this out if you’re human: <input name="bot-field" />
                            </label>
                        </p>
                        <p>
                            <label className="block" htmlFor="yourname">
                                Your Name:
                            </label>
                            <input className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-sky-200 outline-none focus:ring" required={true} type="text" name="name" id="yourname" placeholder="Scott Klein" />
                        </p>
                        <p>
                            <label className="block" htmlFor="youremail">
                                Your Email:
                            </label>
                            <input className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-sky-200 outline-none focus:ring" name="email" required={true} type="email" id="youremail" placeholder="scottklein@email.com" />
                        </p>
                        <p>
                            <label className="block" htmlFor="currentwebsite">
                                Your Website Url:
                            </label>
                            <input className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-sky-200 outline-none focus:ring" name="currentwebsite" type="url" id="yourwebsite" placeholder="https://www.scottklein.dev" />
                        </p>
                        <p>
                            <label className="block" htmlFor="yourmessage">
                                What you need help with:
                            </label>
                            <textarea
                                className="shadow border rounded py-2 px-3 mt-1 block w-full ring-sky-200 form-textarea outline-none required focus:ring" name="message" id="yourmessage" placeholder="I need your webskills! Somebody forced me into a slow Wordpress site!"></textarea>
                        </p>
                        <p className="mt-3">
                            <button className="w-full shadow bg-emerald-400 hover:bg-emerald-600 
                focus:shadow-outline focus:outline-none text-white 
                font-bold py-2 px-4 rounded cursor-pointer" type="submit">Send</button>
                        </p>
                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default hireTheBestFreelanceDevAround