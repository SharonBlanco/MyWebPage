import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { THEMES } from "../constants";
import { ThemeVibe, Project } from "../types";

export const GridPattern = ({ theme }: { theme: ThemeVibe }) => (
  <div className="absolute inset-0 z-0 opacity-[0.25] pointer-events-none">
    <div className={`absolute inset-0 [background-image:linear-gradient(to_right,#CBD5E1_1px,transparent_1px),linear-gradient(to_bottom,#CBD5E1_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]`} />
  </div>
);

export const DecorativeShapes = ({ theme }: { theme: ThemeVibe }) => {
  const config = THEMES[theme];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#5DA9A6] opacity-[0.03] blur-[100px]`}
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          x: [0, -20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute bottom-[10%] right-[-5%] w-[35vw] h-[35vw] rounded-full bg-[#2F7F7A] opacity-[0.04] blur-[100px]`}
      />
      
      {/* Decorative vertical lines */}
      <div className="absolute h-full w-px bg-slate-200 left-[15%] opacity-30 hidden lg:block" />
      <div className="absolute h-full w-px bg-slate-200 right-[15%] opacity-30 hidden lg:block" />

      {/* Small floating accents */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.05, 0.15, 0.05],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 40 - 20, 0],
              y: [0, Math.random() * 40 - 20, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 7, 
              repeat: Infinity,
              delay: i * 1 
            }}
            className={`absolute w-1.5 h-1.5 rounded-full bg-[#5DA9A6] opacity-10`}
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const SectionHeading = ({ theme, subtitle, title }: { theme: ThemeVibe; subtitle: string; title: string }) => {
  const config = THEMES[theme];
  return (
    <div className="mb-24 relative z-10 flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className={`text-[10px] font-mono ${config.subtext} uppercase tracking-[0.4em] mb-4 font-black block`}>
          {subtitle}
        </span>
        <h3 className={`text-4xl md:text-5xl font-black ${config.text} tracking-tight relative pb-6`}>
          {title}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-[#5DA9A6] rounded-full" />
        </h3>
      </motion.div>
    </div>
  );
};

export const CodeDecorative = () => (
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full font-mono text-[8px] opacity-[0.04] select-none pointer-events-none hidden lg:block overflow-hidden leading-tight">
    {`
    import { DataEngine } from "core";
    const processData = (stream) => {
      const refined = stream.filter(item => item.valid)
        .map(item => transform(item))
        .reduce((acc, curr) => acc.sync(curr));
      return refined.deploy();
    };
    `.repeat(15)}
  </div>
);

export const ProjectCard: React.FC<{ project: Project; theme: ThemeVibe }> = ({ project, theme }) => {
  const config = THEMES[theme];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`${config.card} border-2 border-slate-100 rounded-[40px] p-10 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(93,169,166,0.1)] hover:-translate-y-2 transition-all duration-700 group relative overflow-hidden shadow-sm`}
    >
      <div className="flex-grow relative z-10">
        <div className="flex justify-between items-start mb-8">
          <div className="flex gap-2 flex-wrap text-[#5DA9A6]">
            {project.techs.map((t) => (
              <span key={t} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-wider group-hover:bg-white transition-colors">
                {t}
              </span>
            ))}
          </div>
          <ExternalLink size={18} className="text-slate-300 group-hover:text-[#5DA9A6] transition-colors" />
        </div>
        <h4 className={`text-2xl font-bold ${config.text} mb-4 tracking-tight leading-tight group-hover:text-black transition-colors`}>{project.title}</h4>
        <p className={`${config.subtext} text-sm font-light leading-relaxed mb-10 group-hover:text-gray-900 transition-colors`}>{project.desc}</p>
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex items-center justify-center gap-3 w-full py-5 rounded-[20px] bg-[#1F2937] text-white transition-all text-xs font-black uppercase tracking-[0.15em] shadow-lg shadow-black/10 hover:bg-[#2F7F7A] hover:shadow-[#5DA9A6]/20 hover:-translate-y-0.5"
      >
        View on GitHub
      </a>
      <div className={`absolute top-0 right-0 w-32 h-32 bg-[#5DA9A6] opacity-0 group-hover:opacity-[0.07] rounded-full -mr-16 -mt-16 transition-all duration-700`} />
    </motion.div>
  );
};
