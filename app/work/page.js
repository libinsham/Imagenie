import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import WorkFilterNav from "../../components/WorkFilterNav";
import { workCategories } from "../../lib/workPageContent";

export const metadata = {
  title: "Our Work | Imagenie",
  description:
    "Creating brands, campaigns and experiences that move people. Explore selected work from Imagenie across website, social, digital, print and packaging.",
};

export default function WorkPage() {
  return (
    <>
      <Header />

      <main id="content">
        <section className="work-hero">
          <div className="o-container">
            <div className="work-hero__grid">
              <div>
                <p className="work-hero__eyebrow">Our Work</p>
                <h1>
                  Creating brands,   <span>campaigns and experiences.</span>
                </h1>
                <p>
                  From strategy and identity to digital products, social campaigns and
                  packaging, explore selected work from Imagenie.
                </p>
              {/*  <div className="c-btn c-btn--white">
                  <a href="#website">View Case Studies</a>
                </div> */}
              </div>
              <div className="work-hero__visual">
                <img src="/images/creative-intelligence2.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <div className="o-container">
          <WorkFilterNav categories={workCategories} />
        </div>

        <div className="o-container">
          {workCategories.map((category, i) => (
            <section className="work-category" id={category.id} key={category.id}>
              <div className="work-category__row">
                <div className="work-category__aside">
                  <span className="work-category__index">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2>{category.heading}</h2>
                  <p className="work-category__desc">{category.description}</p>
                  <a className="work-category__viewall" href={`#${category.id}`}>
                    View All Projects &rarr;
                  </a>
                </div>

                <div className="work-category__cards">
                  {category.items.map((item) => (
                    <a className="work-card" href={item.href} key={item.title}>
                      <div className="work-card__image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <span className="work-card__tag">{item.tag}</span>
                      <h3 className="work-card__title">{item.title}</h3>
                      <span className="work-card__link">View Case &rarr;</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <div className="work-cta">
            <div>
              <h2>
                Let&rsquo;s build something <span>unforgettable.</span>
              </h2>
              <p>
                Whether you&rsquo;re launching a new brand, refreshing an identity or creating
                your next campaign - we&rsquo;re ready.
              </p>
            </div>
            <a className="work-cta__btn" href="/contact">
              Start a Project &rarr;
            </a>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
