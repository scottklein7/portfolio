import { GetStaticProps } from "next";
import PortableText from "react-portable-text";
import Nav from "../../components/Nav";
import { sanityClient, imgUrl } from "../../sanity";
import { Project } from "../../typings";
import Img from 'next/image';
import Head from "next/head";
import Footer from "../../components/Footer";

interface Props {
  project: Project
}

export default function project({ project }: Props) {
  return (
    <>
      <Head>
        <title>Completed Work - {project.name}</title>
        <meta name="description" content="Take a look at my work as I help small businesses grow using the best Web Development, Design, SEO, and E-Commerce best practices." />
      </Head>

      <main className="bg-sky-100 text-gray-700">
        <Nav />
        <div className="max-w-3xl mx-auto p-5 font-mono">
          <h1 className="text-4xl font-extrabold text-center mt-10 mb-10">{project.name}</h1>

          <div>
            {project.image && (
              <Img className="shadow-lg" {...imgUrl(project.image)} objectFit="cover" alt="main project image" />
            )}
          </div>
          <article className='mt-10 leading-relaxed'>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={project.blockContent}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-2xl font-bold my-5" {...props} />
                ),
                h2: (props: any) => (
                  <h1 className="text-xl font-bold my-5" {...props} />
                ),
                h3: (props: any) => (
                  <h1 className="text-xl font-bold my-5" {...props} />
                ),
                li: ({ children }: any) => (
                  <li className="list-disc ml-4">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a className="text-blue-500 hover:underline" href={href}>
                    {children}
                  </a>
                ),
              }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </>

  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "project"]{
    _id,
    slug{
      current
    }
  }`

  const projects = await sanityClient.fetch(query)

  const paths = projects.map((project: Project) => ({
    params: {
      slug: project.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "project" && slug.current == $slug][0]{
    _id,
    name,
    description,
    slug,
    image,
    blockContent
  }`

  const project = await sanityClient.fetch(query, {
    slug: params?.slug
  })

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      project
    },
    revalidate: 6800,
  }

}
