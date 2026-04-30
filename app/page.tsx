"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import DotGrid from "./components/DotGrid/DotGrid";
import GradientText from "./components/GradientText/GradientText";
import GradualBlur from './components/GradualBlur/GradualBlur';
import TiltedCard from "./components/TiltedCard/TiltedCard";
import CardNav from "./components/CardNav/CardNav";
import GlassSurface from "./components/GlassSurface/GlassSurface";
import ColorBends from "./components/ColorBends/ColorBends";
import DotField from "./components/DotField/DotField";

export default function Home() {
  const [isInternBIOpen, setIsInternBIOpen] = useState(false);
  const [isFoodSecurityOpen, setIsFoodSecurityOpen] = useState(false);
  const [isPensionFundOpen, setIsPensionFundOpen] = useState(false);
  const [isSmartHighlandOpen, setIsSmartHighlandOpen] = useState(false);

  const navItems = [
    {
      label: "About",
      bgColor: "#1B1722",
      textColor: "#fff",
      links: [
        { label: "Profile", ariaLabel: "About Profile", href: "#profile" },
        { label: "Experiences", ariaLabel: "About Experiences", href: "#experiences" },
      ]
    },
    {
      label: "Projects",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        { label: "Projects", ariaLabel: "Projects Projects", href: "#projects" },
      ]
    },
    {
      label: "Contact",
      bgColor: "#2F293A",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          ariaLabel: "Email",
          href: "mailto:maulanarajisf@gmail.com",
          openInNewTab: true
        },
        {
          label: "LinkedIn",
          ariaLabel: "LinkedIn",
          href: "https://www.linkedin.com/in/maulanaraji/",
          openInNewTab: true
        },
        {
          label: "Instagram",
          ariaLabel: "Instagram",
          href: "https://www.instagram.com/ajimolana/",
          openInNewTab: true
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#101010] relative pt-0">
      <CardNav
        logo=""
        logoAlt=""
        title="Maulana's Portfolio"
        items={navItems}
        baseColor="#fff"
        menuColor="#fff"
        ease="power3.out"
      />

    
      <div className="w-full relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)'
            }}
          >
            <ColorBends
              colors={["#19382e"]}
              rotation={90}
              speed={0.2}
              scale={1}
              frequency={1}
              warpStrength={1}
              mouseInfluence={1}
              noise={0.15}
              parallax={0.5}
              iterations={1}
              intensity={1.5}
              bandWidth={6}
              transparent
              autoRotate={0}
            />
            <DotGrid
              dotSize={5}
              gap={15}
              baseColor="#2F293A"
              activeColor="#5227FF"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
        </div>
        <div className="mx-auto max-w-[1366px] min-h-screen px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
            <div className="col-span-1 md:col-span-6 h-full relative z-10 order-2 md:order-none">
              <div className="flex items-start md:items-center h-full">
                <div className="flex flex-col gap-6 -mt-28 sm:-mt-10 md:mt-0">
                  <AnimatedContent
                    distance={100}
                    direction="vertical"
                    reverse={false}
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    scale={1}
                    threshold={0.1}
                    delay={0}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 sm:mt-4 md:mt-32">
                      <h1 className="text-lg sm:text-2xl text-white font-bold">I'm Open to Position as a</h1>
                      <RotatingText
                        texts={['Data Analyst', 'Data Scientist', 'Risk Analyst', 'Management Trainee']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-lg sm:text-2xl font-bold inline-flex transition-all"
                        staggerFrom="last"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                        splitBy="characters"
                        auto
                        loop
                      />
                    </div>
                  </AnimatedContent>
                
                  <div className="flex flex-col items-start gap-4">
                    <SplitText
                      text="I'm Maulana Raji Shofil Fuadi"
                      className="text-3xl sm:text-4xl md:text-6xl font-semibold text-start whitespace-normal md:whitespace-nowrap"
                      textAlign="left"
                      delay={50}
                      from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                      to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                      threshold={0.2}
                      rootMargin="-50px"             
                    />
                    <SplitText
                      text="Actuarial Science Graduate"
                      className="text-2xl sm:text-3xl md:text-5xl font-semibold text-start text-[#C6F10E]"
                      textAlign="left"
                      delay={75}
                      from={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                      to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                      threshold={0.2}
                      rootMargin="-50px"              
                    />
                  </div>

                  <div className="flex flex-col items-start">
                    <BlurText 
                      text="Interested in data and machine learning. Experienced intern at Bank Indonesia with a proven track record of driving efficiency through data entry automation. Skilled in forecasting, data analysis, and visualization. Certified Data Analyst by BNSP and Data Science by Startup Campus. Possesses strong public speaking and leadership skills with a history of various achievements. Highly reliable in agile environments, adaptive, and dedicated to collaborative teamwork."
                      delay={20}
                      animateBy="words"
                      direction="top"
                      className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-xl sm:max-w-2xl md:max-w-7xl"
                    />
                  </div>
                </div>
              </div>
            </div>       

            <div className="col-span-1 md:col-span-6 relative z-0 overflow-visible order-1 md:order-none -mt-72 sm:-mt-36 md:-mt-10">
              <div className="relative w-[260%] -ml-[80%] md:w-[400%] md:-ml-[130%]">
                <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section Experiences */}
      <section id="experiences" className="w-full mt-10">
        <div className="mx-auto max-w-[1366px] px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <button
              type="button"
              aria-label="Open Intern BI Details"
              onClick={() => setIsInternBIOpen(true)}
              className="group relative text-left rounded-3xl border border-white/0 bg-[#111111] p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/70 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 80px rgba(255,255,255,0.18)' }} />
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="./assets/projects/internbi1.jpg"
                  alt="Data analysis workspace"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2 pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-widest text-white/60">Internship</p>
                  <p className="text-sm uppercase tracking-wide text-white/60">2025</p> 
                </div>
                <h3 className="mt-1 text-2xl font-semibold text-white">Bank Indonesia South Sulawesi</h3>
                <p className="mt-2 text-xs text-white/60">
                  Data Entry Automation and Forecasting support
                </p>
              </div>
            </button>

      {isInternBIOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 px-4 py-6 sm:flex sm:items-center sm:justify-center"
          onClick={() => setIsInternBIOpen(false)}
        >
          <div className="mx-auto flex h-full w-full max-w-3xl items-start sm:h-auto">
            <div
              className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-[#111111] p-5 text-white shadow-[0_30px_80px_rgba(255,255,255,0.12)] sm:p-6 max-h-[85vh] overflow-y-auto"
              onClick={(event) => event.stopPropagation()}
            >
            <button
              type="button"
              aria-label="Close Intern BI details"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 transition hover:border-white/60 hover:text-white"
              onClick={() => setIsInternBIOpen(false)}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6l12 12" />
                <path d="M18 6l-12 12" />
              </svg>
            </button>

            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-widest text-white/60">Internship</p>
                <h3 className="text-2xl font-semibold">Bank Indonesia Sulawesi Selatan</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-white/60">Internship Period</p>
                  <p className="text-base text-white">22 Apr 2025 - 1 Aug 2025</p>
                </div>
                <div>
                  <p className="text-sm text-white/60">Role</p>
                  <p className="text-base text-white">Data Analyst</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-white/60">Description</p>
                <p className="text-base text-white/80">
                  Built a time-series forecasting model to support pension fund planning decisions.
                </p>
              </div>

              <div>
                <p className="text-sm text-white/60">Task</p>
                <ul className="mt-2 space-y-1 text-base text-white/80 list-disc list-outside ml-5">
                  <li>Created Machine Learning based automation to accelerate monthly Data Entry of 5,000+ entries from 52 different spreadsheets with time efficiency up to 90% (from 5 hours to 30 minutes).</li>
                  <li>Participated in an internal project to develop a Farmer Planting Calendar dashboard. Performed Data Wrangling, SARIMA based Forecasting, and Data Visualization in Power BI to provide optimal planting period recommendations for farmers.</li>
                </ul>
              </div>

              <div>
                <p className="text-sm text-white/60">Documentation</p>
                <div className="mt-3 flex overflow-x-auto gap-3 pb-4 sm:pb-0 sm:grid sm:grid-cols-3 sm:overflow-x-visible">
                  <img
                    src="./assets/projects/internbi1.jpg"
                    alt="Forecasting documentation"
                    className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                  />
                  <img
                    src="./assets/projects/internbi2.jpg"
                    alt="Model evaluation"
                    className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                  />
                </div>
              </div>

            </div>
            </div>
          </div>
        </div>
      )}

      {/* Insert Here for New Experience */}

          </div>
        </div>
      </section>


      {/* Section Projects */}
      <section id="projects" className="w-full mt-10">
        <div className="mx-auto max-w-[1366px] px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <button
              type="button"
              aria-label="Open Food Security Details"
              onClick={() => setIsFoodSecurityOpen(true)}
              className="group relative text-left rounded-3xl border border-white/0 bg-[#111111] p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/70 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 80px rgba(255,255,255,0.18)' }} />
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="./assets/projects/foodsecurity1.png"
                  alt="Data analysis workspace"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2 pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-wide text-white/60">Streamlit</p>
                  <p className="text-xs tracking-wide text-white/60">2025</p> 
                </div>
                <h3 className="mt-1 text-xl font-semibold text-white">Food Security Forecasting System</h3>
                <p className="mt-2 text-xs text-white/60">
                  Food Security System for Sulampua's Region.
                </p>
              </div>
              {/* <span className="absolute bottom-16 right-4 flex h-8 w-8 items-center justify-center rounded-xl border border-white/50 bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <img
                  className="h-5 w-5"
                  color-black
                  src="https://streamlit.io/images/brand/streamlit-mark-color.svg"
                  alt="Streamlit Logo"
                />  
              </span> */}
            </button>

        {isFoodSecurityOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/70 px-4 py-6 sm:flex sm:items-center sm:justify-center"
            onClick={() => setIsFoodSecurityOpen(false)}
          >
            <div className="mx-auto flex h-full w-full max-w-3xl items-start sm:h-auto">
              <div
                className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-[#111111] p-5 text-white shadow-[0_30px_80px_rgba(255,255,255,0.12)] sm:p-6 max-h-[85vh] overflow-y-auto"
                onClick={(event) => event.stopPropagation()}
              >
              <button
                type="button"
                aria-label="Close Forecasting Model details"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 transition hover:border-white/60 hover:text-white"
                onClick={() => setIsFoodSecurityOpen(false)}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </svg>
              </button>

              <div className="space-y-6">
                <div>
                  {/* <p className="text-sm uppercase tracking-widest text-white/60">Internship</p> */}
                  <h3 className="text-2xl font-semibold">Food Security Forecasting System</h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-white/60">Project Date</p>
                    <p className="text-base text-white">Jul 2025 - Sep 2025</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Tools</p>
                    <p className="text-base text-white">Streamlit</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-white/60">Description</p>
                  <p className="text-base text-white/80">
                    Built a time-series forecasting model to support pension fund planning decisions.
                  </p>
                </div>

                <div>
                  <p className="text-sm text-white/60">Task</p>
                  <ul className="mt-2 space-y-1 text-base text-white/80 list-disc list-outside ml-5">
                    <li>Collaborated on building a Machine Learning based Food Security Prediction System using the Streamlit framework.</li>
                    <li>Performed Predictive Modeling on 5 variables from the National Food Agency’s Food Security Atlas, covering 127 points in the Sulampua region. Model achieved an R2 score of 0.801 and RMSE of 0.887.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-white/60">Documentation</p>
                  <div className="mt-3 flex overflow-x-auto gap-3 pb-4 sm:pb-0 sm:grid sm:grid-cols-3 sm:overflow-x-visible">
                    <img
                      src="./assets/projects/foodsecurity1.png"
                      alt="Forecasting documentation"
                      className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                    />
                    <img
                      src="./assets/projects/foodsecurity2.png"
                      alt="Model evaluation"
                      className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                    />
                    <img
                      src="./assets/projects/foodsecurity3.png"
                      alt="Dashboard screenshots"
                      className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                    />
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-sm text-white/60">Link</p>
                  <Link
                    href="https://foodsecurityforecasting.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white hover:text-black"
                  >
                    Open Project
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </Link>
                </div>
              </div>
              </div>
            </div>
            </div>
          )}

            <button
              type="button"
              aria-label="Open Pension Fund Details"
              onClick={() => setIsPensionFundOpen(true)}
              className="group relative text-left rounded-3xl border border-white/0 bg-[#111111] p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/70 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 80px rgba(255,255,255,0.18)' }} />
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="./assets/projects/pensionfund1.png"
                  alt="Data analysis workspace"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2 pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-wide text-white/60">Dashboard</p>
                  <p className="text-xs tracking-wide text-white/60">2025</p> 
                </div>
                <h3 className="mt-1 text-xl font-semibold text-white">Pension Fund Calculator</h3>
                <p className="mt-2 text-xs text-white/60">
                  Count pension fund premium costs.
                </p>
              </div>
              {/* <span className="absolute bottom-16 right-4 flex h-8 w-8 items-center justify-center rounded-xl border border-white/50 bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <img
                  className="h-5 w-5"
                  color-black
                  src="https://streamlit.io/images/brand/streamlit-mark-color.svg"
                  alt="Streamlit Logo"
                />  
              </span> */}
            </button>

        {isPensionFundOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/70 px-4 py-6 sm:flex sm:items-center sm:justify-center"
            onClick={() => setIsPensionFundOpen(false)}
          >
            <div className="mx-auto flex h-full w-full max-w-3xl items-start sm:h-auto">
              <div
                className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-[#111111] p-5 text-white shadow-[0_30px_80px_rgba(255,255,255,0.12)] sm:p-6 max-h-[85vh] overflow-y-auto"
                onClick={(event) => event.stopPropagation()}
              >
              <button
                type="button"
                aria-label="Close Pension Fund details"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 transition hover:border-white/60 hover:text-white"
                onClick={() => setIsPensionFundOpen(false)}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </svg>
              </button>

              <div className="space-y-6">
                <div>
                  {/* <p className="text-sm uppercase tracking-widest text-white/60">Dashboard</p> */}
                  <h3 className="text-2xl font-semibold">Pension Fund Calculator</h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-white/60">Project Date</p>
                    <p className="text-base text-white">Oct 2025 - Jan 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Tools</p>
                    <p className="text-base text-white">Streamlit</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-white/60">Description</p>
                  <p className="text-base text-white/80">
                    Built a time-series forecasting model to support pension fund planning decisions.
                  </p>
                </div>

                <div>
                  <p className="text-sm text-white/60">Task</p>
                  <ul className="mt-2 space-y-1 text-base text-white/80 list-disc list-outside ml-5">
                    <li>Built a Pension Fund Calculator using the Streamlit framework. Useful for calculating participant premiums, featuring simulation parameters adjustable to user conditions.</li>
                    <li>Implemented Entry Age Normal, Attained Age Normal, and Projected Unit Credit formulas into a digital platform for transparent and accessible calculations.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-white/60">Documentation</p>
                  <div className="mt-3 flex overflow-x-auto gap-3 pb-4 sm:pb-0 sm:grid sm:grid-cols-3 sm:overflow-x-visible">
                    <img
                      src="./assets/projects/pensionfund1.png"
                      alt="Forecasting documentation"
                      className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                    />
                    <img
                      src="./assets/projects/pensionfund2.png"
                      alt="Model evaluation"
                      className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                    />
                    <img
                      src="./assets/projects/pensionfund3.png"
                      alt="Dashboard screenshots"
                      className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-sm text-white/60">Link</p>
                  <Link
                    href="https://danapensiun.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white hover:text-black"
                  >
                    Open Project
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </Link>
                </div>
              </div>
              </div>
            </div>
            </div>
          )}

            <button
              type="button"
              aria-label="Open Smart Highland Details"
              onClick={() => setIsSmartHighlandOpen(true)}
              className="group relative text-left rounded-3xl border border-white/0 bg-[#111111] p-3 transition-all duration-300 hover:-translate-y-1.5 hover:border-white/70 hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 80px rgba(255,255,255,0.18)' }} />
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="./assets/projects/smarthighland1.png"
                  alt="Data analysis workspace"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-2 pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <p className="text-xs tracking-wide text-white/60">Google Colab, Looker Studio</p>
                  <p className="text-xs tracking-wide text-white/60">2024</p> 
                </div>
                <h3 className="mt-1 text-xl font-semibold text-white">Smart Highland Agriculture</h3>
                <p className="mt-2 text-xs text-white/60">
                  Best time for plant and crop forecaster.
                </p>
              </div>
              {/* <span className="absolute bottom-16 right-4 flex h-8 w-8 items-center justify-center rounded-xl border border-white/50 bg-white/10 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <img
                  className="h-5 w-5"
                  color-black
                  src="https://streamlit.io/images/brand/streamlit-mark-color.svg"
                  alt="Streamlit Logo"
                />  
              </span> */}
            </button>

        {isSmartHighlandOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/70 px-4 py-6 sm:flex sm:items-center sm:justify-center"
            onClick={() => setIsSmartHighlandOpen(false)}
          >
            <div className="mx-auto flex h-full w-full max-w-3xl items-start sm:h-auto">
              <div
                className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-[#111111] p-5 text-white shadow-[0_30px_80px_rgba(255,255,255,0.12)] sm:p-6 max-h-[85vh] overflow-y-auto"
                onClick={(event) => event.stopPropagation()}
              >
              <button
                type="button"
                aria-label="Close Pension Fund details"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white/80 transition hover:border-white/60 hover:text-white"
                onClick={() => setIsSmartHighlandOpen(false)}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 6l12 12" />
                  <path d="M18 6l-12 12" />
                </svg>
              </button>

              <div className="space-y-6">
                <div>
                  {/* <p className="text-sm uppercase tracking-widest text-white/60">Dashboard</p> */}
                  <h3 className="text-2xl font-semibold">Smart Highland Agriculture</h3>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-white/60">Project Date</p>
                    <p className="text-base text-white">Jan 2024 - Apr 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Role</p>
                    <p className="text-base text-white">Data Analyst</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-white/60">Description</p>
                  <p className="text-base text-white/80">
                    Built a time-series forecasting model to support pension fund planning decisions.
                  </p>
                </div>

                <div>
                  <p className="text-sm text-white/60">Task</p>
                  <ul className="mt-2 space-y-1 text-base text-white/80" list-disc list-ml-5>
                    <li>Collaborated on an Artificial Intelligence based Highland Agriculture Parameter dashboard and identified business opportunities through predictive analysis.</li>
                    <li>Managed Data Pipelines and performed Hyperparameter Tuning to optimize model performance across various environmental parameters.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm text-white/60">Documentation</p>
                  <div className="mt-3 flex overflow-x-auto gap-3 pb-4 sm:pb-0 sm:grid sm:grid-cols-3 sm:overflow-x-visible">
                    <img
                      src="./assets/projects/smarthighland1.png"
                      alt="Forecasting documentation"
                      className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                    />
                    {/* <img
                      src="./assets/projects/smarthighland2.png"
                      alt="Model evaluation"
                      className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                    />
                    <img
                      src="./assets/projects/smarthighland3.png"
                      alt="Dashboard screenshots"
                      className="h-40 w-64 flex-none rounded-2xl object-cover sm:w-full"
                    /> */}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-white/60">Link</p>
                  <Link
                    href="https://bit.ly/DashboardDigdaya"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white transition hover:border-white hover:bg-white hover:text-black"
                  >
                    Open Project
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </Link>
                </div>
              </div>
              </div>
            </div>
            </div>
          )}









          </div>
        </div>
      </section>



      {/* <GradualBlur
        target="parent"
        position="bottom"
        height="7rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential
        opacity={1}
      /> */}
    </div>
  );
}