import Head from "next/head";
import { sanityClient, imgUrl } from '../sanity'
import Link from "next/link";
import Nav from "../components/Nav";
import { Post } from "../typings";
import Img from 'next/image';


interface Props {
    posts: [Post]
}

export default function blog({ posts }: Props) {
    return (
        <main className="">
            <Head>
                <title><title>A Blog by Freelance Web Developer, Designer Scott Klein</title> </title>
                <meta name="description" content="Join me, a freelance Web Developer, and Designer as I explore all things SEO, Software, e-commerce, and more! " />
            </Head>

            <Nav />

            <div className='flex flex-col items-center p-10 gap-3 text-sky-100 bg-sky-400 border-y border-white py-10'>
                <h1 className='text-4xl leading-relaxed max-w-xl font-mono'>
                    Exploring Web Development, Design, All Things Tech, and more...
                </h1>
                <h2>
                    Enjoying my blog? Share it around, it helps my site!
                </h2>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3
      md:gap-6 p-2 md:p-6 text-gray-400 font-mono">
                {posts?.map(post => (
                    <Link key={post._id} href={`/blog/${post.slug.current}`}>
                        <div className="border shadow-lg rounded-lg group cursor-pointer overflow-hidden bg-sky-100">
                            {post.mainImage && (
                                <Img {...imgUrl(post.mainImage)} height={220} width={450} objectFit="cover" className="group-hover:animate-pulse" />
                            )}
                            <div className="flex p-3 justify-between">
                                {post.author.image && (
                                    <Img {...imgUrl(post.author.image)} height={40} width={40} objectFit="cover" className="rounded-full" />
                                )}
                                <div className="">
                                    <p className="text-lg font-bold">{post.title}</p>
                                    <p className="font-extralight text-xs">{post.description}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    )
}

export const getServerSideProps = async () => {
    const query = `*[_type == 'post']`;
    const posts = await sanityClient.fetch(query);
    return {
        props: { posts },
    };
};
