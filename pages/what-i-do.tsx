import Img from 'next/image';
import { Fade } from 'react-awesome-reveal';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const roadRunnerPicture = "/assets/roadrunner.png";
const seoPicture = "/assets/SEO-Technical.jpeg";
const eCommerce = "/assets/eccomerce.jpeg";
const data = "/assets/data.jpeg";

function whatIDO() {
    return (
        <>
            <Nav />
            
            <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
                <div className="snap-start bg-blue-400 w-screen h-screen flex items-center justify-center">
                    <Fade duration={1850} triggerOnce>
                        <div className="flex flex-col md:flex-row md:justify-around items-center md:p-0">
                            <div className="flex gap-3 mt-2 text-slate-100 px-5 flex-col md:w-1/2 font-mono">
                                <h2 className="md:text-3xl font-extrabold underline underline-offset-2">Highly Performant Websites</h2>
                                <p className="text-sm md:text-xl">Did you know <b>"53% of visitors will abandon your website if it takes more than 3 seconds to load."</b> Most freelance web developers and agencies are going to use egregiously slow software for your site, such as Wordpress or Wix. Good news is I do not take shortcuts on performance! Using frameworks like React & Next.js means your site will be faster than all your competitors. But hey, don't trust me, let me audit my site's vs local competitors and let's see the difference. </p>
                            </div>
                            <div className="hover:animate-spin">
                                <Img
                                    src={roadRunnerPicture}
                                    alt="Fast website photo"
                                    objectFit="contain"
                                    height={300}
                                    width={300}
                                    priority
                                />
                            </div>
                        </div>
                    </Fade>
                </div>

                    <div className="snap-start bg-blue-500 w-screen h-screen flex items-center justify-center">
                        <Fade duration={1850} triggerOnce>
                            <div className="flex flex-col md:flex-row md:justify-around items-center md:p-0">
                                <div className="flex gap-3 mt-2 text-slate-100 px-5 flex-col md:w-1/2 font-mono">
                                    <h2 className="text-lg md:text-3xl font-extrabold underline underline-offset-2">Search Engine Optimization</h2>
                                    <p className="text-sm md:text-xl">"68% of online experiences begin with a search engine." When you search for a local service or business, chances are your going to resort to one of the first ones that pop up in your results. Let's be honest, we are all impatient. Working towards SEO best practices will help transition your business into the limelight. Using multiple approaches like creating a google business, running digital ads, back linking your domain, and much more, I will build up your SEO until you are happy.</p>
                                </div>
                                <div className="px-5">
                                    <Img
                                        src={seoPicture}
                                        alt="Seo Photo"
                                        objectFit="contain"
                                        height={500}
                                        width={500}
                                    />
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="snap-start bg-blue-600 w-screen h-screen flex items-center justify-center">
                        <Fade duration={1850} triggerOnce>
                            <div className="flex flex-col md:flex-row md:justify-around items-center md:p-0">
                                <div className="flex gap-3 mt-2 text-slate-100 px-5 flex-col md:w-1/2 font-mono">
                                    <h2 className="text-lg md:text-3xl font-extrabold underline underline-offset-2">Seamless eCommerce</h2>
                                    <p className="text-sm md:text-xl"><b>"The eCommerce industry is growing 23% year-over-year, yet 46% of American small businesses still don’t have a website."</b> No matter how great your products are, without a way to sell them online its impossible for your business to reach its full potential. For better or worse, consumers prefer to buy online rather than shop in person. So, trust me to arm your business for the next generation of shopping needs.</p>
                                </div>
                                <div className="px-5">
                                    <Img
                                        src={eCommerce}
                                        alt="eCommerce photo"
                                        objectFit="contain"
                                        height={500}
                                        width={500}
                                    />
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="snap-start bg-blue-700 w-screen h-screen flex items-center justify-center">
                        <Fade duration={1850} triggerOnce>
                            <div className="flex flex-col md:flex-row md:justify-around items-center md:p-0">
                                <div className="flex gap-3 mt-2 text-slate-100 px-5 flex-col md:w-1/2 font-mono">
                                    <h2 className="text-lg md:text-3xl font-extrabold underline underline-offset-2">Data Analytics</h2>
                                    <p className="text-sm md:text-xl"><b>"67% of small businesses are spending more than $10K a year on analytics."</b> Using data gives insight into customer tendencies, how attractive ones website is, how long users spend on certain web pages, where traffic is originating from and an array of other data points. Don't get left behind! Use data to gain insight on how to better operate your business. </p>
                                </div>
                                <div className="px-5">
                                    <Img
                                        src={data}
                                        alt="eCommerce photo"
                                        objectFit="contain"
                                        height={500}
                                        width={500}
                                    />
                                </div>
                            </div>
                        </Fade>
                    </div>
            </div>
            <Footer />
        </>
    )
}

export default whatIDO