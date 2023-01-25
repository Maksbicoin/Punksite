import Head from "next/head"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function Legal({ isFR }) {
    return (
        <>
            <Head>
                <title>STRATUS - {isFR ? "Légal" : "Legal"}</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>

            <Navbar isFR={isFR} />

            <section className="legal">
                <div className="content">
                    <h2>{isFR ? "Légal" : "Legal"}</h2>

                    <p>{isFR ? "Siret" : "Siret number"} : 910 368 919 00015</p>
                    <p>{isFR ? "Les mockups sont faites par" : "Mockups are made by"} <a href="https://www.anthonyboyd.graphics/" target="_blank" rel="noopener noreferrer"><u>Anthony Boyd</u></a>.</p>
                    <p>{isFR ? "Le modèle Web est réalisé par" : "Web template is made by"} <a href="https://www.leonardomattar.com/" target="_blank" rel="noopener noreferrer"><u>Leonardo Mattar</u></a>.</p>
                </div>
            </section>

            <Footer isFR={isFR} />
        </>
    )
}