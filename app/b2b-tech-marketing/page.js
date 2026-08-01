import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import TextText from "../../components/TextText";
import OffsetCards from "../../components/OffsetCards";
import Link from "next/link";
import B2bFourCapabilitiesBoxes from "../../components/B2bFourCapabilitiesBoxes";
import B2BProcessSection from "../../components/B2BProcessSection";
import B2BCaseStudies from "../../components/B2BCaseStudies";


export const metadata = {
  title: "B2B Tech Marketing | Imagenie",
  description:
    "Strategic storytelling for complex B2B products and services. .",
};

export default function B2BTechMarketingPage() {
  return (
    <>
      <Header />

      <main id="content">
       <section className="b2b-hero">

  <div className="b2b-hero__overlay"></div>

  <div className="o-container">

    <div className="b2b-hero__content">

      <span className="b2b-hero__eyebrow">
        B2B MARKETING FOR TECHNOLOGY BRANDS
      </span>

      <h1>B2B Tech Marketing</h1>

      <p className="b2b-hero__subtitle">
        Strategic storytelling for complex B2B products and services.
      </p>

      <p className="b2b-hero__description">
        We help technology companies, SaaS platforms, enterprise software
        providers, and professional services firms transform complex
        offerings into compelling brand narratives that drive trust,
        demand, and measurable business growth.
      </p>

      <div className="b2b-hero__actions">

        <div className="c-btn c-btn--black-transparent ">
            <Link href="/b2b-tech-marketing">
              Talk to our Team
            </Link>
          </div>

      <div className="c-btn c-btn--black-transparent ">
            <Link href="/b2b-tech-marketing">
              View our work
            </Link>
          </div>

      </div>

    </div>

  </div>

</section>

       <TextText heading="B2B Storytelling & GTM Support." variant="white">
  <p>
    We turn GTM strategy into clear narratives, content, and design that help
    decision-makers understand, trust, and buy.
  </p>

  <Link href="/work" className="c-btn c-btn--orange">
    Talk to Our B2B Team 
  </Link>

</TextText>

        <TextText heading="Problems We Solve  " variant="black">
          <p>
               Your offer is valuable, but the story around it feels unclear. 

            Sales teams explain the same thing in different ways. 

                 GTM materials exist, but they are not built for real use. 

                  Content is being produced, but it is not strengthening market position or accelerating deals. 
          </p>
          <p>
            
          </p>
        </TextText>




  <B2bFourCapabilitiesBoxes />

  <B2BProcessSection />
  <B2BCaseStudies />
     
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
