"use client";

import {
  FaHotel,
  FaUtensils,
  FaShoppingCart,
  FaSpa,
  FaTshirt,
  FaPlane,
  FaBuilding,
  FaClinicMedical,
  FaGraduationCap,
  FaFilm,
  FaMobileAlt,
  FaGem,
  FaCar,
  FaCouch,
  FaDumbbell,
} from "react-icons/fa";

const industries = [
  {
    no: "01",
    title: "Hospitality",
    icon: <FaHotel />,
    desc: "Marketing & brand experiences for hotels, restaurants and hospitality businesses.",
  },
  {
    no: "02",
    title: "Food & Beverage",
    icon: <FaUtensils />,
    desc: "Helping food & beverage brands grow through storytelling and campaigns.",
  },
  {
    no: "03",
    title: "Retail & E-commerce",
    icon: <FaShoppingCart />,
    desc: "Driving growth through seamless retail and digital experiences.",
  },
  {
    no: "04",
    title: "Beauty & Wellness",
    icon: <FaSpa />,
    desc: "Building beauty and wellness brands that inspire loyalty.",
  },
  {
    no: "05",
    title: "Fashion & Lifestyle",
    icon: <FaTshirt />,
    desc: "Creative marketing for fashion and lifestyle brands.",
  },
  {
    no: "06",
    title: "Travel & Tourism",
    icon: <FaPlane />,
    desc: "Helping destinations and tourism brands attract travellers.",
  },
  {
    no: "07",
    title: "Real Estate",
    icon: <FaBuilding />,
    desc: "Marketing residential, commercial and luxury developments.",
  },
  {
    no: "08",
    title: "Healthcare & Clinics",
    icon: <FaClinicMedical />,
    desc: "Building trust for healthcare providers and clinics.",
  },
  {
    no: "09",
    title: "Education",
    icon: <FaGraduationCap />,
    desc: "Helping education providers attract students.",
  },
  {
    no: "10",
    title: "Entertainment",
    icon: <FaFilm />,
    desc: "Campaigns that build excitement and grow audiences.",
  },
  {
    no: "11",
    title: "Consumer Technology",
    icon: <FaMobileAlt />,
    desc: "Helping consumer technology brands launch and scale.",
  },
  {
    no: "12",
    title: "Luxury",
    icon: <FaGem />,
    desc: "Premium brand experiences reflecting quality and exclusivity.",
  },
  {
    no: "13",
    title: "Automotive",
    icon: <FaCar />,
    desc: "Marketing for automotive brands and mobility services.",
  },
  {
    no: "14",
    title: "Home & Interiors",
    icon: <FaCouch />,
    desc: "Helping furniture and décor brands inspire customers.",
  },
  {
    no: "15",
    title: "Sports & Fitness",
    icon: <FaDumbbell />,
    desc: "Building active lifestyle brands through performance marketing.",
  },
];

export default function B2CIndustriesGrid() {
  return (
    <section className="b2c-industries">
      <div className="o-container">

        <div className="b2c-industries__header">
          <span className="b2c-industries__eyebrow">
            B2C INDUSTRIES
          </span>

          <h2>
            Consumer brands
            <br />
            we help <span>grow.</span>
          </h2>

          <p>
            We partner with consumer brands across industries to build strong
            identities, create memorable experiences and drive measurable
            business growth.
          </p>
        </div>

        <div className="b2c-industries__grid">

          {industries.map((item) => (
            <div className="b2c-industry-card" key={item.no}>

              <div className="b2c-industry-card__icon">
                {item.icon}
              </div>

              <div className="b2c-industry-card__no">
                {item.no}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}