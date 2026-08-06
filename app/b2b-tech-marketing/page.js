import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import TextText from "../../components/TextText";
import OffsetCards from "../../components/OffsetCards";
import Link from "next/link";
import B2bFourCapabilitiesBoxes from "../../components/B2bFourCapabilitiesBoxes";
import B2BProcessSection from "../../components/B2BProcessSection";
import B2BCaseStudiesSummary from "../../components/B2BCaseStudiesSummary";


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
       
      </span>

      <h1>B2B Tech Marketing</h1>

      <p className="b2b-hero__subtitle">
        Strategic storytelling for complex B2B products and services.
      </p>

      <p className="b2b-hero__description">
        We help technology companies, SaaS platforms, enterprise software
        providers, <br/> and professional services firms transform complex
        offerings <br/> into compelling brand narratives that drive trust,
        demand, and measurable business growth.
      </p>

      <div className="b2b-hero__actions">

        <div className="c-btn c-btn--black-transparent ">
            <Link href="/b2b-tech-marketing">
              Talk to our Team
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
        

<ul className="problem-list">
  <li>Your offer is valuable, but the story around it feels unclear.</li>

  <li>Your website explains what you do, but doesn't persuade enterprise buyers.</li>

  <li>Your sales and marketing teams use inconsistent messaging.</li>

  <li>Technical expertise isn't translated into business value.</li>

  <li>Marketing assets exist, but they don't generate trust or qualified leads.</li>

  <li>Your brand looks credible, but doesn't differentiate you from competitors.</li>
</ul>


         
        </TextText>




  <B2bFourCapabilitiesBoxes />

  <B2BProcessSection />
  <B2BCaseStudiesSummary />
     
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
