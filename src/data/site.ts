import type { SiteInfo, NavItem } from './types';

export const siteInfo: SiteInfo = {
  name: "Northinca Canada",
  slogan: "Expand your Health and Beauty market in Canada through expert distribution.",
  description: "Northinca brings together seasoned business leaders and healthcare industry experts to create a unique advantage for companies/products seeking entry to the Canadian market.",
  primaryColor: "rgb(35,58,108)",
  contact: {
    address: "2-35 East Beaver Creek Road, Richmond Hill, ON L4B 1B3, Canada",
    phone: "(365)550-3470",
    email: "info@northinca.com",
    hours: "Monday – Friday: 9 AM – 5 PM"
  },
  social: {
    instagram: "https://www.instagram.com/northinca/",
    linkedin: "https://linkedin.com/company/northinca-inc"
  }
};

export const headerNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export const footerNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" }
];
