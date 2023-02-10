import Link from "next/link";

export default function CTA({ isFR }) {
    return (
        <section className="call-to-action">
            <h2>{isFR ? "découvrez sans limites commencez votre projet maintenant" : "discover without limits start your project now"}</h2>

            <Link href="/contact.html">
                {isFR ? "CONTACTEZ-NOUS" : "GET STARTED"}
            </Link>

            <div className="background"></div>
        </section>
    )
}