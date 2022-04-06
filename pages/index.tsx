import Link from "next/link";
import { sanityClient, imgUrl } from '../sanity'
import Nav from "../components/Nav"
import { Fade } from "react-awesome-reveal";
import Head from 'next/head';
import Testimonal from '../components/Testimonal';
import Tools from '../components/Tools';
import { Post, Project } from "../typings";
import Img from 'next/image';


interface Props {
  posts: [Post],
  projects: [Project]
}

export default function Home({ posts, projects }: Props) {

  const truncateOverview = (str: String, cutOffNum: any) => {
    return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...' : str
  }

  const profileSketch = "/assets/profilesketc22.png"
  const roadPicture = "/assets/road.png";

  return (
    <>
      <Head>
        <title>Freelance Web Developer, servicing Northern VA & Shenandoah Valley - Scott Klein</title>
        <meta name="description" content="Hey! Im Scott, a freelance Web Developer offering web development, design, SEO, and more. Servicing Northern Virginia and Shenandoah Valley VA." />
      </Head>

      <Nav />

      <main className="font-mono bg-sky-100 text-emerald-500">
        <header className="w-full mb-20">
          <Fade duration={1700} triggerOnce>
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center">
              <div className="mt-10 ml-10 md:text-center">
                <h1 className="font-extrabold text-2xl leading-relaxed"><span className="mr-1">👋</span>Hi! I'm Scott, a Freelance Full-stack Software Developer Based In Shenandoah Valley Virginia</h1>
              </div>
              <div className="mt-14 mx-auto">
                <Img
                  src={profileSketch}
                  alt="Personal profile main image"
                  objectFit="cover"
                  height={400}
                  width={400}
                  priority
                />
              </div>
            </div>
          </Fade>
        </header>

        <section className="flex justify-center p-10 md:p-14">
          <div className="bg-sky-200 p-10 shadow-lg grid grid-col-3 space-x-5">
            <div>
              <h2 className="font-bold text-2xl underline underline-offset-4 mb-10 text-center">Helping Grow Small Business By</h2>
            </div>

            <div className="flex flex-col md:flex-row">
              <Fade triggerOnce cascade direction="right" >
                <div className="p-2 text-2xl flex flex-col items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">Highly Performant Websites</h3>
                  <p className="font-normal text-sm">Need an agile website built with the latest and greatest software? Well, I got you covered! I will aide you by designing, developing, and hosting your brillant new site.</p>
                </div>
                <div className="p-2 text-2xl flex flex-col items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <h3 className="font-bold">SEO</h3>
                  <p className="font-normal text-sm">Obtaining a high ranking amongst search engines is crucial for attracting customers. Ensure your business gets found with SEO best practices!</p>
                </div>
                <div className="p-2 text-2xl flex flex-col items-center text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">Seamless eCommerce</h3>
                  <p className="font-normal text-sm">Need to sell products online? Overwhelmed and don't know where to start? Great! I'll take care everything, so that you can focus on what matters, and get back to sell your products or services.</p>
                </div>
              </Fade>
            </div>

            <div className="flex flex-col justify-center items-center md:flex-row">
              <Fade triggerOnce delay={1000} cascade direction="right">
                <div className="p-2 text-2xl flex flex-col items-center text-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">Social Media and Digital Ads</h3>
                  <p className="font-normal text-sm">Social Media and Digital Ads can be daunting, not knowing where to start and what services to use. So, let me ease your worries, I have got it covered! </p>
                </div>
                <div className="p-2 text-2xl flex flex-col items-center text-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  <h3 className="font-bold">Video Edits</h3>
                  <p className="font-normal text-sm">Set yourself apart, showcase your business with stunning videos, ones that portray your companies unique qualities and attributes.</p>
                </div>
                <div className="p-2 text-2xl flex flex-col items-center text-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="font-bold">Web & Product Analytics</h3>
                  <p className="font-normal text-sm">Gain insight from customer tendencies. Understand your customers, what they like, and what they don't like. Then implement solutions getting data driven results!</p>
                </div>
              </Fade>
            </div>
          </div>
          <div>
          </div>
        </section>

        <section className="flex flex-col gap-10 justify-center mt-10 p-10 md:p-14">
          <h3 className="text-center mb-10 font-extrabold text-4xl md:text-5xl">Preview of my Work</h3>
          {projects.map((project, idx) => (
            <Fade key={idx} direction='left' triggerOnce>

              <div className="bg-cyan-300 shadow-lg ">
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
                    <Img
                      {...imgUrl(project.image.asset)}
                      className="flex mx-auto object-cover shadow-lg"
                      alt="project preview main image"
                      layout="responsive"
                    />
                    <div className="flex flex-col justify-center items-center p-5 mt-8 mb-5 space-y-5 md:mt-0 md:mb-0">
                      <h3 className="text-center text-3xl font-extrabold">{project.name}</h3>
                      <p className="text-lg leading-9 md:text-xl lg:text-2xl">{truncateOverview(project.description, 300)}</p>
                      <Link href={`/work/${project.slug.current}`}>
                        <a className="bg-purple-800 w-26 flex items-center h-12 p-2 text-white font-extrabold text-sm hover:bg-purple-900 hover:animate-bounce hover:rounded md:mb-0">View Project</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </section>

        <section className="p-5 flex flex-col justify-center mt-20">
          <h3 className="text-center font-extrabold text-4xl md:text-5xl">My Story</h3>
          <Fade duration={1700} triggerOnce>
            <article className="text-green-600 flex justify-center flex-col p-10 space-y-5 md:flex-row md:ml-20 ">
              <div className="w-full p-5 flex flex-col gap-5 bg-slate-300 md:p-16">
                <p className="text-lg font-bold md:leading-9">“Two roads diverged in a wood and I – I took the one less traveled by, and that has made all the difference”.</p>
                <p className="text-lg md:leading-9">Throughout my life I have never been one to conform to traditional routes. Rather, I try and let God guide my path for me, the one he intended. Before freelance web development I held an array of jobs.
                  Working restaurant jobs, owning my own landscaping business, completing hundreds of projects, managing an estate, to freelance web development in the Shenandoah valley and Northern VA, while also regenerative farming in my spare time!</p>
                <p className="text-lg md:leading-9">
                  My passion lies in helping grow small businesses, and restoring a vibrant entrepreneurial lead economy this
                  country once prided itself on. I know what it's like owning a small business, it's hard, but it's worth every ounce of effort, especially when your doing something you love, while providing value to your customers.
                </p>
                <p className="text-lg md:leading-9">
                  Rest easy knowing your web design and developing needs are in the right hands.
                </p>
              </div>
              <div className="md:relative right-10 top-12">
                <Img
                  src={roadPicture}
                  alt="Road less traveled by image"
                  objectFit="cover"
                  height={450}
                  width={700}
                />
              </div>
            </article>
          </Fade>
        </section>

        <section className="p-5 flex flex-col items-center mt-10">
          <h3 className="text-center mb-10 font-extrabold text-4xl md:text-5xl">Tools</h3>
          <Tools />
        </section>

        <section className="flex flex-col justify-center items-center p-10 mt-20">
          <h3 className=" mb-10 font-extrabold text-3xl md:text-4xl">Dont Trust, Verify, what people are saying!</h3>
          <Fade duration={1700} triggerOnce>
            <Testimonal />
          </Fade>
        </section>

        <section className="p-5 flex flex-col items-center mt-10">
          <h3 className="mb-10 font-extrabold text-3xl md:text-4xl">Read My Blog!</h3>
          <Fade duration={1700} triggerOnce>
            <div className="flex flex-col items-center gap-3 
      md:gap-6 p-2 md:p-6">
              {posts?.map((post, idx) => (
                <Link key={idx} href={`/blog/${post.slug.current}`}>
                  <div className="border shadow-lg rounded-lg group cursor-pointer overflow-hidden bg-sky-100">
                    {post.mainImage && (
                      <Img
                        {...imgUrl(post.mainImage)}
                        height={200}
                        width={450}
                        objectFit="cover"
                        className="group-hover:animate-pulse"
                        alt="preview of blog post main image" />
                    )}
                    <div className="p-5">
                      <div className="flex flex-col gap-1">
                        <p className="text-lg font-bold">{post.title}</p>
                        <p className="text-xs">{post.description}</p>
                      </div>

                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Fade>
        </section>

        <section className="">
          <h3 className="text-center mt-20 font-extrabold text-4xl md:text-5xl">Contact Me!</h3>
          <Fade duration={1700} triggerOnce>
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
                <input className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-sky-200 outline-none focus:ring" required={true} type="text" name="name" id="yourname" />
              </p>
              <p>
                <label className="block" htmlFor="youremail">
                  Your Email:
                </label>
                <input className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-sky-200 outline-none focus:ring" name="email" required={true} type="email" id="youremail" />
              </p>
              <p>
                <label className="block" htmlFor="yourmessage">
                  Message:
                </label>
                <textarea
                  className="shadow border rounded py-2 px-3 mt-1 block w-full ring-sky-200 form-textarea outline-none required focus:ring" name="message" id="yourmessage"></textarea>
              </p>
              <p className="mt-3">
                <button className="w-full shadow bg-emerald-400 hover:bg-emerald-600 
                focus:shadow-outline focus:outline-none text-white 
                font-bold py-2 px-4 rounded cursor-pointer" type="submit">Send</button>
              </p>
            </form>
          </Fade>
        </section>

      </main>

    </>
  )
}


export const getServerSideProps = async () => {

  const query = `
  {
    "posts": *[_type == 'post']{
      title,
      description,
      mainImage,
      slug
    },
    "projects": *[_type == 'project']
  }
`

  const data = await sanityClient.fetch(query);

  const { posts, projects } = data;

  return {
    props: {
      posts,
      projects
    }
  }
}
