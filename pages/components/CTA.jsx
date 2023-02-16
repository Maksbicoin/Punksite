import Link from "next/link";

export default function CTA() {
    return (
        <section className="call-to-action">
            <h2>discover without limits start your project now</h2>

            <Link href="/contact.html">GET STARTED</Link>

            <div className="background"></div>
        </section>
    )
}