import Image from "next/image"
import Link from "next/link"

import logoLargeBlackImage from "../../static/images/logo-large-black.svg"
import instagramImage from "../../static/images/instagram.svg"
import gitHubImage from "../../static/images/github.svg"
import twitterImage from "../../static/images/twitter.svg"
import telegramImage from "../../static/images/telegram.svg"
import linkedinImage from "../../static/images/linkedin.png"
import mediumImage from "../../static/images/medium.svg"
import laFrenchTechImage from "../../static/images/lafrenchtech.webp"

export default function Footer({ timeline }) {
    return (
        <footer>
            <div className="row">
                <div className="column space-between">
                    <div>
                        <Image
                            src={logoLargeBlackImage}
                            alt=""
                            width={130}
                            height={50}
                        />

                        <p>
                            STRATUS is a leading Blockchain, Crypto, NFT & Web 3.0 PR provider.
                            Committed as Ethereum validator. Ethereum, Solidity & Optimism documentation official translator. <br />
                            Incubated at La French Tech Mont-Blanc.
                        </p>

                        <div className="social-wrap">
                            <a href="https://www.linkedin.com/company/stratusagency" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={linkedinImage}
                                    alt=""
                                    width={16}
                                    height={17}
                                />
                            </a>

                            <a href="https://www.instagram.com/stratusagency_official/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={instagramImage}
                                    alt=""
                                    width={16}
                                    height={17}
                                />
                            </a>

                            <a href="https://t.me/+iFQ04zUAstJlZmI8" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={telegramImage}
                                    alt=""
                                    width={16}
                                    height={17}
                                />
                            </a>

                            <a href="https://github.com/stratusagency" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={gitHubImage}
                                    alt=""
                                    width={16}
                                    height={17}
                                />
                            </a>

                            <a href="https://twitter.com/stratusagency" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={twitterImage}
                                    alt=""
                                    width={16}
                                    height={17}
                                />
                            </a>

                            <a href="https://medium.com/@stratusagency" target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={mediumImage}
                                    alt=""
                                    width={16}
                                    height={17}
                                />
                            </a>
                        </div>
                    </div>

                    <a href="https://region-aura.latribune.fr/innovation/2023-02-02/french-tech-mont-blanc-une-nouvelle-communaute-labellisee-au-pied-du-glacier-des-alpes-950179.html" target="_blank" rel="noreferrer">
                        <Image
                            src={laFrenchTechImage}
                            alt="La French Tech Communauté"
                            width={70}
                        />
                    </a>
                </div>

                <div className="column pages">
                    <h2>PAGES</h2>

                    <div className="list">
                        <Link href="/" onClick={() => timeline ? timeline.killAll() : undefined}>Home</Link>
                        <Link href="/work.html" onClick={() => timeline ? timeline.killAll() : undefined}>Work</Link>
                        <Link href="/about.html" onClick={() => timeline ? timeline.killAll() : undefined}>About</Link>
                        <Link href="/blog.html" onClick={() => timeline ? timeline.killAll() : undefined}>Blog</Link>
                        <Link href="/contact.html" onClick={() => timeline ? timeline.killAll() : undefined}>Contact</Link>
                    </div>
                </div>

                <div className="column utility">
                    <h2>LEGALS</h2>

                    <div className="list">
                        {/* <Link href="/rgpd" onClick={() => timeline ? timeline.killAll() : undefined}>RGPD</Link> */}
                        <Link href="/legal.html" onClick={() => timeline ? timeline.killAll() : undefined}>Legal</Link>
                    </div>
                </div>
            </div>

            <div className="row copyrights">
                <p>Copyright © STRATUS</p>

                <div></div>

                <a href="https://www.leonardomattar.com/" rel="nopenner noreferrer" target="_blank">
                    <p>© Template by Leonardo Mattar</p>
                </a>
            </div>
        </footer>
    )
}