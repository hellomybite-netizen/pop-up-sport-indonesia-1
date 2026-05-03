import React, { createContext, useContext, useState, useEffect } from "react";

interface SiteContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    backgroundImage: string;
  };
  narrative: {
    label: string;
    headline: string;
    description: string;
    additionalText: string;
  };
  contact: {
    address: string;
    email: string;
    phone: string;
  };
}

const DEFAULT_CONTENT: SiteContent = {
  hero: {
    badge: "EST. 1998",
    title: "Membangun Infrastruktur Olahraga Masa Depan.",
    subtitle: "Solusi konstruksi premium untuk Padel, Tennis, dan Lapangan Olahraga berstandar internasional di seluruh Indonesia.",
    primaryCta: "Lihat Katalog",
    secondaryCta: "Konsultasi Teknis",
    backgroundImage: import.meta.env.BASE_URL + "hero-headline.jpg"
  },
  narrative: {
    label: "Project Narrative",
    headline: "Mewujudkan Visi Olahraga Berstandar Internasional.",
    description: "Kami percaya bahwa fasilitas olahraga yang berkualitas adalah fondasi dari prestasi. Dengan pengalaman lebih dari dua dekade, kami menggabungkan presisi teknis dengan material kelas dunia.",
    additionalText: "Setiap detail dalam proyek ini, mulai dari komposisi lapisan permukaan hingga sistem pencahayaan pintar, dirancang untuk melampaui standar federasi internasional. Fokus utama kami adalah memberikan pengalaman bermain yang aman, konsisten, dan tahan lama di bawah kondisi iklim Indonesia."
  },
  contact: {
    address: "Kawasan Industri Jababeka, Cikarang, Jawa Barat, Indonesia",
    email: "info@mitraolahraga.com",
    phone: "+62 812 3456 7890"
  }
};

interface ContentContextType {
  content: SiteContent;
  updateContent: (newContent: Partial<SiteContent>) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    const saved = localStorage.getItem("site_content_v2");
    return saved ? JSON.parse(saved) : DEFAULT_CONTENT;
  });

  useEffect(() => {
    localStorage.setItem("site_content_v2", JSON.stringify(content));
  }, [content]);

  const updateContent = (newContent: Partial<SiteContent>) => {
    setContent(prev => ({
      ...prev,
      ...newContent
    }));
  };

  const resetContent = () => {
    setContent(DEFAULT_CONTENT);
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
