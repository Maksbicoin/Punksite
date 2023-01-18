import Head from "next/head"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function Legal() {
    return (
        <>
            <Head>
                <title>STRATUS - Legal</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>

            <Navbar />

            <section className="legal">
                <div className="content">
                    <h2>Legal</h2>

                    <strong>
                        <p>SIRET number: 910 368 919 00015</p>
                    </strong>
                    <p>Mockups are made by <a href="https://www.anthonyboyd.graphics/" target="_blank" rel="noopener noreferrer">Anthony Boyd</a>.</p>
                    <p>Web template is made by <a href="https://www.leonardomattar.com/" target="_blank" rel="noopener noreferrer">Leonardo Mattar</a></p>
                </div>
            </section>

            <Footer />
        </>
    )
}