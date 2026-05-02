"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import DotGrid from "./components/DotGrid/DotGrid";
import ColorBends from "./components/ColorBends/ColorBends";
import CardNav from "./components/CardNav/CardNav";

// --- PISAHAN DATA ---

const experiencesData = [
  {
    id: "internbi",
    cardTag: "Internship", 
    year: "2025",
    title: "Bank Indonesia South Sulawesi",
    shortDesc: "Data Entry Automation and Forecasting support",
    period: "22 Apr 2025 - 1 Aug 2025",
    roleLabel: "Role",
    role: "Data Analyst",
    description: "Built a time-series forecasting model to support pension fund planning decisions.",
    tasks: [
      "Created Machine Learning based automation to accelerate monthly Data Entry of 5,000+ entries from 52 different spreadsheets with time efficiency up to 90% (from 5 hours to 30 minutes).",
      "Participated in an internal project to develop a Farmer Planting Calendar dashboard. Performed Data Wrangling, SARIMA based Forecasting, and Data Visualization in Power BI to provide optimal planting period recommendations for farmers."
    ],
    heroImage: "https://media.licdn.com/dms/image/v2/D562DAQGMUUFba6ExVw/profile-treasury-image-shrink_800_800/B56Z3jyeiNKwAY-/0/1777643154684?e=1778313600&v=beta&t=FzwwiULyKSARQXvcxD3wCpeqtPr3mg4E5vyL3UrzXUo",
    gallery: [
      "https://media.licdn.com/dms/image/v2/D562DAQGMUUFba6ExVw/profile-treasury-image-shrink_800_800/B56Z3jyeiNKwAY-/0/1777643154684?e=1778313600&v=beta&t=FzwwiULyKSARQXvcxD3wCpeqtPr3mg4E5vyL3UrzXUo",
      "https://media.licdn.com/dms/image/v2/D562DAQFd8xtNMMIXWQ/profile-treasury-image-shrink_800_800/B56Z3jwnkrG0AY-/0/1777642668840?e=1778313600&v=beta&t=eyTmGNyuPpQrfsExi36rz9a-QGmn_1s7toJfPrR8ZzI",
      "https://media.licdn.com/dms/image/v2/D562DAQGmfBLms9a98g/profile-treasury-image-shrink_800_800/B56Z3jyeiOK4AY-/0/1777643155073?e=1778313600&v=beta&t=yAv8Rw7BIYXEeWBcOfvhG0CZKwOTsY_6AD-wrMNCafM",
      "https://media.licdn.com/dms/image/v2/D562DAQFcUbzBFBrV8Q/profile-treasury-image-shrink_800_800/B56Z3jwnktKYBM-/0/1777642667345?e=1778313600&v=beta&t=7uQD5Cact9-TFsbOr2cOsPovoU1MiXUw0UtVJc49eus",
      "https://media.licdn.com/dms/image/v2/D562DAQEJRiUOwpL5tg/profile-treasury-image-shrink_800_800/B56Z3jyeiNHEAY-/0/1777643155060?e=1778313600&v=beta&t=Ay6_39bVJkpoCcA8wYNt9Gj_z2bUc_fkVOYqPJZAJgQ"
    ],
    link: null
  } 
];

