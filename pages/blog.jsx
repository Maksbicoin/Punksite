import Head from "next/head"
import Image from "next/image"

import Navbar from "./components/Navbar"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Link from "next/link"

import { getSortedPostsData } from "../lib/posts.js";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Blog({ allPostsData }) {
    console.log(allPostsData, 'allPostsData');

    const headline = allPostsData[0];
    const posts = allPostsData.slice(1, allPostsData.length);

    return (
        <>
            <Head>
                <title>STRATUS - Blog</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>

            <Navbar />

            <section className="post-headline">
                <div className="left">
                    <Image
                        src={headline.bannerImage}
                        alt="headline article thumbnail"
                        width={1190}
                        height={700}
                    />
                </div>

                <Link href={`/blog/${headline.id}.html`}>
                    <div className="post-headline-content">
                        <h1>{headline.title}</h1>
                        <div className="bottom">
                            <p>Read more</p>
                            <p>{headline.date}</p>
                        </div>
                    </div>
                </Link>
            </section>

            <section className="posts">
                <div className="row">
                    {posts.map(({ id, bannerImage, date, title }, i) => (
                        <Link href={`/blog/${id}.html`} key={i}>
                            <div className="post">
                                <Image
                                    src={bannerImage}
                                    alt="thumbnail"
                                    width={708}
                                    height={422}
                                />

                                <h2 className="date">{date}</h2>
                                <h2 className="title">{title}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <CTA />
        </>
    )
}