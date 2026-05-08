import React from "react";
import { motion } from "motion/react";
import { 
  ChevronRight, Database, Terminal, 
  Mail, MapPin, Linkedin, Github 
} from "lucide-react";
import { THEMES, PROJECTS, CERTIFICATIONS, SKILL_GROUPS } from "../constants";
import { ThemeVibe } from "../types";
import { GridPattern, ProjectCard, DecorativeShapes, CodeDecorative, SectionHeading } from "./UIElements";

export const Navbar = ({ vibe, setVibe }: { vibe: ThemeVibe; setVibe: (v: ThemeVibe) => void }) => {
  const config = THEMES[vibe];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 bg-white/70 backdrop-blur-2xl border-b border-[#CBD5E1]/30">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
        <div className={`w-10 h-10 rounded-xl ${config.primary} flex items-center justify-center text-white font-black shadow-lg transition-colors`}>SB</div>
        <span className={`font-black tracking-tighter text-xl ${config.text}`}>SHARON<span className="opacity-20">.</span>BLANCO</span>
      </motion.div>
      <div className="hidden md:flex gap-10">
        {["Home", "About", "Skills", "Certifications", "Projects", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className={`text-[10px] font-black uppercase tracking-[0.2em] ${config.subtext} hover:text-[#5DA9A6] transition-colors`}>
            {item}
          </a>
        ))}
      </div>
      <div className="flex gap-2 bg-slate-100/50 p-1 rounded-xl border border-slate-200/50">
        {(Object.keys(THEMES) as ThemeVibe[]).map((v) => (
          <button key={v} onClick={() => setVibe(v)} className={`w-3.5 h-3.5 rounded-full transition-all ${vibe === v ? "scale-110 ring-2 ring-offset-2 ring-[#5DA9A6]" : "opacity-30"} ${v === "studio-grey" ? "bg-slate-400" : v === "soft-slate" ? "bg-[#5DA9A6]" : "bg-[#2F7F7A]"}`} />
        ))}
      </div>
    </nav>
  );
};