const projectsData = [
  {
    id: "foodsecurity",
    cardTag: "Streamlit",
    year: "2025",
    title: "Food Security Forecasting System",
    shortDesc: "Food Security System for Sulampua's Region.",
    period: "Jul 2025 - Sep 2025",
    roleLabel: "Tools",
    role: "Streamlit",
    description: "Built a time-series forecasting model to support pension fund planning decisions.",
    tasks: [
      "Collaborated on building a Machine Learning based Food Security Prediction System using the Streamlit framework.",
      "Performed Predictive Modeling on 5 variables from the National Food Agency’s Food Security Atlas, covering 127 points in the Sulampua region. Model achieved an R2 score of 0.801 and RMSE of 0.887."
    ],
    heroImage: "./assets/projects/foodsecurity1.png",
    gallery: [
      "./assets/projects/foodsecurity1.png",
      "./assets/projects/foodsecurity2.png",
      "./assets/projects/foodsecurity3.png"
    ],
    link: "https://foodsecurityforecasting.streamlit.app/"
  },
  {
    id: "pensionfund",
    cardTag: "Streamlit",
    year: "2025",
    title: "Pension Fund Calculator",
    shortDesc: "Count pension fund premium costs.",
    period: "Oct 2025 - Jan 2026",
    roleLabel: "Tools",
    role: "Streamlit",
    description: "Built a time-series forecasting model to support pension fund planning decisions.",
    tasks: [
      "Built a Pension Fund Calculator using the Streamlit framework. Useful for calculating participant premiums, featuring simulation parameters adjustable to user conditions.",
      "Implemented Entry Age Normal, Attained Age Normal, and Projected Unit Credit formulas into a digital platform for transparent and accessible calculations."
    ],
    heroImage: "./assets/projects/pensionfund1.png",
    gallery: [
      "./assets/projects/pensionfund1.png",
      "./assets/projects/pensionfund2.png",
      "./assets/projects/pensionfund3.png"
    ],
    link: "https://danapensiun.streamlit.app/"
  },
  {
    id: "smarthighland",
    cardTag: "Colab, Looker",
    year: "2024",
    title: "Smart Highland Agriculture",
    shortDesc: "Best time for plant and crop forecaster.",
    period: "Jan 2024 - Apr 2024",
    roleLabel: "Tools",
    role: "Google Colab, Looker Studio",
    description: "Built a time-series forecasting model to support pension fund planning decisions.",
    tasks: [
      "Collaborated on an Artificial Intelligence based Highland Agriculture Parameter dashboard and identified business opportunities through predictive analysis.",
      "Managed Data Pipelines and performed Hyperparameter Tuning to optimize model performance across various environmental parameters."
    ],
    heroImage: "./assets/projects/smarthighland1.png",
    gallery: [
      "./assets/projects/smarthighland1.png"
    ],
    link: "https://bit.ly/DashboardDigdaya"
  }
];

