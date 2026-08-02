import Link from "next/link";

export default function SocialHero() {
  return (
    <section className="social-hero">
      <div className="o-container">
        <div className="social-hero__grid">

          <div>
            <div className="social-hero__eyebrow">
              SOCIALS & EVENTS
            </div>

            <h1>
              See what we're creating,
              <br />
              sharing <span>&amp;</span> celebrating.
            </h1>

            <p>
              Follow our latest campaigns, launches, behind-the-scenes
              moments, creative insights and company events across every
              platform.
            </p>

            
              <div className="c-btn ">
                <Link href="/contact">
                  Follow Our Journey
                </Link>
              </div>
          
          </div>

          <div className="social-hero__right">

            <img
              src="/images/social-globe.png"
              alt="Social Globe"
              className="social-hero__globe"
            />

            <div className="social-hero__follow">
              <span>FOLLOW US ON</span>

              <div className="social-icons">
                <a href="#">IG</a>
                <a href="#">IN</a>
               
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}