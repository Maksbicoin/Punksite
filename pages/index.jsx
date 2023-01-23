import { useEffect, useState } from "react"

import Head from "next/head"
import Image from "next/image"

import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import gsap from "gsap"

import Footer from "./components/Footer"

import solidityDocsImage from "../static/images/solidity-docs.webp"
import solidityDocsWorkImage from "../static/images/solidity-docs-work.webp"
import bbcsLtddImage from "../static/images/bbcs-ltdd.webp"
import bbcsLtddWorkImage from "../static/images/bbcs-ltdd-work.webp"
import peer3Image from "../static/images/peer3.webp"
import megtImage from "../static/images/megt.webp"
import megtWorkImage from "../static/images/megt-work.webp"
import montBlancClimateChangeImage from "../static/images/mont-blanc-climate-change.webp"
import montBlancClimateChangeWorkImage from "../static/images/mont-blanc-climate-change-work.webp"
import cirrusImage from "../static/images/cirrus.webp"
import cirrusWorkImage from "../static/images/cirrus-work.webp"
import netalysImage from "../static/images/netalys.webp"
import netalysWorkImage from "../static/images/netalys-work.webp"
import launcherAutoImage from "../static/images/launcher-auto.webp"
import lightNodeImage from "../static/images/light-node.webp"
import lightNodeWorkImage from "../static/images/light-node-work.webp"
import poapImage from "../static/images/poap.webp"
import poapWorkImage from "../static/images/poap-work.webp"

import iconBlackImage from "../static/images/icon-black.webp"
import questionImage from "../static/images/question.webp"
import chatImage from "../static/images/chat.webp"
import computerImage from "../static/images/computer.webp"
import handShakeImage from "../static/images/hand-shake.webp"
import heartImage from "../static/images/heart.webp"
import starsImage from "../static/images/stars.webp"
// import pricingIcon from "../static/images/pricing_icon.svg"

import Navbar from "./components/Navbar"
import CTA from "./components/CTA"

gsap.registerPlugin(ScrollTrigger);

