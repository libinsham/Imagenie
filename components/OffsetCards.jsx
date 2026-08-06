import Link from "next/link";

export default function OffsetCards({ cards }) {
  return (
    <div className="o-container--fluid c-b-full-width-text">
      <div className="o-container">
        <div className="c-b-offset-cards">
          {cards.map((card) => (
            <div key={card.heading} className="c-b-offset-cards__left">
              <div className="c-b-offset-cards__card">
                <div className="c-b-offset-cards__image">
                  <img src={card.image} alt={card.heading} />
                </div>

                <h2>{card.heading}</h2>

                <p>{card.body}</p>

                <div className="c-btn c-btn--black">
                  <Link href={card.href}>{card.linkLabel}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}