import Head from "next/head"

export default function Legal() {
    return (
        <>
            <Head>
                <title>STRATUS - Legal</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>

            <section className="legal">
                <div className="content">
                    <h2>Legal</h2>


                    <p>Siret number: 948540927 00019</p>

                    <p>
                        Mockups are made by {' '}
                        <a href="https://www.anthonyboyd.graphics/" target="_blank" rel="noopener noreferrer"><u>Anthony Boyd</u></a> {' '}
                        and <a href="https://www.behance.net/AlekseyBelorukov" target="_blank" rel="noopener noreferrer"><u>Aleksey Belorukov</u></a>.
                    </p>

                    <p>
                        Web template is made by {' '}
                        <a href="https://www.leonardomattar.com/" target="_blank" rel="noopener noreferrer"><u>Leonardo Mattar</u></a>.
                    </p>

                    <p>
                        Icons are coming from {' '}
                        <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer"><u>Flaticon</u></a>.
                    </p>
                </div>
            </section>
        </>
    )
}