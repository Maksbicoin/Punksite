import { useState } from "react"

import Head from "next/head"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
    });

    const [statusMessageSubmitButton, setStatusMessageSubmitButton] = useState("SUBMIT");
    const [statusSent, setStatusSent] = useState(false);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async e => {
        e.preventDefault();

        setStatusMessageSubmitButton("PLEASE WAIT...");

        try {
            const response = await fetch('https://api.stratusagency.io/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) alert('Sending message failed');

            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                message: ''
            });

            setStatusSent(true);
        } catch (error) {
            console.error(error);
            alert('Sending message failed. Please try again later.');
        }
    }

    return (
        <>
            <Head>
                <title>STRATUS - Contact</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>

            <section className="contact">
                <div className="row">
                    <div className="left">
                        <h1>ARE YOU READY TO OFFER A NEW BUSINESS INCOME TO YOUR COMPANY?</h1>

                        <a href="mailto:contact@stratusagency.io">
                            <h2>CONTACT@STRATUSAGENCY.IO</h2>
                        </a>
                    </div>

                    <div className="right">
                        <h2>CONTACT US TODAY:</h2>

                        {statusSent ?
                            <div className="success">
                                <p>Thank you! Your submission has been received!</p>
                            </div>
                            : <form action="/" method="POST" id="faucetForm">
                                <div className="wrap">
                                    <div className="element">
                                        <label htmlFor="name">NAME</label>

                                        <input type="text" placeholder="Enter your name" value={formData.name}
                                            name="name"
                                            onChange={handleChange}
                                            required />
                                    </div>

                                    <div className="element">
                                        <label htmlFor="email">EMAIL</label>

                                        <input type="text" placeholder="Enter your email" value={formData.email}
                                            name="email"
                                            onChange={handleChange}
                                            required />
                                    </div>

                                    <div className="element">
                                        <label htmlFor="companyName">COMPANY</label>

                                        <input type="text" placeholder="Enter your company" value={formData.company}
                                            name="company"
                                            onChange={handleChange}
                                            required />
                                    </div>

                                    <div className="element">
                                        <label htmlFor="phone">PHONE</label>

                                        <input type="text" placeholder="Enter your phone" value={formData.phone}
                                            name="phone"
                                            onChange={handleChange}
                                            required />
                                    </div>
                                </div>

                                <div className="element large">
                                    <label htmlFor="message">MESSAGE</label>

                                    <textarea type="text" placeholder="Enter your message" value={formData.message}
                                        name="message"
                                        onChange={handleChange}
                                        required></textarea>
                                </div>

                                <button type="submit" onClick={handleSubmit} className="request-tokens-button">{statusMessageSubmitButton}</button>
                            </form>}
                    </div>
                </div>
            </section>
        </>
    )
}