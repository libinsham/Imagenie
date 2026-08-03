import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import B2BCaseStudies from "../../components/B2BCaseStudies";

export const metadata = {
  title: "Case Studies | Imagenie",
  description: "Explore our latest branding and marketing case studies.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <main id="content">
        <section className="">
          <div className="o-container">
            <h1>Case Studies</h1>

            <p>
              Explore our latest branding, digital, marketing, research,
              and creative success stories.
            </p>
          </div>

          <B2BCaseStudies />
        </section>
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}