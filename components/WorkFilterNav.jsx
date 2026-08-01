"use client";

import { useEffect, useState } from "react";

export default function WorkFilterNav({ categories }) {
  const [active, setActive] = useState(categories[0]?.id);

  // Highlight whichever section is currently in view as the user scrolls,
  // so the tab bar stays in sync instead of only updating on click.
  useEffect(() => {
    const sections = categories
      .map((cat) => document.getElementById(cat.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [categories]);

  function handleClick(e, id) {
    e.preventDefault();
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <nav className="work-filter-nav">
      <a
        href="#"
        className={`work-filter-nav__item${active === "all" ? " is-active" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setActive("all");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        All
      </a>
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          className={`work-filter-nav__item${active === cat.id ? " is-active" : ""}`}
          onClick={(e) => handleClick(e, cat.id)}
        >
          {cat.label}
        </a>
      ))}
    </nav>
  );
}