const researchData = [
  {
    id: "foodsecurity",
    cardTag: "Streamlit",
    year: "2025",
    title: "Food Security Forecasting System",
    shortDesc: "Food Security System for Sulampua's Region.",
    period: "Jul 2025 - Sep 2025",
    roleLabel: "Tools",
    role: "Streamlit",
    description: "Built a time-series forecasting model to support pension fund planning decisions.",
    tasks: [
      "Collaborated on building a Machine Learning based Food Security Prediction System using the Streamlit framework.",
      "Performed Predictive Modeling on 5 variables from the National Food Agency’s Food Security Atlas, covering 127 points in the Sulampua region. Model achieved an R2 score of 0.801 and RMSE of 0.887."
    ],
    heroImage: "./assets/projects/foodsecurity1.png",
    gallery: [
      "./assets/projects/foodsecurity1.png",
      "./assets/projects/foodsecurity2.png",
      "./assets/projects/foodsecurity3.png"
    ],
    link: "https://foodsecurityforecasting.streamlit.app/"
  },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [] as string[], index: 0 });
  
  // --- STATE UNTUK GYROSCOPE LANYARD ---
  const [gyroGravity, setGyroGravity] = useState<[number, number, number]>([0, -40, 0]);
  const [showGyroPermission, setShowGyroPermission] = useState(false);

  const navItems = [
    {
      label: "About", bgColor: "#1B1722", textColor: "#fff",
      links: [
        { label: "Profile", ariaLabel: "About Profile", href: "#profile" },
        { label: "Experiences", ariaLabel: "About Experiences", href: "#experiences" },
      ]
    },
    {
      label: "Projects", bgColor: "#2F293A", textColor: "#fff",
      links: [{ label: "Projects", ariaLabel: "Projects Projects", href: "#projects" }]
    },
    {
      label: "Contact", bgColor: "#2F293A", textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email", href: "mailto:maulanarajisf@gmail.com", openInNewTab: true },
        { label: "GitHub", ariaLabel: "GitHub", href: "https://www.github.com/ajimolana", openInNewTab: true },
        { label: "LinkedIn", ariaLabel: "LinkedIn", href: "https://www.linkedin.com/in/maulanaraji/", openInNewTab: true },
        { label: "Instagram", ariaLabel: "Instagram", href: "https://www.instagram.com/ajimolana/", openInNewTab: true }
      ]
    }
  ];

  // 1. LOGIKA HISTORY BROWSER
  useEffect(() => {
    const handlePopState = () => {
      if (lightbox.isOpen) {
        setLightbox((prev) => ({ ...prev, isOpen: false }));
      } else if (activeProject) {
        setActiveProject(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightbox.isOpen) window.history.back();
        else if (activeProject) window.history.back();
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox.isOpen, activeProject]);

  // 2. LOGIKA GYROSCOPE (DEVICE ORIENTATION)
  const handleOrientation = (event: DeviceOrientationEvent) => {
    let { beta, gamma } = event;
    if (beta === null || gamma === null) return;
    
    // Batasi nilai kemiringan ekstrem
    beta = Math.max(-90, Math.min(90, Math.floor(beta)));
    gamma = Math.max(-90, Math.min(90, Math.floor(gamma)));

    // Konversi kemiringan X dan Y menjadi sumbu gravitasi X dan Z (Rapier physics)
    const gx = gamma * 0.6;
    const gz = (beta - 45) * 0.6; // Anggap posisi rileks HP adalah miring 45 derajat
    
    setGyroGravity([gx, -40, gz]);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.DeviceOrientationEvent) {
      if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
        // Jika iOS 13+, butuh permission (tampilkan tombol)
        setShowGyroPermission(true);
      } else {
        // Jika Android atau browser lain, langsung jalankan
        window.addEventListener('deviceorientation', handleOrientation);
      }
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('deviceorientation', handleOrientation);
      }
    };
  }, []);

  const requestGyro = async () => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === 'function') {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission();
        if (permission === 'granted') {
          window.addEventListener('deviceorientation', handleOrientation);
          setShowGyroPermission(false);
        } else {
          setShowGyroPermission(false); // Sembunyikan tombol jika ditolak
        }
      } catch (e) {
        console.error("Gyro error:", e);
      }
    }
  };

  // 3. LOGIKA KUNCI SCROLL SAAT MODAL TERBUKA
  const isOverlayOpen = activeProject !== null || lightbox.isOpen;

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOverlayOpen]);

  // CONTROLLERS MODAL & LIGHTBOX
  const openProjectModal = (project: any) => {
    window.history.pushState({ modalOpen: true }, "");
    setActiveProject(project);
  };
  const closeProjectModal = () => window.history.back();

  const openLightbox = (images: string[], index: number) => {
    window.history.pushState({ lightboxOpen: true }, "");
    setLightbox({ isOpen: true, images, index });
  };
  const closeLightbox = () => window.history.back();

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((prev) => ({ ...prev, index: (prev.index + 1) % prev.images.length }));
  };
  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightbox((prev) => ({ ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }));
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#101010] relative pt-0 pb-10">
      
      {/* CARD NAV DENGAN LOGIKA HIDE SAAT MODAL TERBUKA */}
      <div 
        className="md:transition-opacity md:duration-300 md:ease-in-out" 
        style={{ opacity: isOverlayOpen ? 0 : 1, pointerEvents: isOverlayOpen ? 'none' : 'auto' }}
      >
        <CardNav logo="" logoAlt="" title="Maulana's Portfolio" items={navItems} baseColor="#fff" menuColor="#fff" ease="power3.out" />
      </div>

      {/* HEADER SECTION */}
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div style={{ width: '100%', height: '100%', position: 'relative', WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)', maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)' }}>
            <ColorBends colors={["#19382e"]} rotation={90} speed={0.2} scale={1} frequency={1} warpStrength={1} mouseInfluence={1} noise={0.15} parallax={0.5} iterations={1} intensity={1.5} bandWidth={6} transparent autoRotate={0} />
            <DotGrid dotSize={5} gap={15} baseColor="#2F293A" activeColor="#5227FF" proximity={120} shockRadius={250} shockStrength={5} resistance={750} returnDuration={1.5} />
          </div>
        </div>
        <div className="mx-auto max-w-[1366px] min-h-[90vh] px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
            <div className="col-span-1 md:col-span-6 h-full relative z-10 order-2 md:order-none">
              <div className="flex items-start md:items-center h-full">
                <div className="flex flex-col gap-6 -mt-28 sm:-mt-10 md:mt-0">
                  <AnimatedContent distance={100} direction="vertical" reverse={false} duration={0.8} ease="power3.out" initialOpacity={0} animateOpacity scale={1} threshold={0.1} delay={0}>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 sm:mt-4 md:mt-32">
                      <h1 className="text-lg sm:text-2xl text-white font-bold">I'm Open to Position as a</h1>
                      <RotatingText texts={['Data Analyst', 'Data Scientist', 'Risk Analyst', 'Management Trainee']} mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-lg sm:text-2xl font-bold inline-flex transition-all" staggerFrom="last" initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-120%" }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1" transition={{ type: "spring", damping: 30, stiffness: 400 }} rotationInterval={2000} splitBy="characters" auto loop />
                    </div>
                  </AnimatedContent>
                  <div className="flex flex-col items-start gap-4">
                    <SplitText text="I'm Maulana Raji Shofil Fuadi" className="text-3xl sm:text-4xl md:text-6xl font-semibold text-start whitespace-normal md:whitespace-nowrap" textAlign="left" delay={50} from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} to={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
                    <SplitText text="Actuarial Science Graduate" className="text-2xl sm:text-3xl md:text-5xl font-semibold text-start text-[#C6F10E]" textAlign="left" delay={75} from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }} to={{ opacity: 1, transform: 'translate3d(0,0,0)' }} threshold={0.2} rootMargin="-50px" />
                  </div>
                  <div className="flex flex-col items-start">
                    <BlurText text="Interested in data and machine learning. Experienced intern at Bank Indonesia with a proven track record of driving efficiency through data entry automation. Skilled in forecasting, data analysis, and visualization. Certified Data Analyst by BNSP and Data Science by Startup Campus. Possesses strong public speaking and leadership skills with a history of various achievements. Highly reliable in agile environments, adaptive, and dedicated to collaborative teamwork." delay={20} animateBy="words" direction="top" className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-xl sm:max-w-2xl md:max-w-7xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-6 relative z-0 overflow-visible order-1 md:order-none -mt-48 sm:-mt-24 md:-mt-10">
              <div className="relative w-[260%] -ml-[80%] md:w-[400%] md:-ml-[130%] flex items-center justify-center">
                
                {/* TOMBOL REQUEST GYRO (HANYA MUNCUL DI iOS 13+) */}
                {showGyroPermission && (
                  <button 
                    onClick={requestGyro}
                    className="absolute z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-300"
                    style={{ top: '40%' }} // Menyesuaikan dengan tinggi Lanyard
                  >
                    Enable 3D Lanyard
                  </button>
                )}

                {/* GRAVITASI LANYARD SUDAH DINAMIS */}
                <Lanyard position={[0, 0, 15]} gravity={gyroGravity} />

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. SECTION EXPERIENCES */}
      <section id="experiences" className="w-full mt-10">
        <div className="mx-auto max-w-[1366px] px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiencesData.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => openProjectModal(project)}
                className="group relative text-left rounded-3xl border border-white/15 bg-[#111111] p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/70 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 80px rgba(255,255,255,0.18)' }} />
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={project.heroImage} alt={project.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="px-2 pt-4 pb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-xs uppercase tracking-widest text-white/60">{project.cardTag}</p>
                    <p className="text-xs sm:text-xs uppercase tracking-wide text-white/60">{project.year}</p>
                  </div>
                  <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-white truncate">{project.title}</h3>
                  <p className="mt-2 text-xs text-white/60 truncate">{project.shortDesc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. SECTION PROJECTS */}
      <section id="projects" className="w-full mt-20">
        <div className="mx-auto max-w-[1366px] px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => openProjectModal(project)}
                className="group relative text-left rounded-3xl border border-white/15 bg-[#111111] p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/70 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 80px rgba(255,255,255,0.18)' }} />
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={project.heroImage} alt={project.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="px-2 pt-4 pb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-xs uppercase tracking-wide text-white/60">{project.cardTag}</p>
                    <p className="text-xs sm:text-xs uppercase tracking-wide text-white/60">{project.year}</p>
                  </div>
                  <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-white truncate">{project.title}</h3>
                  <p className="mt-2 text-xs text-white/60 truncate">{project.shortDesc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECTION RESEARCH */}
      <section id="research" className="w-full mt-20">
        <div className="mx-auto max-w-[1366px] px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchData.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => openProjectModal(project)}
                className="group relative text-left rounded-3xl border border-white/15 bg-[#111111] p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/70 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 80px rgba(255,255,255,0.18)' }} />
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={project.heroImage} alt={project.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="px-2 pt-4 pb-2">
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-xs uppercase tracking-wide text-white/60">{project.cardTag}</p>
                    <p className="text-xs sm:text-xs uppercase tracking-wide text-white/60">{project.year}</p>
                  </div>
                  <h3 className="mt-1 text-xl sm:text-2xl font-semibold text-white truncate">{project.title}</h3>
                  <p className="mt-2 text-xs text-white/60 truncate">{project.shortDesc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full mt-28 mb-20 border-t border-white/10 pt-10 flex flex-col items-center justify-center gap-6">
        <div className="flex items-center justify-center gap-6">
          <a 
            href="mailto:maulanarajisf@gmail.com" 
            target="_blank" 
            rel="noreferrer" 
            className="transition-opacity hover:opacity-80" 
            aria-label="Email"
          >
            <img 
              src="https://img.icons8.com/?size=100&id=12623&format=png&color=888888" 
              alt="Email Logo" 
              className="w-7 h-7" // Ukuran 28px (w-7 = 1.75rem = 28px)
            />
          </a>
          <a 
            href="https://github.com/ajimolana" 
            target="_blank" 
            rel="noreferrer" 
            className="transition-opacity hover:opacity-80" 
            aria-label="GitHub"
          >
            <img 
              src="https://img.icons8.com/?size=100&id=12599&format=png&color=888888" 
              alt="GitHub Logo" 
              className="w-7 h-7" // Ukuran 28px (w-7 = 1.75rem = 28px)
            />
          </a>
          <a 
            href="https://linkedin.com/in/maulanaraji/" 
            target="_blank" 
            rel="noreferrer" 
            className="transition-opacity hover:opacity-80" 
            aria-label="LinkedIn"
          >
            <img 
              src="https://img.icons8.com/?size=100&id=8808&format=png&color=888888" 
              alt="LinkedIn Logo" 
              className="w-7 h-7" // Ukuran 28px (w-7 = 1.75rem = 28px)
            />
          </a>
           <a 
            href="https://instagram.com/ajimolana/" 
            target="_blank" 
            rel="noreferrer" 
            className="transition-opacity hover:opacity-80" 
            aria-label="Instagram"
          >
            <img 
              src="https://img.icons8.com/?size=100&id=32309&format=png&color=888888" 
              alt="Instagram Logo" 
              className="w-7 h-7" // Ukuran 28px (w-7 = 1.75rem = 28px)
            />
          </a>
        </div>
        <p className="text-sm text-[#dfdfdf] text-center px-4">
          Copyright &copy; 2026 Maulana Raji Shofil Fuadi. All rights reserved.
        </p>
      </footer>

      {/* GLOBAL PROJECT MODAL (Fixed Header + Scrollable Content) */}
      {activeProject && (
        <div
          className="fixed inset-0 z-40 bg-black/70 px-4 py-6 flex items-center justify-center backdrop-blur-sm"
          onClick={closeProjectModal}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-[#111111] text-white shadow-2xl flex flex-col max-h-[75vh] sm:max-h-[85vh] overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex-none flex items-center justify-between bg-[#111111] px-5 py-4 sm:px-6 sm:py-5 border-b border-white/10 z-10">
              <h3 className="text-xl sm:text-2xl font-semibold pr-4 truncate">{activeProject.title}</h3>
              <button
                type="button"
                className="flex-shrink-0 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 transition hover:border-white/60 hover:text-white"
                onClick={closeProjectModal}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12" /><path d="M18 6l-12 12" /></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-6 sm:py-6 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-white/60">Period / Date</p>
                  <p className="text-base text-white">{activeProject.period}</p>
                </div>
                <div>
                  <p className="text-sm text-white/60">{activeProject.roleLabel}</p>
                  <p className="text-base text-white">{activeProject.role}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-white/60">Description</p>
                <p className="text-base text-white/80">{activeProject.description}</p>
              </div>

              <div>
                <p className="text-sm text-white/60">Task</p>
                <ul className="mt-2 space-y-1 text-base text-white/80 list-disc list-outside ml-5">
                  {activeProject.tasks.map((task: string, idx: number) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-sm text-white/60">Documentation</p>
                {/* Hapus sm:grid dan sm:grid-cols-3 agar tetap flexbox */}
                <div className="mt-3 flex overflow-x-auto gap-3 pb-4 no-scrollbar"> 
                  {activeProject.gallery.map((img: string, idx: number) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Documentation ${idx + 1}`}
                      /* Hapus sm:w-full agar gambar tidak melebar memenuhi kolom grid */
                      className="h-40 w-64 flex-none rounded-2xl object-cover cursor-pointer hover:opacity-70 transition-opacity"
                      onClick={() => openLightbox(activeProject.gallery, idx)}
                    />
                  ))}
                </div>
              </div>

              {activeProject.link && (
                <div>
                  <p className="mb-2 text-sm text-white/60">Link</p>
                  <Link
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white hover:text-black"
                  >
                    Open Project
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX UNTUK PREVIEW GAMBAR */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white p-2"
            onClick={closeLightbox}
          >
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12" /><path d="M18 6l-12 12" /></svg>
          </button>

          <div className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.index]} 
              alt="Preview" 
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            {lightbox.images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white bg-black/40 hover:bg-black/80 rounded-r-lg sm:rounded-full transition"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white bg-black/40 hover:bg-black/80 rounded-l-lg sm:rounded-full transition"
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </>
            )}
          </div>
        </div>
      )}

    </div>
  );
}