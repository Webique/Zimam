export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/zimam_legal",
    snapchat: "https://www.snapchat.com/@zimam_905?sid=5c6c7f285172402192135df480953408&share_id=gk6K7Ml7SaSMaMnTGuJNRw&invite_id=7bhoI5i9",
    twitter: "https://x.com/zimam_legal",
    tiktok: "https://www.tiktok.com/@zimam_legal",
    whatsapp: "https://api.whatsapp.com/send?phone=966560008905"
  },

  support: {
    phone: "0560008905",
    email: "info@zimam.net",
    whatsapp: "0560008905",
    landline: ""
  },

  location: {
    city: "Dammam",
    district: "Al-Husam",
    country: "Saudi Arabia"
  },

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