export const Hero = ({ theme }: { theme: ThemeVibe }) => {
  const config = THEMES[theme];
  return (
    <section id="home" className={`min-h-screen flex flex-col justify-center px-8 relative overflow-hidden bg-[#F8FAFA]`}>
      <GridPattern theme={theme} />
      <DecorativeShapes theme={theme} />
      <CodeDecorative />
      <div className="max-w-7xl mx-auto w-full pt-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-8">
            <div className={`h-[1px] w-12 bg-[#5DA9A6]`} />
            <span className={`${config.subtext} font-mono text-[10px] uppercase tracking-[0.3em] font-black`}>Computer Science & Data Analysis</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-black ${config.text} mb-8 tracking-tight leading-[0.95]`}>
            Exploring <span className="text-[#5DA9A6]">Data</span>, <br />
            Coding <span className="text-slate-300">Solutions.</span>
          </h1>
          <p className={`text-xl md:text-2xl ${config.text} mb-6 font-medium max-w-2xl italic opacity-70`}>Computer Science student focusing on Programming and Data Science.</p>
          <div className="flex flex-wrap gap-5 mt-12">
            <a href="#projects" className="bg-[#1F2937] text-white px-10 py-5 font-black rounded-2xl transition-all flex items-center gap-4 group shadow-xl shadow-black/10 hover:bg-[#2F7F7A] hover:-translate-y-1 text-xs uppercase tracking-widest">
              View projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-all" />
            </a>
            <a href="#contact" className={`px-10 py-5 border-2 border-slate-200 bg-white hover:bg-slate-50 ${config.text} font-black rounded-2xl transition-all shadow-sm text-xs uppercase tracking-widest`}>Contact Me</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative aspect-square max-w-md mx-auto lg:ml-auto">
          <div className="absolute -top-10 -right-10 w-full h-full border-2 border-[#5DA9A6]/20 rounded-[50px] -z-10 bg-[#5DA9A6]/5 blur-sm" />
          <div className="w-full h-full rounded-[40px] overflow-hidden transition-all duration-700 shadow-2xl border-8 border-white bg-slate-100">
            <img src="images/picture.jpg" alt="Sharon Blanco" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white flex items-center gap-5 translate-z-10">
            <div className={`w-12 h-12 rounded-2xl bg-[#E6F0EF] text-[#5DA9A6] flex items-center justify-center`}><Database size={18} /></div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Focus</p>
              <p className="text-xs font-black text-slate-900 leading-none">Data Analytics</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[8px] font-black uppercase tracking-[0.5em] text-slate-500">Explore</span>
        <div className="w-[2px] h-16 bg-gradient-to-b from-[#5DA9A6] to-transparent rounded-full" />
      </div>
    </section>
  );
};

export const About = ({ theme }: { theme: ThemeVibe }) => {
  const config = THEMES[theme];
  return (
    <section id="about" className={`py-40 px-8 bg-white transition-colors duration-500 relative overflow-hidden select-none`}>
      <GridPattern theme={theme} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative hidden lg:block">
            <div className="absolute -top-16 -left-16 w-64 h-64 border-2 border-[#5DA9A6]/10 rounded-full opacity-40 animate-pulse" />
            <div className="w-full aspect-square bg-[#F8FAFA] rounded-[60px] flex items-center justify-center relative overflow-hidden group border-[12px] border-white shadow-2xl">
               <div className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity">
                 <img src="/MyWebPage/images/picture.jpg" alt="Sharon Blanco Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
               </div>
               <Terminal size={140} className="text-[#5DA9A6] relative z-10 opacity-10 group-hover:opacity-20 transition-all duration-500" />
            </div>
            <div className={`absolute -bottom-8 -right-8 p-12 bg-[#1F2937] text-white rounded-[40px] shadow-2xl border-4 border-white`}>
              <h4 className="text-2xl font-black mb-1 tracking-tight">Sharon Blanco</h4>
              <p className="text-[10px] font-mono tracking-[0.3em] text-[#5DA9A6] uppercase font-black">CS Student • Data Sci</p>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className={`text-[10px] font-mono text-[#5DA9A6] uppercase tracking-[0.4em] mb-8 font-black flex items-center gap-4`}>
              <div className="h-[2px] w-12 bg-[#5DA9A6]" /> About Me
            </h2>
            <h3 className={`text-4xl md:text-5xl font-black ${config.text} mb-12 tracking-tight leading-tight`}>Dedicated to bridging the gap between raw data and actionable logic.</h3>
            <div className={`space-y-8 ${config.subtext} text-lg leading-relaxed font-light`}>
              <p>I am a Computer Science student with a deep fascination for how information is structured and analyzed. My approach combines technical rigor with a continuous learning mindset.</p>
              <p>Experienced in **Python, R, Go, and Java**, I focus on building efficient solutions that organize complex problems into meaningful outcomes.</p>
              <p>My goal is to continue growing in the field of Data Science, applying statistical methods and modern programming paradigms to solve complex problems.</p>
            </div>
            <div className={`mt-16 grid grid-cols-2 gap-10 border-t border-slate-100 pt-16`}>
               <div className="group">
                  <p className={`text-xl font-bold ${config.text} mb-2 group-hover:text-[#5DA9A6] transition-colors`}>Python, R, Go, SQL</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Tech Stack</p>
               </div>
               <div className="group">
                  <p className={`text-xl font-bold ${config.text} mb-2 group-hover:text-[#5DA9A6] transition-colors`}>Applied Statistics</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Specialization</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Skills = ({ theme }: { theme: ThemeVibe }) => {
  const config = THEMES[theme];
  return (
    <section id="skills" className={`py-40 px-8 bg-[#F1F5F9]/50 relative border-y border-slate-200 transition-colors duration-500 overflow-hidden`}>
      <DecorativeShapes theme={theme} />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading theme={theme} subtitle="Personal Toolkit" title="Skills & Technology" />
        <div className="grid md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className={`${config.card} p-12 rounded-[50px] border-2 border-white/50 hover:border-[#5DA9A6]/30 transition-all group relative overflow-hidden backdrop-blur-xl shadow-xl shadow-slate-200/50`}>
              <h4 className={`text-xl font-black ${config.text} mb-12 flex items-center gap-4`}><div className={`w-3.5 h-3.5 rounded-full bg-[#5DA9A6] shadow-lg shadow-[#5DA9A6]/20`} />{group.title}</h4>
              <div className="flex flex-col gap-6">
                {group.skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between group/item">
                    <span className={`text-slate-500 group-hover/item:text-slate-900 text-sm font-black transition-colors`}>{skill}</span>
                    <div className="h-px flex-grow mx-8 bg-slate-100 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-[#5DA9A6] origin-left scale-x-0 group-hover/item:scale-x-100 transition-transform duration-700`} />
                    </div>
                  </div>
                ))}
              </div>
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-[#5DA9A6] opacity-0 group-hover:opacity-[0.05] rounded-full blur-3xl transition-all duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Certifications = ({ theme }: { theme: ThemeVibe }) => {
  const config = THEMES[theme];
  return (
    <section id="certifications" className={`py-40 px-8 bg-white transition-colors duration-500 relative`}>
      <div className="max-w-7xl mx-auto">
        <SectionHeading theme={theme} subtitle="Recognitions" title="Certifications" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="bg-[#F8FAFA] border-2 border-slate-100 rounded-[40px] p-10 flex flex-col h-full shadow-sm hover:shadow-2xl hover:border-[#5DA9A6]/20 transition-all duration-500 group">
              <div className="flex-grow">
                <div className={`inline-block px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-8 bg-[#E6F0EF] text-[#2F7F7A]`}>Verified Achievement</div>
                <h4 className={`text-2xl font-black ${config.text} mb-3 tracking-tight`}>{cert.name}</h4>
                <p className="text-[#5DA9A6] font-black text-xs mb-1 uppercase tracking-wider">{cert.institution}</p>
                <p className="text-slate-400 text-[10px] font-mono mb-8 uppercase tracking-[0.2em]">{cert.date}</p>
                <p className={`text-slate-500 text-sm font-light leading-relaxed mb-12`}>{cert.description}</p>
              </div>
              <a href={cert.link} className="flex items-center justify-center gap-3 w-full py-5 rounded-[20px] bg-white text-slate-900 border border-slate-200 hover:bg-[#1F2937] hover:text-white hover:border-transparent transition-all text-xs font-black uppercase tracking-[0.2em] shadow-sm">View Credential</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Projects = ({ theme }: { theme: ThemeVibe }) => {
  const config = THEMES[theme];
  return (
    <section id="projects" className={`py-40 px-8 bg-[#F8FAFA] transition-colors duration-500 relative overflow-hidden`}>
      <GridPattern theme={theme} />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading theme={theme} subtitle="Selected Works" title="Projects & Research" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = ({ theme }: { theme: ThemeVibe }) => {
  const config = THEMES[theme];
  return (
    <section id="contact" className={`py-40 px-8 relative overflow-hidden bg-white`}>
      <DecorativeShapes theme={theme} />
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <SectionHeading theme={theme} subtitle="Connect" title="Start a Conversation" />
        <p className={`text-slate-500 mb-20 text-xl max-w-2xl mx-auto font-light leading-relaxed italic`}>Always open to discussing internships, specialized projects or technology-related consultations .</p>
        <div className="grid sm:grid-cols-2 gap-10">
           <a href="mailto:sharoniris889@gmail.com" className="bg-[#F8FAFA] border-4 border-white p-10 rounded-[40px] flex items-center gap-8 group hover:shadow-2xl hover:bg-white transition-all transform hover:-translate-y-2">
             <div className="w-20 h-20 rounded-3xl bg-[#E6F0EF] flex items-center justify-center text-[#2F7F7A] group-hover:bg-[#2F7F7A] group-hover:text-white transition-all shadow-inner"><Mail size={32} /></div>
             <div className="text-left"><p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Direct Email</p><p className="text-lg font-black text-slate-900 group-hover:text-[#5DA9A6] transition-colors">sharoniris889@gmail.com</p></div>
           </a>
           <div className="bg-[#F8FAFA] border-4 border-white p-10 rounded-[40px] flex items-center gap-8 group hover:shadow-2xl hover:bg-white transition-all transform hover:-translate-y-2">
             <div className="w-20 h-20 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-900 shadow-inner group-hover:bg-slate-900 group-hover:text-white transition-all"><MapPin size={32} /></div>
             <div className="text-left"><p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">Based In</p><p className="text-lg font-black text-slate-900">Zarcero, Costa Rica</p></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = ({ vibe }: { vibe: ThemeVibe }) => (
  <footer className="py-24 px-8 bg-white border-t border-slate-100 translate-z-0 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
        <div className="flex items-center gap-8">
          <div className="w-16 h-16 rounded-[22px] bg-[#1F2937] flex items-center justify-center text-white text-2xl font-black shadow-2xl">SB</div>
          <div className="text-center md:text-left">
             <span className={`font-black tracking-tighter text-3xl text-slate-900`}>SHARON<span className="text-[#5DA9A6]">.</span>BLANCO</span>
             <p className="text-slate-400 text-[10px] font-mono tracking-[0.4em] uppercase font-black mt-2">Connecting Data to Logic</p>
          </div>
        </div>
        <div className="flex gap-8">
          <a href="linkedin.com/in/sharon-blanco-04464733b" className="w-14 h-14 rounded-[18px] border-2 border-slate-100 flex items-center justify-center hover:bg-[#5DA9A6] hover:text-white hover:border-transparent transition-all shadow-sm"><Linkedin size={22} /></a>
          <a href="https://github.com/SharonBlanco" className="w-14 h-14 rounded-[18px] border-2 border-slate-100 flex items-center justify-center hover:bg-[#1F2937] hover:text-white hover:border-transparent transition-all shadow-sm"><Github size={22} /></a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-50 gap-8">
         <p className="text-slate-300 text-[9px] font-black uppercase tracking-[0.4em]">© 2026 Sharon Blanco. Architectural Portfolio.</p>
         <div className="flex gap-12">
           <a href="https://github.com/SharonBlanco" className="text-slate-400 hover:text-[#5DA9A6] text-[10px] transition-colors uppercase font-black tracking-[0.3em]">Codebase</a>
           <a href="linkedin.com/in/sharon-blanco-04464733b" className="text-slate-400 hover:text-[#5DA9A6] text-[10px] transition-colors uppercase font-black tracking-[0.3em]">Network</a>
         </div>
      </div>
    </div>
  </footer>
);
