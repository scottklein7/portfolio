
function Contact() {
    return (
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
    )
}

export default Contact