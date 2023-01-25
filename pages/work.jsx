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

export default function Work({ isFR }) {
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
                <title>STRATUS - {isFR ? "Portfolio" : "Work"}</title>
                <link rel="shortcut icon" href="/static/favicon.ico" />
            </Head>

            <Navbar isFR={isFR} />

            <section className="work page">
                <div className="titles">
                    <h2>{isFR ? "TRAVAIL RÉCENT" : "RECENT WORK"}</h2>
                    <h3>{isFR ? "PROJETS ACCOMPLIS" : "COMPLETED PROJECTS"}</h3>
                </div>

                <div className="row">
                    <div className="left">
                        <WorkElement options={{
                            icon_url: lightNodeWorkImage,
                            url: 'https://medium.com/@stratusagency/stratus-commits-to-the-development-of-web-3-0-677e82406537',
                            date: 2023,
                            title: isFR ? "STRATUS s'engage dans le développement du Web 3.0" : "STRATUS commits to the development of Web 3.0"
                        }} />

                        <WorkElement options={{
                            icon_url: cirrusWorkImage,
                            url: 'https://cirrus.stratusagency.io',
                            date: 2022,
                            title: "CIRRUS"
                        }} />

                        <WorkElement options={{
                            icon_url: montBlancClimateChangeWorkImage,
                            url: 'https://mont-blanc-climate-change.netlify.app',
                            date: 2022,
                            title: isFR ? "MONT BLANC — CHANGEMENT CLIMATIQUE" : "MONT BLANC — CLIMATE CHANGE"
                        }} />

                        <WorkElement options={{
                            icon_url: netalysWorkImage,
                            url: 'https://netalys-hexagon.netlify.app/',
                            date: 2022,
                            title: "NETALYS"
                        }} />
                    </div>

                    <div className="right">
                        <WorkElement options={{
                            icon_url: megtWorkImage,
                            url: 'https://megt.io',
                            date: 2022,
                            title: "METAVERSE GT"
                        }} />

                        <WorkElement options={{
                            icon_url: solidityDocsWorkImage,
                            url: 'https://docs.soliditylang.org/fr/v0.8.11/',
                            date: 2022,
                            title: isFR ? "DOCUMENTATION DE SOLIDITY" : "SOLIDITY DOCUMENTATION"
                        }} />

                        <WorkElement options={{
                            icon_url: poapWorkImage,
                            url: 'https://app.poap.xyz/token/6246968',
                            date: 2022,
                            title: isFR ? "DOCUMENTATION D'ETHEREUM" : "ETHEREUM DOCUMENTATION"
                        }} />

                        <WorkElement options={{
                            icon_url: bbcsLtddWorkImage,
                            url: 'https://bbcs.netlify.app',
                            date: 2021,
                            title: "BBCS & LTDD"
                        }} />
                    </div>
                </div>
            </section>

            <CTA isFR={isFR} />

            <Footer isFR={isFR} />
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