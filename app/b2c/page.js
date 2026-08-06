import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import TextText from "../../components/TextText";
import OffsetCards from "../../components/OffsetCards";
import B2cFourCapabilitiesBoxes from "../../components/B2cFourCapabilitiesBoxes"
import B2CIndustriesGrid from "../../components/B2CIndustriesGrid";
import B2cProcessSection from "../../components/B2cProcessSection";
import B2CCaseStudiesSummary from "../../components/B2CCaseStudiesSummary";
import Link from "next/link";




export const metadata = {
  title: "B2C Brands | Imagenie",
  description:
    "We help consumer brands build memorable identities that people recognize and trust across every touchpoint.",
};

export default function B2CPage() {
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

          <h1>B2C brands people remember   <br />and return to. </h1>

          <p className="b2b-hero__subtitle">
            From identity and packaging to campaigns and content,   <br />we help consumer brands build stronger presence, consistency, and conversion.
          </p>

         

          <div className="b2b-hero__actions">
            <div className="c-btn c-btn--black-transparent">
              <Link href="/b2b-tech-marketing">
          Talk to Our B2C Team
              </Link>
            </div>

          
          </div>
        </div>
      </div>
    </section>

        <TextText heading="B2C Challenges We Address " variant="white">
  <ul>
    <li>Your brand looks interchangeable in a crowded category.</li>
    <li>The customer experience feels inconsistent across channels.</li>
    <li>Content is active, but not building real affinity or loyalty.</li>
    <li>Packaging or digital touchpoints are not pulling their weight in conversion.</li>
  </ul>
</TextText>

      <B2cFourCapabilitiesBoxes/>

      <B2cProcessSection/>

<B2CCaseStudiesSummary />

<B2CIndustriesGrid />

<section className="b2c-cta-section">
  <div className="o-container">
    <div className="b2c-cta-wrapper">

      <span className="b2c-cta-eyebrow">
        READY TO GROW?
      </span>

      <h2 className="b2c-cta-title">
        Ready for your next
        <br />
        launch or refresh?
      </h2>

    

     <div className="b2c-cta-actions">
  <Link href="/contact" className="c-btn c-btn--orange">
    Plan Your B2C Launch
  </Link>
</div>

    </div>
  </div>
</section>





      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
