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
                    <h2>About us</h2>

                    <p>We are a Web 3.0 Agency based in France, and we support you to concretize your Blockchain projects.</p>
                    <p>Audits, programming, branding, all what you require to start from scratch your innovations and ideas.</p>
                    <p>Our fundamental value is to collaborate with you in the long-term. This is why we choose properly our customers.</p>

                    <br />

                    <p><a href="https://calendly.com/stratus_agency/meet">Contact us</a> now and get a piece of valuable advice about your following project.</p>
                </div>
            </section>

            <Footer />
        </>
    )
}