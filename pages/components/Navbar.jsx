import { useRef } from "react"

import Image from "next/image"
import Link from "next/link"

import gsap from "gsap"

import navbarImage from "../../static/images/navbar-image.webp"
import logoLargeBlackImage from "../../static/images/logo-large-black.svg"
import hamburgerIcon from "../../static/images/hamburger-icon.svg"

export default function Navbar() {
    const hamburgerButtonRef = useRef();

    const buttonsArray = [{
        name: "home",
        href: "/"
    }, {
        name: "work",
        href: "/work.html"
    }, {
        name: "blog",
        href: "/blog.html"
    }, {
        name: "about",
        href: "/about.html"
    }]

    const handleNavbar = e => {
        e.preventDefault();

        if (document.querySelector("section.navbar").classList.contains("show")) {
            // handle hide
            const timeline = gsap.timeline();

            timeline.to("section.navbar div.element a", {
                y: "100%",
                ease: "power4.out",
                duration: 0.8,
                stagger: 0.1,
            }, 0);

            timeline.to("section.navbar p", {
                y: "100%",
                ease: "power4.out",
                duration: 0.4,
                stagger: 0.1,
            }, 0);

            timeline.to("section.navbar hr", {
                width: "0",
                ease: "power4.out",
                duration: 0.8,
                stagger: 0.1,
            }, 0);

            timeline.to("section.navbar img", {
                height: "0%",
                ease: "power4.out",
                duration: 0.8,
            }, 0.4);

            timeline.to("section.navbar", {
                y: "-100vh",
                ease: "power4.inOut",
                duration: 1,
                onComplete: () => {
                    document.querySelector("section.navbar").classList.remove("show");
                    document.querySelector("section.navbar img").style.height = "0";
                    document.querySelector("section.navbar div.gray-divider").style.height = "0";
                    document.querySelectorAll("section.navbar div.links a").forEach(element => element.style.transform = "translateY(-100%)");
                }
            }, 0.6);
        } else {
            // handle show
            const timeline = gsap.timeline();

            timeline.to("section.navbar", {
                y: 0,
                ease: "power4.out",
                duration: 1,
                onComplete: () => document.querySelector("section.navbar").classList.add("show")
            }, 0);

            timeline.to("section.navbar div.links a", {
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.1
            }, 0.1);

            timeline.to("section.navbar hr", {
                width: "100%",
                ease: "power4.out",
                duration: 0.8,
                stagger: 0.1,
            }, 0.1);

            timeline.to("section.navbar img", {
                height: "100%",
                ease: "power4.out",
                duration: 0.8,
            }, 0.4);

            timeline.to("section.navbar div.gray-divider", {
                height: "100vh",
                ease: "power4.out",
                duration: 0.8,
            }, 0.6);

            timeline.to("section.navbar p", {
                y: 0,
                ease: "power4.out",
                duration: 0.4,
                stagger: 0.1,
            }, 0.6);
        }
    }

    return (
        <>
            <section className="navbar">
                <div className="row">
                    <div className="links">
                        {buttonsArray.map((x, i) => (
                            <ButtonElement key={i} options={x} />
                        ))}
                    </div>

                    <Image
                        src={navbarImage}
                        alt=""
                    />

                    <div className="gray-divider"></div>
                </div>

                <div className="row copyrights">
                    <div className="element">
                        <p>Copyright © STRATUS</p>
                    </div>

                    <div></div>

                    <div className="element">
                        <a href="https://www.leonardomattar.com/" rel="nopenner noreferrer" target="_blank">
                            <p>© Leonardo Mattar</p>
                        </a>
                    </div>
                </div>
            </section>

            <nav>
                <div className="logo">
                    <Link href="/" onClick={() => typeof timeline !== "undefined" ?? timeline.killAll()}>
                        <Image
                            src={logoLargeBlackImage}
                            alt="logo"
                            width={130}
                            height={77}
                        />
                    </Link>
                </div>

                <h2>WE BRING YOU TO WEB 3.0</h2>

                <div className="hamburger">
                    <button onClick={handleNavbar} ref={hamburgerButtonRef}>
                        <Image
                            src={hamburgerIcon}
                            alt="icon button"
                            width={30}
                            height={30}
                        />
                    </button>
                </div>
            </nav>
        </>
    )
}

const ButtonElement = ({ options }) => {
    return (
        <div className="element">
            {options.href.startsWith("http") ? <a href={options.href} target="_blank" rel="noopener noreferrer">
                {options.name}
            </a> : <Link href={options.href}>
                {options.name}
            </Link>}

            <hr />
        </div>
    )
}