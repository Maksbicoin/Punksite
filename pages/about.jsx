import Head from "next/head"
import Image from "next/image"

import aboutWallpaperImage from "../static/images/about-wallpaper.webp"
import aboutDescription1Image from "../static/images/about-description-1.webp"
import aboutDescription2Image from "../static/images/about-description-2.webp"
import aboutDescription3Image from "../static/images/about-description-3.webp"

import CTA from "./components/CTA"

export default function About({ isFR }) {
    return (
        <>
            <Head>
                <title>STRATUS -  About</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>

            <section className="about">
                <div className="content">
                    <div className="wallpaper">
                        <Image
                            src={aboutWallpaperImage}
                            alt=""
                            height={560.5}
                        />
                    </div>

                    <div className="row">
                        <div>
                            <div>
                                <h1>
                                    STRATUS is a blockchain agency assisting businesses in transitioning from Web 2.0 to 3.0
                                </h1>

                                <br />
                                <br />

                                <p style={{ textAlign: 'justify' }}>
                                    By leveraging the power of blockchain technology, we enable our clients to improve transparency, security, and efficiency in their operations.
                                    Our team of experts has a deep understanding of blockchain technology and its
                                    potential use cases, and we work closely with our clients to understand their unique needs and deliver customized
                                    solutions that drive real-world impact.
                                </p>

                                <br />

                                <p style={{ textAlign: 'justify' }}>
                                    We started in February 2022, and since then we have worked with a few companies like Netalys, Metaverse GT or SPAR Alpina.
                                </p>
                            </div>

                            <a href="https://calendly.com/stratus_agency/meet" target="_blank" rel="noopener noreferrer">SCHEDULE A CALL</a>
                        </div>

                        <Image
                            src={aboutDescription1Image}
                            alt=""
                            height={960}
                        />
                    </div>

                    <div className="row">
                        <Image
                            src={aboutDescription2Image}
                            alt=""
                            height={960}
                        />

                        <div>
                            <div>
                                <h2>We are committed to evolving blockchain</h2>

                                <br />
                                <br />

                                <p style={{ textAlign: 'justify' }}>
                                    As a blockchain agency, our values are to help our clients and blockchain grow together.
                                    Because we believe in a sustainable, fast and reliable world, we know how committed we need to be to blockchain.
                                </p>

                                <br />

                                <p style={{ textAlign: 'justify' }}>
                                    For instance, we translated the official documentation of Ethereum and Solidity. We are also engaged as validators on the Ethereum blockchain with our light node.
                                </p>
                            </div>

                            <a href="https://calendly.com/stratus_agency/meet" target="_blank" rel="noopener noreferrer" className="link">SCHEDULE A CALL</a>
                        </div>
                    </div>

                    <div className="row">
                        <div>
                            <div>
                                <h2>THE FIRST WEB 3.0 AGENCY ACCREDITED LA FRENCH TECH IN ARA</h2>

                                <br />
                                <br />

                                <p style={{ textAlign: 'justify' }}>
                                    Since February 2nd, 2023, our incubator has been labelled as {"\""}La French Tech Mont-Blanc{"\""}.
                                    Hence, we are the first Web 3.0 agency in Auvergne-Rhône-Alpes{"'"}s french region which has been accepted by a French Tech incubator.
                                </p>

                                <br />

                                <p style={{ textAlign: 'justify' }}>
                                    For us, this demonstrates to our customers our virtue to provide a new and better world, while using our expertise in innovative technologies.
                                </p>
                            </div>

                            <a href="https://calendly.com/stratus_agency/meet" target="_blank" rel="noopener noreferrer">SCHEDULE A CALL</a>
                        </div>

                        <Image
                            src={aboutDescription3Image}
                            alt=""
                            height={960}
                        />
                    </div>
                </div>
            </section>

            <CTA />
        </>
    )
}