import Link from "next/link";

const capabilities = [
  {
    
    heading: "GTM Story & Positioning",
    subtitle: "(with DigitalFabric® Consulting)",
    body: [
      "Narrative and messaging architecture",
      "Positioning statements and value propositions",
      "ICP and buyer-journey aligned content plans",
      "Battlecards and sales enablement storylines",
    ],
  },
  {
    n: "",
    heading: "Thought Leadership & Content",
    subtitle: "",
    body: [
      "Research-led whitepapers",
      "Executive POV articles",
      "Case studies and customer stories",
      "Content strategies that build authority",
    ],
  },
  {
    n: "",
    heading: "B2B Brand & Experience",
    subtitle: "",
    body: [
      "Brand identity systems",
      "Presentation & sales deck design",
      "Website UX & messaging",
      "Marketing collateral",
    ],
  },
 
];

export default function B2bFourCapabilitiesBoxes() {
  return (
    <section className="o-container--fluid c-block-padding--both c-block-background--black">
      <div className="o-container">

       <div className="cap-header">

  <div className="cap-header__content">
    <h2 className="cap-heading">
      Our B2B Services
    </h2>

    <p className="cap-subheading">
      Everything your B2B brand needs to build trust,
      create demand and accelerate growth.
    </p>
  </div>

{/*
<div className="c-btn c-btn--black-transparent ">
            <Link href="/b2b-tech-marketing">
              See what we do
            </Link>
          </div> */}

</div>

        <div className="o-container__row">

          {capabilities.map((card) => (
            <div
              key={card.n}
              className="o-container__col-12 o-container__col-md-6 o-container__col-lg-4"
            >
              <article className="cap-card">

                <span className="cap-number">
                  {card.n}
                </span>

                <h3 className="cap-title">
                  {card.heading}
                </h3>

                {card.subtitle && (
                  <p className="cap-subtitle">
                    {card.subtitle}
                  </p>
                )}

                <ul className="cap-list">
                  {card.body.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

              </article>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}