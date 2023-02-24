import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import { getSortedPostsData, getDetailsPostsData } from "../../lib/posts.js";

import MarkdownIt from 'markdown-it';

import CTA from "../components/CTA";

// The page for each post
export default function Post({ allPostsData }) {
    const router = useRouter();

    const [load, setLoad] = useState(false);

    const [widthBanner, setWidthBanner] = useState();
    const [otherPostsData, setOtherPostsData] = useState();
    const [content, setContent] = useState();

    // Get the query parameter from the URL
    const { slug } = router.query;
    const allPostsDataCopy = allPostsData;

    const [html, setHTML] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        setWidthBanner(window.innerWidth);

        if (!load) {
            setContent(allPostsData.find(element => element.id === slug));

            if (content) {
                const md = new MarkdownIt({
                    html: true,
                    linkify: true,
                    typographer: true,
                });

                setHTML(md.render(content.post));

                let str = content.post.replace(/\*\*|#|\n/g, "");;
                setDescription(str.slice(0, 100));

                const indexPost = allPostsDataCopy.indexOf(content);

                allPostsDataCopy.splice(indexPost, 1);

                allPostsDataCopy.sort((a, b) => {
                    if (new Date(a.date).getTime() < new Date(b.date).getTime()) return 1;
                    else return -1;
                });

                setOtherPostsData(allPostsDataCopy);
                setLoad(true);
            }

        }

    }, [load, content, allPostsData, slug, otherPostsData, allPostsDataCopy]);

    return load ? <>
        <Head>
            <title>{content.title}</title>
            <link rel="shortcut icon" href="/static/favicon.ico" />

            <meta name="title" content={content.title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={content.bannerImage} />
            <meta property="og:title" content={content.title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content="https://cdn.discordapp.com/attachments/793382333339271178/1055180454900285540/icon_black.jpg" />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={content.bannerImage} />
            <meta property="twitter:title" content={content.title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="https://cdn.discordapp.com/attachments/793382333339271178/1055180454900285540/icon_black.jpg" />

        </Head>

        <section className="post headline">
            <div className="text">
                <h1>{content.title}</h1>
                <h2>{content.date}</h2>
            </div>

            <Image
                src={content.bannerImage}
                alt="thumbnail"
                width={widthBanner ? widthBanner : 0}
                height={700}
            />
        </section>

        <section className="post content">
            <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} ></div>
        </section>

        <section className="other-posts">
            <h2>OTHER POSTS</h2>

            <div className="row">
                {otherPostsData.slice(0, 2).map(({ id, bannerImage, date, title }, i) => (
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
    </> : undefined
}

export async function getStaticProps() {
    const allPostsData = getDetailsPostsData();
    return {
        props: { allPostsData, },
    };
}

// pages/blog/[slug].js
export async function getStaticPaths() {
    const allPostsData = getSortedPostsData();

    let paths = [];

    // query all blog paths
    Object.values(allPostsData).forEach(element => {
        paths.push({ params: { slug: element.id } });
    });

    return {
        paths,
        fallback: true,
    }
}