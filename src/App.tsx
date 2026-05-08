
import React, { useState } from "react";
import { THEMES } from "./constants";
import {
  Navbar,
  Hero,
  About,
  Skills,
  Certifications,
  Projects,
  Contact,
  Footer,
} from "./components/PortfolioSections";
import { ThemeVibe } from "./types";

const App = () => {
  const [vibe, setVibe] = useState<ThemeVibe>("studio-grey");
  const config = THEMES[vibe];

  return (
    <main className={`min-h-screen ${config.bg} ${config.text}`}>
      <Navbar vibe={vibe} setVibe={setVibe} />

      <Hero theme={vibe} />
      <About theme={vibe} />
      <Skills theme={vibe} />
      <Certifications theme={vibe} />
      <Projects theme={vibe} />
      <Contact theme={vibe} />
      <Footer vibe={vibe} />
    </main>
  );
};

export default App;
