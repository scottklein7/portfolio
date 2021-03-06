import { GetStaticProps } from 'next';
import Nav from '../../components/Nav';
import { sanityClient, imgUrl } from '../../sanity'
import PortableText from 'react-portable-text'
import { Post } from "../../typings"
import Img from 'next/image';
import Head from 'next/head';
import Footer from '../../components/Footer';

interface Props {
  post: Post
}

export default function post({ post }: Props) {
  return (
    <>

      <Head>
        <title>Blog Post - {post.title}</title>
        <meta name="description" content="Exploring all things tech, SEO, web development, design, and more" />
      </Head>

      <main className="bg-sky-100">
        <Nav />

        <article className="max-w-3xl mx-auto p-5 font-mono text-gray-700">
          {post.mainImage && (
            <Img {...imgUrl(post.mainImage)} height={500} objectFit="cover" alt="main blog image" />
          )}
          <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
          <h2 className="text-xl font-light text-gray-500 mb-3">{post.description}</h2>

          <div className="flex items-center space-x-5">
            {post.author.image && (
              <Img {...imgUrl(post.author.image)} height={40} width={40} objectFit="cover" alt="author image" className="rounded-full" />
            )}
            <p className='font-extralight text-sm'>Blog post by <span className='text-green-600'>{post.author.name}</span><br /> Published at {new Date(post._createdAt).toLocaleString()}</p>
          </div>

          <div className='mt-10'>
            <PortableText
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body}
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
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug{
      current
    }
  }`

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    slug,
    title,
    author -> {
      name,
      image
    },
    mainImage,
    body,
    description,
    _createdAt
  }`

  const post = await sanityClient.fetch(query, {
    slug: params?.slug
  })

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    },
    revalidate: 6800,
  }

}