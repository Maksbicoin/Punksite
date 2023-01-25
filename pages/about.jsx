import Head from "next/head"
import Image from "next/image"

import aboutWallpaperImage from "../static/images/about-wallpaper.webp"
import aboutDescription1Image from "../static/images/about-description-1.webp"
import aboutDescription2Image from "../static/images/about-description-2.webp"

import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function About({ isFR }) {
    return (
        <>
            <Head>
                <title>STRATUS - {isFR ? "A propos" : "About"}</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>

            <Navbar isFR={isFR} />

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
                                    {isFR ? `STRATUS est une agence blockchain qui aide les entreprises à passer du Web 2.0 au Web 3.0.`
                                        : `STRATUS is a blockchain agency assisting businesses in transitioning from Web 2.0 to 3.0`}
                                </h1>

                                <br />
                                <br />

                                <p style={{ textAlign: 'justify' }}>
                                    {isFR ? `En tirant parti de la puissance de la technologie blockchain, nous permettons à nos clients d'améliorer la transparence, la sécurité et l'efficacité de leurs opérations.
                                        Notre équipe d'experts a une connaissance approfondie de la technologie blockchain et de ses cas d'utilisation potentiels, et nous travaillons en étroite collaboration avec nos clients
                                        pour comprendre leurs besoins uniques et fournir des solutions personnalisées qui ont un impact sur le monde réel.
                                    ` : `By leveraging the power of blockchain technology, we enable our clients to improve transparency, security, and efficiency in their operations.
                                        Our team of experts has a deep understanding of blockchain technology and its
                                        potential use cases, and we work closely with our clients to understand their unique needs and deliver customized
                                        solutions that drive real-world impact.`}
                                </p>

                                <br />

                                <p style={{ textAlign: 'justify' }}>
                                    {isFR ? "Nous avons commencé en février 2022, et depuis, nous avons travaillé avec quelques entreprises comme Netalys, Metaverse GT ou SPAR Alpina."
                                    : "We started in February 2022, and since then we have worked with a few companies like Netalys, Metaverse GT or SPAR Alpina."}
                                </p>
                            </div>

                            <a href="https://calendly.com/stratus_agency/meet" target="_blank" rel="noopener noreferrer">{isFR ? "PLANIFIER UN APPEL" : "SCHEDULE A CALL"}</a>
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
                                <h2>{isFR ? "Nous nous engageons à faire évoluer la blockchain" : "We are committed to evolving blockchain"}</h2>

                                <br />
                                <br />

                                <p style={{ textAlign: 'justify' }}>
                                    {isFR ? `En tant qu'agence spécialisée dans la blockchain, nos valeurs sont d'aider nos clients et la blockchain à se développer ensemble.
                                    Parce que nous croyons en un monde durable, rapide et fiable. Nous savons à quel point nous devons nous engager dans la blockchain.`
                                    : `As a blockchain agency, our values are to help our clients and blockchain grow together.
                                    Because we believe in a sustainable, fast and reliable world, we know how committed we need to be to blockchain.`}
                                </p>

                                <br />

                                <p style={{ textAlign: 'justify' }}>
                                    {isFR ? "Par exemple, nous avons traduit la documentation officielle d'Ethereum et de Solidity. Nous nous sommes aussi engagés comme validateurs sur la blockchain Ethereum avec notre light node."
                                    : "For instance, we translated the official documentation of Ethereum and Solidity. We are also engaged as validators on the Ethereum blockchain with our light node."}
                                </p>
                            </div>

                            <a href="https://calendly.com/stratus_agency/meet" target="_blank" rel="noopener noreferrer">{isFR ? "PLANIFIER UN APPEL" : "SCHEDULE A CALL"}</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <CTA /> */}

            <Footer isFR={isFR} />
        </>
    )
}