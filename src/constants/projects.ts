
export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  description: string;
  year: string;
  thumbnail: string;
  gallery: string[];
  client: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

export const PROJECTS: Project[] = [
  {
    id: "sudirman-executive",
    title: "Sudirman Executive Courts",
    category: "TENNIS",
    location: "Jakarta Selatan",
    year: "2024",
    client: "Elite Residentials Dev",
    description: "A prestigious rooftop sports environment featuring three Grand Slam standard hardcourts. The project used advanced cushioning systems and high-lumen smart lighting to ensure 24/7 playability in one of Jakarta's busiest business districts.",
    thumbnail: "https://images.unsplash.com/photo-1595435064212-36293974023f?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1595435064212-36293974023f?q=80&w=1200",
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200",
      "https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1200"
    ],
    testimonial: {
      text: "Pop Up Sport transformed our unused rooftop into the city's most talked-about tennis club. Their attention to material science is unparalleled.",
      author: "Irwan Setiawan",
      role: "Project Manager, Elite Dev"
    }
  },
  {
    id: "uluwatu-padel",
    title: "Uluwatu Padel Resort",
    category: "PADEL",
    location: "Bali",
    year: "2023",
    client: "Zenith Resorts Bali",
    description: "Indonesia's first fully panoramic padel facility, designed to merge with Bali's natural landscape. We used anti-corrosive structural elements and specialized drainage to handle the tropical seaside environment.",
    thumbnail: "https://images.unsplash.com/photo-1616149175713-3330691512db?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1616149175713-3330691512db?q=80&w=1200",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200",
      "https://images.unsplash.com/photo-1518611507436-f9221403cca2?q=80&w=1200"
    ],
    testimonial: {
      text: "The panoramic courts are a masterpiece. Our guests are amazed by the quality of play and the architectural integration.",
      author: "Sarah Johnson",
      role: "Operations Director, Zenith"
    }
  },
  {
    id: "dharmahusada-hub",
    title: "Dharmahusada Sport Hub",
    category: "MULTI-SPORT",
    location: "Surabaya",
    year: "2023",
    client: "City Sports Foundation",
    description: "A community-focused multi-sport facility featuring high-density vinyl surfaces for futsal, basketball, and volleyball. Designed for maximum durability and low-maintenance operational performance.",
    thumbnail: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200",
      "https://images.unsplash.com/photo-1589146129990-2e3eb8fb6788?q=80&w=1200"
    ]
  },
  {
    id: "dago-athletics",
    title: "Dago Athletics Training",
    category: "RUNNING",
    location: "Bandung",
    year: "2024",
    client: "Universitas Padjadjaran",
    description: "A professional IAAF-standard athletics track engineered for elite training. The project involved complex topographical work and specialized porous rubber layers for the high-altitude terrain.",
    thumbnail: "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=1200",
      "https://images.unsplash.com/photo-1647419816008-01362086df04?q=80&w=1200"
    ]
  },
  {
    id: "losari-aquatic",
    title: "Losari Aquatic Center",
    category: "AQUATICS",
    location: "Makassar",
    year: "2022",
    client: "Municipal Gov Makassar",
    description: "A world-class aquatic center featuring Olympic-size pools with advanced filtration and competition-grade heating systems. Built to survive the harsh coastal conditions of Sulawesi.",
    thumbnail: "https://images.unsplash.com/photo-1518611507436-f9221403cca2?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1518611507436-f9221403cca2?q=80&w=1200",
      "https://images.unsplash.com/photo-1612450796333-e7f0152e054a?q=80&w=1200"
    ]
  }
];
