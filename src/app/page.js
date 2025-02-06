"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroHome from "@/components/HeroHome";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HeroHome />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <HeroHome />;
    }
  };

  return (
    <div className="app-home">
      <div className="main-container">
        <Sidebar setActiveSection={setActiveSection} />
      </div>
      <div className="main-content">
        <div className="content-wrapper">{renderSection()}</div>
      </div>
    </div>
  );
}