export default function App() {
	const [load, setLoad] = useState(false);
	const [timeline, setTimeline] = useState();

	useEffect(() => {
		if (!load) {
			// Create array of elements to tween on
			const boxesTop = gsap.utils.toArray(".track-wrap.top .element");

			// Setup the tween
			const loopTop = horizontalLoop(boxesTop, {
				paused: false, // Sets the tween to be paused initially
				repeat: -1 // Makes sure the tween runs infinitely
			});

			// Start the tween
			loopTop.play() // Call to start playing the tween

			// ScrollTrigger set up for the whole duration of the body's scroll
			ScrollTrigger.create({
				start: 0,
				end: 'max',
				// pin: '.container',
				onUpdate: () => loopTop.timeScale(1)
			})

			// -------------------------------------------------------------------------------------------------------------------------------------

			/*
			This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.
			
			Features:
			 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
			 - When each item animates to the left or right enough, it will loop back to the other side
			 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
			 - The returned timeline will have the following methods added to it:
			   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
			   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
			   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
			   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
			   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
			 */
			function horizontalLoop(items, config) {
				items = gsap.utils.toArray(items);
				config = config || {};
				let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
					length = items.length,
					startX = items[0].offsetLeft,
					times = [],
					widths = [],
					xPercents = [],
					curIndex = 0,
					pixelsPerSecond = (config.speed || 1) * 100,
					snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
					totalWidth, curX, distanceToStart, distanceToLoop, item, i;
				gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
					xPercent: (i, el) => {
						let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
						xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
						return xPercents[i];
					}
				});
				gsap.set(items, { x: 0 });
				totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
				for (i = 0; i < length; i++) {
					item = items[i];
					curX = xPercents[i] / 100 * widths[i];
					distanceToStart = item.offsetLeft + curX - startX;
					distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
					tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
						.fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
						.add("label" + i, distanceToStart / pixelsPerSecond);
					times[i] = distanceToStart / pixelsPerSecond;
				}
				function toIndex(index, vars) {
					vars = vars || {};
					(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
					let newIndex = gsap.utils.wrap(0, length, index),
						time = times[newIndex];
					if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
						vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
						time += tl.duration() * (index > curIndex ? 1 : -1);
					}
					curIndex = newIndex;
					vars.overwrite = true;
					return tl.tweenTo(time, vars);
				}
				tl.next = vars => toIndex(curIndex + 1, vars);
				tl.previous = vars => toIndex(curIndex - 1, vars);
				tl.current = () => curIndex;
				tl.toIndex = (index, vars) => toIndex(index, vars);
				tl.times = times;
				tl.progress(1, true).progress(0, true); // pre-render for performance
				if (config.reversed) {
					tl.vars.onReverseComplete();
					tl.reverse();
				}
				return tl;
			}

			/**
			 * TIMELINE PORTFOLIO
			 */
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: 'header',
					endTrigger: '.portfolio',
					start: "top top",
					end: 'bottom top',
					markers: false,
					scrub: 1,
				}
			})

			tl.to('.portfolio .center', { yPercent: -25 }, 0)
			tl.to(['.portfolio .left', '.portfolio .right'], { yPercent: 10 }, 0)

			setTimeline(tl);

			/**
			 * BUTTONS ANIMS
			 */
			const buttonsQA = document.querySelectorAll('section.qa div.element')
			const buttonsProjects = document.querySelectorAll('section.work div.element div.project-hover')

			// Q&A buttons onmouseup animation
			buttonsQA.forEach(button => {
				button.onmouseup = () => {
					const arrow = button.querySelector('img');
					const text = button.querySelector('p');

					if (button.classList.contains('opened')) {
						button.classList.remove('opened');

						gsap.to(arrow, {
							rotateZ: 0,
							duration: 0.3,
						});

						gsap.to(text, {
							height: 0,
							margin: 0,
							duration: 0.3,
						})
					} else {
						button.classList.add('opened');

						gsap.to(arrow, {
							rotateZ: 180,
							duration: 0.3,
						});

						gsap.to(text, {
							height: 'auto',
							margin: "0 0 32px 0",
							duration: 0.3,
						})
					}
				}
			});

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

			setLoad(true);
		}
	}, [load]);

	return (
		<>
			<Head>
				<title>STRATUS - Blockchain, Crypto, & Web 3.0 PR Agency</title>
				<link rel="shortcut icon" href="/static/favicon.ico" />
			</Head>

			<Navbar />

			<header>
				<h1>STRATUS</h1>
				<h1>AGENCY</h1>
			</header>

			<section className="portfolio">
				<div className="left">
					<PortfolioImagesColumn list={[solidityDocsImage, poapImage, peer3Image]} />
				</div>

				<div className="center">
					<PortfolioImagesColumn list={[megtImage, netalysImage, montBlancClimateChangeImage]} />
				</div>

				<div className="right">
					<PortfolioImagesColumn list={[cirrusImage, lightNodeImage, bbcsLtddImage]} />
				</div>
			</section>

			<section className="values">
				<h2>The leading web 3.0 agency based in france focused on producing pieces of futuristic communication and tools</h2>

				<div className="values-container">
					<ValueElement options={{
						icon_url: computerImage,
						title: "Giving the track of the work in live",
						description: "Follow your work at real time, without waiting for the opening hours to ask us the progress."
					}} />

					<ValueElement options={{
						icon_url: chatImage,
						title: "Giving our tips as experts",
						description: "We are here to help you, to provide you our best piece of advice. Contact us now to get more details!"
					}} />

					<ValueElement options={{
						icon_url: handShakeImage,
						title: "Building long-term partnerships",
						description: "We do not work with you for once. We work with you for several works, several years."
					}} />

					<ValueElement options={{
						icon_url: questionImage,
						title: "Responding in 12h delay",
						description: "This is our promise to you forever. We will respond to you as quickly as possible, no matter what the situation."
					}} />

					<ValueElement options={{
						icon_url: starsImage,
						title: "Making all of our clients unique",
						description: "We do not provide prices or quotes without analyzing your situation."
					}} />

					<ValueElement options={{
						icon_url: heartImage,
						title: "Working with everyone",
						description: "Whether you are a business based in a specific field, you should have the chance to dive into Web 3.0."
					}} />
				</div>
			</section>

			<section className="work">
				<div className="titles">
					<h3>COMPLETED PROJECTS</h3>
					<h2>RECENT WORK</h2>
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
							icon_url: cirrusWorkImage,
							url: 'https://cirrus.stratusagency.io',
							date: 2022,
							title: "CIRRUS"
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
							title: "SOLIDITY DOCUMENTATION"
						}} />

						<WorkElement options={{
							icon_url: poapWorkImage,
							url: 'https://app.poap.xyz/token/6246968',
							date: 2022,
							title: "Ethereum documentation POAP"
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

			<section className="track">
				<div className="track-wrap top">
					<div className="element">
						<span>WEB 3.0</span>

						<Image
							src={iconBlackImage}
							alt=""
							width={36}
							height={36}
						/>
					</div>

					<div className="element">
						<span>METAMASK</span>

						<Image
							src={iconBlackImage}
							alt=""
							width={36}
							height={36}
						/>
					</div>

					<div className="element">
						<span>INFURA</span>

						<Image
							src={iconBlackImage}
							alt=""
							width={36}
							height={36}
						/>
					</div>

					<div className="element">
						<span>SOLIDITY</span>

						<Image
							src={iconBlackImage}
							alt=""
							width={36}
							height={36}
						/>
					</div>

					<div className="element">
						<span>MORALIS</span>

						<Image
							src={iconBlackImage}
							alt=""
							width={36}
							height={36}
						/>
					</div>

					<div className="element">
						<span>BLOCKCHAIN</span>

						<Image
							src={iconBlackImage}
							alt=""
							width={36}
							height={36}
						/>
					</div>

					<div className="element">
						<span>ETHEREUM</span>

						<Image
							src={iconBlackImage}
							alt=""
							width={36}
							height={36}
						/>
					</div>
				</div>
			</section>


			<section className="services">
				<hr />

				<h2>STRATUS AGENCY SERVICES LIST</h2>

				<div className="row">
					<div className="services-item">
						<span>NFT provider</span>
						<span>ETH nodes</span>
						<span>ERC-721</span>
						<span>ERC-1155</span>
						<span>ERC-998</span>
					</div>

					<div className="services-item">
						<span>EIP analysis</span>
						<span>ETH validator</span>
						<span>platforms</span>
						<span>development</span>
						<span>PoS & PoW</span>
					</div>

					<div className="services-item">
						<span>programming</span>
						<span>performance</span>
						<span>branding</span>
						<span>marketing</span>
						<span>audit</span>
					</div>
				</div>
			</section>
			{/* 
			<section className="pricing">
				<div className="headline">
					<h3>No surprises. No hassles. Just right.</h3>
					<h2>Services & Pricing</h2>
				</div>

				<div className="row">
					<div className="element">
						<h3>Branding</h3>

						<p>Bring your brand to life with a refreshing logo, style guide and more.</p>

						<span className="price">$4,950</span>

						<p>Branding includes:</p>

						<ul>
							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>Branding book</p>
								</div>
							</li>

							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>Visual identity</p>
								</div>
							</li>

							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>Content strategy</p>
								</div>
							</li>

							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>Social media</p>
								</div>
							</li>
						</ul>
						<a href="https://calendly.com/stratus_agency/meet" target="_blank" rel="noopener noreferrer">GET STARTED</a>
					</div>

					<div className="element">
						<span className="popular">Popular</span>

						<h3>Website</h3>

						<p>Premium website design and professional Webflow development.</p>

						<span className="price">$9,950</span>

						<p>Everything in Branding, plus:</p>

						<ul>
							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>Up to 5 Pages with animations</p>
								</div>
							</li>

							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>Design system in Webflow</p>
								</div>
							</li>

							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>2 weeks of QA</p>
								</div>
							</li>

							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>Responsive for mobile devices</p>
								</div>
							</li>
						</ul>
						<a href="https://calendly.com/stratus_agency/meet" target="_blank" rel="noopener noreferrer">GET STARTED</a>
					</div>

					<div className="element">
						<h3>Enterprise</h3>

						<p>For companies that need real-time communication and unlimited requests.</p>

						<span className="price">Custom</span>

						<p>Everything in Website, plus:</p>

						<ul>
							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>Private slack</p>
								</div>
							</li>

							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>Unlimited requests</p>
								</div>
							</li>

							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>Support priority</p>
								</div>
							</li>

							<li>
								<div className="row">
									<Image
										src={pricingIcon}
										priority
										alt="icon"
									/>

									<p>SEO optimization</p>
								</div>
							</li>
						</ul>
						<a href="https://calendly.com/stratus_agency/meet" target="_blank" rel="noopener noreferrer" className="custom">CONTACT SALES</a>
					</div>
				</div>
			</section> */}

			<section className="qa">
				<h2>FREQUENTLY ASKED QUESTIONS</h2>

				<div className="questions-list">
					<QuestionElement options={{
						title: 'how much does it cost?',
						text: 'Our prices are personalized to all our customers.'
					}} />

					<QuestionElement options={{
						title: 'how can i contact you?',
						text: 'You can contact us on contact@stratusagency.io, else on our LinkedIn page. It would be a pleasure to work with you!'
					}} />

					<QuestionElement options={{
						title: 'how many revisions per project?',
						text: 'We give you 2 revisions. Beyond this capacity, the following revisions will be charged.',
					}} />

					<QuestionElement options={{
						title: 'how long will it take to receive my project?',
						text: 'This will depend on your specifications and the urgency for your project.',
					}} />
				</div>
			</section>

			<CTA />

			<Footer timeline={timeline} />
		</>
	);
}

const PortfolioImagesColumn = ({ list }) => {
	return (
		list.map((element, i) => (
			<Image
				src={element}
				placeholder={'blur'}
				priority
				alt={`work #${i}`}
				key={i}
			/>
		))
	)
}

const ValueElement = ({ options }) => {
	return (
		<div className="element">
			<div className="image-border">
				<Image
					src={options.icon_url}
					alt=""
					width={24}
					height={24}
				/>
			</div>

			<h3>{options.title}</h3>

			<p>{options.description}</p>
		</div>
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

const QuestionElement = ({ options }) => {
	return (
		<div className="element">
			<div className="question">
				<h3>{options.title}</h3>

				<Image
					src="https://assets.website-files.com/62384332bac7f3d4f139ee1e/624ddc55319850f3ef7f9b3f_faq%20icon.svg"
					alt=""
					width={11}
					height={15}
				/>
			</div>

			<div className="answer">
				<p>{options.text}</p>
			</div>
		</div>
	)
}