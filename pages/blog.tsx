import Head from "next/head";
import { sanityClient, imgUrl } from '../sanity'
import Link from "next/link";
import Nav from "../components/Nav";
import { Post } from "../typings";
import Img from 'next/image';
import Footer from "../components/Footer";


interface Props {
    posts: [Post]
}

export default function blog({ posts }: Props) {
    console.log(posts)
    return (
        <>
            <main className="">
                <Head>
                    <title>A Blog by Freelance Web Developer, Designer Scott Klein</title>
                    <meta name="description" content="Join me, a freelance Web Developer, and Designer as I explore all things SEO, Software, e-commerce, and more! " />
                    <meta name="keywords" content="web development, SEO, blog, web design, shenandoah valley VA, northern VA" />
                </Head>

                <Nav />

                <div className='flex flex-col items-center p-10 gap-3 text-emerald-600 max-w-8xl mx-auto bg-sky-400 border-y border-slate-400 py-10'>
                    <h1 className='text-4xl leading-relaxed max-w-xl font-mono'>
                        Exploring Web Development, Design, All Things Tech, and more...
                    </h1>
                    <h2>
                        Enjoying my blog? Share it around, it helps my site!
                    </h2>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3
      md:gap-6 p-2 md:p-6 font-mono text-emerald-500">
                    {posts?.map(post => (
                        <Link key={post._id} href={`/blog/${post.slug.current}`}>
                            <div className="border shadow-lg rounded-lg group cursor-pointer overflow-hidden bg-sky-100">
                                {post.mainImage && (
                                    <Img
                                        {...imgUrl(post.mainImage)}
                                        layout="responsive"
                                        height={540}
                                        objectFit="cover"
                                        className="group-hover:animate-pulse"
                                        alt="blog preview image"
                                    />
                                )}
                                <div className="flex justify-between p-5">
                                    <div className="mr-3">
                                        <p className="text-lg font-bold">{post.title}</p>
                                        <p className="text-xs">{post.description} by {post.author.name}</p>
                                    </div>

                                    {post.author.image && (
                                        <Img
                                            {...imgUrl(post.author.image)}
                                            height={48}
                                            width={48}
                                            layout="fixed"
                                            objectFit="cover"
                                            alt="author image"
                                            className="rounded-full" />
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </>

    )
}

export const getServerSideProps = async () => {
    const query = `*[_type == 'post']{
        _id,
        _createdAt,
        title,
        author ->  {
            name,
            image
        },
        description,
        mainImage,
        slug,
        body,

    }`;
    const posts = await sanityClient.fetch(query);
    return {
        props: { posts },
    };
};
