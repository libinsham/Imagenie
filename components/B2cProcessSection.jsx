import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    title: "Discover",
    description: "Understand your category, consumer, price point and competitive set.",
    icon: "/images/icons/discover.svg",
  },
  {
    title: "Define",
    description: "Craft a clear positioning and creative direction.",
    icon: "/images/icons/define.svg",
  },
  {
    title: "Design",
    description: "Develop identity, packaging and digital assets.",
    icon: "/images/icons/design.svg",
  },
  {
    title: "Deploy",
    description: "Launch your brand across channels and refine based on real‑world data.",
    icon: "/images/icons/deploy.svg",
  },
];

export default function B2cProcessSection() {
  return (
    <section className="process-section">
      <div className="o-container">

        <div className="process-header">
          <div className="process-header__content">
            <h2 className="process-heading">
              How We Work With B2C Brands
            </h2>

            <p className="process-subheading">
              A collaborative process that transforms ideas into memorable consumer brands.
            </p>
          </div>

       
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card" key={index}>
              <div className="process-circle">
                <span className="step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Image
                  src={step.icon}
                  alt={step.title}
                  width={70}
                  height={70}
                  className="process-icon"
                />
              </div>

              {index < steps.length - 1 && (
                <div className="process-arrow">→</div>
              )}

              <div className="process-content">
                <h3 className="process-title">
                  {step.title}
                </h3>

                <p className="process-description">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}