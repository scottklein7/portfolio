// export default function HireForm() {
//     return (

//         <form className="flex flex-col p-5 max-w-2xl mx-auto gap-5" name="hire" method="POST" data-netlify="true" netlify-honeypot="bot-field">
//             <input type="hidden" name="form-name" value="hire" />
//             <p className="hidden">
//                 <label>
//                     Don’t fill this out if you’re human: <input name="bot-field" />
//                 </label>
//             </p>
//             <p>
//                 <label className="block" htmlFor="yourname">
//                     Your Name:
//                 </label> 
//                 <input className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-sky-200 outline-none focus:ring" type="text" name="name" id="yourname" />
//             </p>
//             <p>
//                 <label className="block" htmlFor="youremail">
//                     Your Email:
//                 </label> 
//                 <input className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-sky-200 outline-none focus:ring" type="text" name="name" id="yourname" type="email" name="email" id="youremail" />
//             </p>
//             <p>
//                 <label className="block" htmlFor="yourmessage">
//                     Message:
//                 </label> 
//                 <textarea
//                 className="shadow border rounded py-2 px-3 mt-1 block w-full ring-sky-200 form-textarea outline-none focus:ring" name="message" id="yourmessage"></textarea>
//             </p>
//             <p className="mt-3">
//                 <button className="w-full shadow bg-emerald-400 hover:bg-emerald-600 
//                 focus:shadow-outline focus:outline-none text-white 
//                 font-bold py-2 px-4 rounded cursor-pointer" type="submit">Send</button>
//             </p>
//         </form>

//     )
// }