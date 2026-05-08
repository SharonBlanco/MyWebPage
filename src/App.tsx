import React, { useState } from "react";
import { ThemeVibe } from "./types";
import { THEMES } from "./constants";
import { 
  Navbar, Hero, About, 
  Skills, Certifications, 
  Projects, Contact, Footer 
} from "./components/PortfolioSections";

const App = () => {
  const [vibe, setVibe] = useState<ThemeVibe>("studio-grey");

  return (
    <div className={`min-h-screen font-sans selection:bg-gray-900 selection:text-white ${THEMES[vibe].bg} transition-colors duration-500`}>
      <Navbar vibe={vibe} setVibe={setVibe} />
      
      <main>
        <Hero theme={vibe} />
        <About theme={vibe} />
        <Skills theme={vibe} />
        <Certifications theme={vibe} />
        <Projects theme={vibe} />
        <Contact theme={vibe} />
      </main>

      <Footer vibe={vibe} />
    </div>
  );
};

export default App;
