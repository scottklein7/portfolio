import Head from "next/head"
import Img from "next/image"
import Link from "next/link"
import { Fade } from "react-awesome-reveal"
import Nav from "../components/Nav"
import { sanityClient, imgUrl } from "../sanity"
import { Project } from "../typings"

interface Props {
  projects: [Project]
}

const truncateOverview = (str: String, cutOffNum: any) => {
  return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...' : str
}

export default function work({ projects }: Props) {
  console.log(projects)
  return (
    <main>
      <Head>

      </Head>

      <Nav />

      <div className="bg-sky-100 text-emerald-500 font-mono">
        <div className="flex flex-col gap-3 p-10 md:p-14">
          <h1 className="font-extrabold text-4xl">I build websites and web apps for small businesses, growing their digital presence in the process</h1>
          <p className="leading-loose">Check em out! These are some of my most recent projects I have completed. These case studies mainly showcase my web development and design skills. Building highly performant websites (<b>FASTER</b> than any of my local competitors), using next gen tools (<b>NO WORDPRESS!!</b>), all while providing truly aesthetically pleasing designs. Sounds good but overwhelming? Browse my projects, gather a basic gist, and then let me do the rest!</p>
        </div>

        <div className="flex flex-col gap-10 justify-center mt-10 p-10 md:p-14">
          {projects.map((project) => (
            <Fade key={project._id} direction='left' triggerOnce>
              <div className="bg-cyan-300 shadow-lg ">
                <div className="">
                  <div className="grid grid-cols-1 sm:grid-cols-2 text-center">
                    <Img
                      {...imgUrl(project.image.asset)}
                      className="flex mx-auto object-cover shadow-lg"
                      alt="profile picture" />
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

        </div>
      </div>
    </main>
  )
}


export const getServerSideProps = async () => {

  const query = `*[_type == 'project'][0..2]`

  const projects = await sanityClient.fetch(query);

  return {
    props: {
      projects
    }
  }
}

