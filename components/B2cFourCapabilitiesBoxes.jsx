import Link from "next/link";

const capabilities = [
  {
    n: "01",
    heading: "Brand & Identity",
    subtitle: "",
    body: [
      "Brand naming when needed ",
      "Visual identity including logo, colours, typography, and imagery ",
        "Verbal identity including tone of voice, messaging, and taglines ",
        "Brand guidelines and ready-to-use asset kits ",
         "Positioning statements and value propositions",
      
    ],
  },
  {
    n: "02",
    heading: " Packaging & Collateral",
    subtitle: "",
    body: [

      "Primary and secondary packaging concepts  ",

"On shelf mock-ups and POS materials  ",

"Print collateral (flyers, posters, brochures)  ",

"Brand books and launch kits ",
    ],
  },
  {
    n: "03",
    heading: "Digital Presence & Campaigns",
    subtitle: "",
    body: [

      "Brand and campaign websites (WordPress, Shopify)",  

"Social media visual systems and templates ", 

"Performance creative for Meta, Google, LinkedIn",  

"Email and retention design (flows, newsletters)  ",

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
      Our B2C Services
    </h2>

    <p className="cap-subheading">
      B2C brands people remember and return to. 
    </p>
  </div>


<div className="c-btn c-btn--black-transparent ">
            <Link href="/b2b-tech-marketing">
              See what we do
            </Link>
          </div>  

</div>

        <div className="o-container__row">

          {capabilities.map((card) => (
            <div
              key={card.n}
              className="o-container__col-12 o-container__col-md-6 o-container__col-lg-3"
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