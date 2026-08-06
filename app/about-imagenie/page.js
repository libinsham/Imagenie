import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import TextText from "../../components/TextText";
import { clientLogos, awards } from "../../lib/homeContent";
import { leadershipTeam, companyStats } from "../../lib/aboutContent";
import TeamSection from "../../components/TeamSection";

export const metadata = {
  title: "About Us | Imagenie",
  description:
    "Imagenie is an integrated B2B marketing and PR agency that works for some of the world's most innovative and ambitious tech brands.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main id="content">
        <section className="about-hero">
  <div className="o-container">

    <div className="about-hero__grid">

      {/* LEFT CONTENT */}

      <div className="about-hero__content">

        <span className="about-hero__eyebrow">
          ABOUT IMAGENIE
        </span>

        <h1 className="about-hero__title">
       
          <span> Who</span>
          
         We are
        </h1>

        <p className="about-hero__description">
          Imagenie™ is the creative and storytelling studio of
          <strong> DigitalFabric® Group.</strong>
         We bring together strategy, branding,
         design, content, and communication to help ambitious brands express themselves 
         clearly, connect with the right audiences, and grow with purpose.
        </p>

        

        <div className="about-points">

          <div className="about-point">
            <div className="about-icon">◎</div>

            <div>
              <h4>Yojana-Tantra</h4>

              <p>
                Aligning brand and GTM thinking
                with business goals.
              </p>
            </div>
          </div>

          <div className="about-point">
            <div className="about-icon">✎</div>

            <div>
              <h4>Kala-Rachana</h4>

              <p>
                Combining creative craft
                with structural clarity.
              </p>
            </div>
          </div>

          <div className="about-point">
            <div className="about-icon">▣</div>

            <div>
              <h4>Likha-Tantra</h4>

              <p>
                Research-driven storytelling
                built for authority.
              </p>
            </div>
          </div>

          <div className="about-point">
            <div className="about-icon">➜</div>

            <div>
              <h4>Jana-Pravartana</h4>

              <p>
                Marketing systems designed
                to move audiences into action.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}

      <div className="about-hero__image">

        <img
          src="/images/Brand&Identity_Option1.jpg"
          alt="Imagenie"
        />

      </div>

    </div>

    {/* STATS */}

    <div className="about-stats">

      <div className="about-stat">
        <h2>15+</h2>
        <p>Years Experience</p>
      </div>

      <div className="about-stat">
        <h2>200+</h2>
        <p>Projects Delivered</p>
      </div>

      <div className="about-stat">
        <h2>12+</h2>
        <p>Industries Served</p>
      </div>

      <div className="about-stat">
        <h2>98%</h2>
        <p>Client Satisfaction</p>
      </div>

    </div>

  </div>
</section>

        <TextText heading="Think smart. Deliver greatness" variant="white">
          <p>
            At Imagenie, we help ambitious B2B and B2C brands transform ideas into meaningful experiences 
            through strategy, branding, design, and digital innovation.
             Every solution is crafted to build trust, strengthen market presence, and 
             create measurable business growth.
          </p>
          <p>
            We combine consulting, creative thinking, content, technology,
             and marketing under one roof to deliver connected brand experiences. From startups to established enterprises,
             we partner with businesses to create brands that inspire, engage, and leave a lasting impression.
          </p>
        </TextText>

        <TextText heading="Unleash your skills" variant="black">
          <p>
            Our team &lsquo;get&rsquo; tech. Each member of our team thrives on the challenge of
            reaching and influencing high-value B2B buyers of tech solutions. And we&rsquo;re also
            honest, open and thoroughly decent &ndash; which is the important bit, right?
          </p>
        </TextText>

      {/* =========================
    COMPANY STATS
========================= */}





        <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-background--black c-block-padding--both">
          <div className="o-container">
            <div className="o-container__row">
              <div className="o-container__col-12">
                <h2>Our customers</h2>
                <p>
                  We work with amazing clients. 
                </p>
              </div>
              {clientLogos.map((logo) => (
                <div
                  className="o-container__col-6 o-container__col-md-2"
                  key={logo.alt}
                  style={{ display: "flex", alignItems: "center", padding: "1rem 0" }}
                >
                  <img loading="lazy" src={logo.src} alt={logo.alt} style={{ maxWidth: "100%" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

       

  

       
<TeamSection />

        
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
