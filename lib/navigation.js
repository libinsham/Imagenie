// Navigation tree extracted from the original WordPress menus (#menu-primary / #menu-secondary).
// Paths are clean Next.js routes (no .html) - most of these pages aren't built yet in this
// homepage-only conversion, but the structure/links are preserved so they're ready to wire up.

export const primaryNav = [{ label: "Contact", href: "/contact" }];

export const secondaryNav = [
  { label: "B2B", href: "/b2b-tech-marketing" },
  { label: "B2C", href: "/b2c" },
  { label: "OUR WORKS", href: "/work" },
  { label: "ABOUT US", href: "/about-imagenie" },
  { label: "SOCIAL", href: "/socials" },
  
  { label: "CONTACT", href: "/contact" },
];
  
  

export const footerQuickLinks1 = [
  { label: "Work", href: "/work" },
  { label: "Expertise", href: "/expertise" },
  { label: "Industries", href: "/industries" },
];

export const footerQuickLinks2 = [
  { label: "Insights", href: "/insights" },
  { label: "About us", href: "/about-IMAG" },
  { label: "Careers", href: "/join-IMA" },
];

export const footerLegalLinks = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export const offices = [
  {
    city: "Hyderabad",
    lines: ["8 Devonshire Square", "London, EC2M 4YJ"],
    mapHref:
      "https://www.google.com",
    phone: "",
  },
 
 
];

export const socialLinks = [
  { name: "linkedin", href: "https://www.linkedin.com/company/digitalfabric-imagenie/" },
  { name: "instagram", href: "https://www.instagram.com/imagenie.in_?igsh=MTl6cjh6eW9kaGFuNQ%3D%3D&utm_source=qr" },

];
