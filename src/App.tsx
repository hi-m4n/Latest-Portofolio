/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  ArrowDown, 
  ChevronRight,
  Code,
  Briefcase,
  User,
  Zap
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { PROJECTS, SKILLS, CONTACT_LINKS } from "./constants";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#" 
          className="text-2xl font-display font-bold tracking-tighter"
          whileHover={{ scale: 1.05 }}
        >
          Tanjim.
        </motion.a>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium opacity-60 hover:opacity-100 transition-opacity uppercase tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-atmosphere">
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block text-accent font-mono text-xs uppercase tracking-[0.3em] mb-4"
        >
          Exploring • Building • Evolving
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-7xl md:text-9xl font-display font-bold leading-none mb-6 tracking-tighter"
        >
          Hello, I'm <br />
          <span className="text-glow">Tanjim</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-xl mx-auto text-lg opacity-60 font-light leading-relaxed mb-12"
        >
          Experienced in Client Management, Digital Marketing, and Web Development. 
          Focused on building websites people love to use.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-bg transition-all duration-300 group"
          >
            Explore My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <ArrowDown className="w-6 h-6" />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square rounded-3xl overflow-hidden glass group"
        >
          <img
            src="/profile.jpg"
            alt="Tanjim"
            className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-2xl font-display font-bold">Kazi Tanjim</p>
            <p className="text-sm opacity-60 uppercase tracking-widest">Digital Strategist & Builder</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent font-mono text-xs uppercase tracking-widest">About Me</span>
          </div>
          <h2 className="text-5xl font-display font-bold mb-8">Building dreams day by day.</h2>
          <div className="space-y-6 text-lg opacity-70 font-light leading-relaxed">
            <p>
              I'm a calm and quick learner with a diverse background in Client Management, Digital Marketing, and HTML/CSS. 
              My journey is defined by a passion for continuous improvement and a drive to create meaningful digital experiences.
            </p>
            <p>
              Whether it's managing documentation for international trade or building a community-driven online store, 
              I bring a focused and strategic approach to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <p className="text-3xl font-display font-bold text-accent">500+</p>
              <p className="text-xs opacity-50 uppercase tracking-widest mt-1">Clients Worldwide</p>
            </div>
            <div>
              <p className="text-3xl font-display font-bold text-accent">3+</p>
              <p className="text-xs opacity-50 uppercase tracking-widest mt-1">Core Projects</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-accent font-mono text-xs uppercase tracking-[0.3em]">Expertise</span>
          <h2 className="text-5xl font-display font-bold mt-4">My Skills</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                {skill.category === "Development" ? <Code className="w-5 h-5" /> : 
                 skill.category === "Management" ? <Briefcase className="w-5 h-5" /> :
                 skill.category === "Marketing" ? <Zap className="w-5 h-5" /> :
                 <User className="w-5 h-5" />}
              </div>
              <p className="font-medium mb-1">{skill.name}</p>
              <p className="text-[10px] opacity-40 uppercase tracking-widest">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <span className="text-accent font-mono text-xs uppercase tracking-[0.3em]">Portfolio</span>
            <h2 className="text-5xl font-display font-bold mt-4">Selected Projects</h2>
          </div>
          <p className="hidden md:block max-w-xs text-sm opacity-50 mb-2">
            A collection of work spanning documentation, digital marketing, and personal insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden glass"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <img
                  src={`https://picsum.photos/seed/${project.title}/600/800`}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] px-2 py-1 rounded-full border border-white/10 opacity-60">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm opacity-60 mb-8 line-clamp-3">
                  {project.description}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-accent transition-colors"
                  >
                    View Project <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-atmosphere relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <span className="text-accent font-mono text-xs uppercase tracking-[0.3em]">Get in Touch</span>
            <h2 className="text-6xl font-display font-bold mt-4 mb-8">Let's build <br /> something great.</h2>
            <p className="text-lg opacity-60 font-light mb-12 max-w-md">
              I'm always open to new opportunities, collaborations, or just a friendly chat about design and technology.
            </p>
            
            <div className="space-y-6">
              {CONTACT_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-bg transition-all duration-300">
                    {link.icon === "Mail" ? <Mail className="w-5 h-5" /> :
                     link.icon === "Linkedin" ? <Linkedin className="w-5 h-5" /> :
                     <Instagram className="w-5 h-5" />}
                  </div>
                  <div>
                    <p className="text-xs opacity-40 uppercase tracking-widest">{link.label}</p>
                    <p className="text-lg font-display font-bold">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button className="w-full py-4 rounded-xl bg-accent text-white font-bold uppercase tracking-widest hover:bg-accent/80 transition-all duration-300 shadow-lg shadow-accent/20">
                Send Message
              </button>
            </form>
            <form action="https://api.web3forms.com/submit" method="POST">
               <input type="hidden" name="access_key" value="f7a36937-6acb-4321-a317-3b4230d1f3e2">
                <input type="text" name="name" required>
               <input type="email" name="email" required>
               <textarea name="message" required></textarea>
               <button type="submit">Submit Form</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
        <p className="text-xs opacity-40 uppercase tracking-widest">
          © 2026 Kazi Tanjim. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-xs opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest">Privacy Policy</a>
          <a href="#" className="text-xs opacity-40 hover:opacity-100 transition-opacity uppercase tracking-widest">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

