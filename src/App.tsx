import React, { useState } from "react";
import { THEMES } from "./constants";
import { Navbar, Hero, About, Skills, Certifications, Projects, Contact, Footer } from "./components/PortfolioSections";

const App = () => {
  const [vibe, setVibe] = useState("studio-grey");
  const config = THEMES[vibe];

  return (
    <main className={`min-h-screen ${config.bg} ${config.text}`}>
      <Navbar config={config} vibe={vibe} setVibe={setVibe} />
      <Hero config={config} />
      <About config={config} />
      <Skills config={config} />
      <Certifications config={config} />
      <Projects config={config} />
      <Contact config={config} />
      <Footer config={config} />
    </main>
  );
};

export default App;
