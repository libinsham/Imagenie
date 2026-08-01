import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import TextText from "../../components/TextText";
import OffsetCards from "../../components/OffsetCards";
import B2cFourCapabilitiesBoxes from "../../components/B2cFourCapabilitiesBoxes"
import B2CIndustriesGrid from "../../components/B2CIndustriesGrid";
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
            B2C PAGE – “B2C, D2C & Brand Experiences
          </span>

          <h1>B2C brands people remember and return to. </h1>

          <p className="b2b-hero__subtitle">
            From identity and packaging to campaigns and content, we help consumer brands build stronger presence, consistency, and conversion.
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

       <TextText heading="How We Work With B2C Brands   " variant="white">
            <p>
           <ul>
  <li>
    D2C Wellness Brand – Full identity, packaging system and Shopify store, ready for paid and influencer marketing.  
  </li>

  <li>
   Hospitality Brand – Visual refresh, website and content that moved direct bookings away from OTAs.   
  </li>

  <li>
    <b>Lifestyle Retailer </b>– Social‑first creative system and campaigns that drove consistent online engagement. 
  </li>

 
</ul>
          </p>

    <div
  style={{
    marginTop: "30px",
    border: "2px solid #ff6a00",
    padding: "20px 20px",
    borderRadius: "12px",
    width: "33%",
  }}
>
  <Link href="/contact" className="b2c-cta">
    Talk to Our B2C Team →
  </Link>
</div>
        
        </TextText>

 <TextText heading="B2C Case Snippets  " variant="black">
            <p>
           <ul>
  <li>
    D2C Wellness Brand – Full identity, packaging system and Shopify store, ready for paid and influencer marketing.  
  </li>

  <li>
   Hospitality Brand – Visual refresh, website and content that moved direct bookings away from OTAs.   
  </li>

  <li>
    <b>Lifestyle Retailer </b>– Social‑first creative system and campaigns that drove consistent online engagement. 
  </li>

 
</ul>
          </p>

    <div
  style={{
    marginTop: "30px",
    border: "2px solid #ff6a00",
    padding: "20px 20px",
    borderRadius: "12px",
    width: "33%",
  }}
>
  <Link href="/contact" className="b2c-cta">
    Talk to Our B2C Team →
  </Link>
</div>
        
        </TextText>


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


<B2CIndustriesGrid />


      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
