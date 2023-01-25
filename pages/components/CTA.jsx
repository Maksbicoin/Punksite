export default function CTA({ isFR }) {
    return (
        <section className="call-to-action">
            <h2>{isFR ? "découvrez sans limites commencez votre projet maintenant" : "discover without limits start your project now"}</h2>

            <a href="https://calendly.com/stratus_agency/meet" target="_blank" rel="noopener noreferrer">
                {isFR ? "PLANIFIER UN APPEL" : "SCHEDULE A CALL"}
            </a>

            <div className="background"></div>
        </section>
    )
}