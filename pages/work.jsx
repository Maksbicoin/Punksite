import { useEffect } from "react"

import Head from "next/head"
import Image from "next/image"

import gsap from "gsap"

import solidityDocsWorkImage from "../static/images/solidity-docs-work.webp"
import bbcsLtddWorkImage from "../static/images/bbcs-ltdd-work.webp"
import megtWorkImage from "../static/images/megt-work.webp"
import montBlancClimateChangeWorkImage from "../static/images/mont-blanc-climate-change-work.webp"
import cirrusWorkImage from "../static/images/cirrus-work.webp"
import netalysWorkImage from "../static/images/netalys-work.webp"
import lightNodeWorkImage from "../static/images/light-node-work.webp"
import poapWorkImage from "../static/images/poap-work.webp"

import CTA from "./components/CTA"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Work() {
    useEffect(() => {
        const buttonsProjects = document.querySelectorAll('section.work div.element div.project-hover')

        // Projects hover animation
        buttonsProjects.forEach(button => {
            button.onmouseover = () => gsap.to(button, {
                cursor: 'pointer',
                opacity: 1,
                duration: 0.3
            })

            button.onmouseleave = () => gsap.to(button, {
                cursor: 'default',
                opacity: 0,
                duration: 0.3
            })
        })
    }, []);

    return (
        <>
            <Head>
                <title>STRATUS - Work</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>

            <Navbar />

            <section className="work page">
                <div className="titles">
                    <h2>RECENT WORK</h2>
                    <h3>COMPLETED PROJECTS</h3>
                </div>

                <div className="row">
                    <div className="left">
                        <WorkElement options={{
                            icon_url: lightNodeWorkImage,
                            url: 'https://medium.com/@stratusagency/stratus-commits-to-the-development-of-web-3-0-677e82406537',
                            date: 2023,
                            title: "STRATUS commits to the development of Web 3.0"
                        }} />

                        <WorkElement options={{
                            icon_url: montBlancClimateChangeWorkImage,
                            url: 'https://mont-blanc-climate-change.netlify.app',
                            date: 2022,
                            title: "MONT BLANC — CLIMATE CHANGE"
                        }} />

                        <WorkElement options={{
                            icon_url: netalysWorkImage,
                            url: 'https://netalys-hexagon.netlify.app/',
                            date: 2022,
                            title: "NETALYS"
                        }} />

                        <WorkElement options={{
                            icon_url: bbcsLtddWorkImage,
                            url: 'https://bbcs.netlify.app',
                            date: 2021,
                            title: "BBCS & LTDD"
                        }} />
                    </div>

                    <div className="right">
                        <WorkElement options={{
                            icon_url: poapWorkImage,
                            url: 'https://app.poap.xyz/token/6246968',
                            date: 2022,
                            title: "Ethereum documentation POAP"
                        }} />

                        <WorkElement options={{
                            icon_url: megtWorkImage,
                            url: 'https://megt.io',
                            date: 2022,
                            title: "METAVERSE GT"
                        }} />

                        <WorkElement options={{
                            icon_url: cirrusWorkImage,
                            url: 'https://cirrus.stratusagency.io',
                            date: 2022,
                            title: "CIRRUS"
                        }} />

                        <WorkElement options={{
                            icon_url: solidityDocsWorkImage,
                            url: 'https://docs.soliditylang.org/fr/v0.8.11/',
                            date: 2022,
                            title: "SOLIDITY DOCUMENTATION"
                        }} />
                    </div>
                </div>
            </section>

            <CTA />

            <Footer />
        </>
    )
}

const WorkElement = ({ options }) => {
    return (
        <div className="element">
            <Image
                src={options.icon_url}
                alt=""
                width={620}
                height={730}
            />

            <a href={options.url} target="_blank" rel="noopener noreferrer">
                <div className="project-hover">
                    <div className="top">
                        <p>{options.date}</p>
                    </div>

                    <div className="bottom">
                        <h2>{options.title}</h2>
                    </div>
                </div>
            </a>
        </div>
    )
}