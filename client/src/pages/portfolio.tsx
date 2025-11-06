import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github, ChevronDown, Terminal, Code2, Cpu, Zap } from "lucide-react";
import { useSmoothScroll } from "@/components/smooth-scroll";
import Header from "@/components/Header";

export default function Portfolio() {
  useSmoothScroll();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TimelineSection />
      <Footer />
    </div>
  );
}

function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Architecting scalable systems that merge automation, intelligence, and design.";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 md:py-32" data-testid="section-hero">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <p className="text-sm md:text-base text-muted-foreground tracking-wider font-mono uppercase" data-testid="text-tagline">
                {'>'} SYSTEM_INIT...
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-mono tracking-tight animate-flicker" data-testid="text-title">
                <span className="text-primary">JAYAKUMAR M</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-mono tracking-wide" data-testid="text-subtitle">
                WEB ARCHITECT <span className="text-primary">•</span> QA INNOVATOR
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="space-y-4"
            >
              <div className="font-mono text-base md:text-lg leading-relaxed min-h-[120px]" data-testid="text-headline">
                <span className="text-foreground">{displayedText}</span>
                {showCursor && <span className="inline-block w-2 h-5 bg-primary ml-1 animate-blink"></span>}
              </div>

              <p className="text-sm md:text-base text-muted-foreground font-mono leading-relaxed" data-testid="text-description">
                Precision-crafted pipelines, resilient architectures, and humane interfaces. Engineered yet emotional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button 
                asChild
                variant="default"
                size="lg"
                className="font-mono group"
                data-testid="button-contact"
              >
                <a href="mailto:jmunuswa@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  CONTACT <span className="text-primary ml-1">↗</span>
                </a>
              </Button>

              <Button 
                asChild
                variant="outline"
                size="lg"
                className="font-mono border-primary/50 hover:border-primary"
                data-testid="button-about"
              >
                <a href="#about">
                  ABOUT ME <ChevronDown className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <Card className="relative border-2 border-primary/50 bg-card/50 backdrop-blur-sm overflow-hidden group hover-elevate" data-testid="card-profile">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="aspect-square relative mb-6">
                  <div className="absolute inset-0 border-2 border-primary/30 animate-pulse-orange"></div>
                  <div className="absolute top-2 left-2 w-4 h-4 bg-primary animate-pulse-orange"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 bg-primary animate-pulse-orange"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 bg-primary animate-pulse-orange"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary animate-pulse-orange"></div>

                  <div className="absolute inset-4 flex items-center justify-center bg-muted/30 backdrop-blur border border-primary/20">
                    <img 
                      src={`${import.meta.env.BASE_URL}portrait.png`}
                      alt="Jayakumar M - Web Architect & QA Innovator"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 justify-center" data-testid="container-skills">
                  {["Automation", "Architecture", "Quality • Reliability"].map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + i * 0.1 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="border-primary/50 bg-primary/10 text-primary font-mono px-4 py-1.5 backdrop-blur-sm"
                        data-testid={`badge-skill-${i}`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-primary animate-bounce" />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-32 px-4" data-testid="section-about">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 text-primary" data-testid="heading-about">
            # ABOUT_ME <span className="text-foreground">{'{}'}</span>
          </h2>
          <div className="h-1 w-32 bg-primary mb-12"></div>

          <p className="text-base md:text-lg text-foreground font-mono leading-relaxed mb-16 max-w-4xl" data-testid="text-about-intro">
            "I design scalable, testable, and observable systems where automation and intelligence create clarity. 
            My practice blends rigorous engineering with humane product thinking — fault tolerance, performance budgets, 
            and developer experience so teams move faster with greater confidence."
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Cpu,
                title: "FOCUS",
                items: [
                  "Distributed systems",
                  "Event-driven architectures",
                  "Contract testing",
                  "Observability",
                  "SRE"
                ]
              },
              {
                icon: Code2,
                title: "METHOD",
                items: [
                  "Constraints-first design",
                  "Shift-left testing",
                  "Trace-led debugging",
                  "Performance budgets",
                  "Developer experience"
                ]
              },
              {
                icon: Zap,
                title: "VALUES",
                items: [
                  "Clarity",
                  "Empathy",
                  "Reliability",
                  "Purposeful automation",
                  "Continuous learning"
                ]
              }
            ].map((category, i) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <Card 
                    className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover-elevate h-full group"
                    data-testid={`card-about-${i}`}
                  >
                    <CardContent className="p-6 md:p-8 space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                        <h3 className="text-xl md:text-2xl font-bold font-mono text-primary" data-testid={`heading-category-${i}`}>
                          {category.title}
                        </h3>
                      </div>
                      <ul className="space-y-2 font-mono text-sm md:text-base">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start gap-2" data-testid={`text-item-${i}-${idx}`}>
                            <span className="text-primary mt-1">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      name: "thecueRoom",
      description: "Next-gen creative platform merging AI cover art, EPK generation, and meme spotlighting for artists.",
      tech: ["Next.js", "Firebase", "Tailwind", "Drizzle ORM", "AI Integration"]
    },
    {
      name: "JobFinder Pro",
      description: "Precision-built job-matching engine featuring analytics-driven automation and UX clarity.",
      tech: ["React", "Node.js", "PostgreSQL", "Selenium QA Framework"]
    },
    {
      name: "C/No Voidline",
      description: "GNSS signal visualization tool for real-time C/No analytics, fault simulation, and noise reduction.",
      tech: ["Python", "Android NDK", "Serial Data Parsing"]
    },
    {
      name: "GNSS Android Test App",
      description: "Embedded Android testing suite for GPS/GNSS validation with live metrics and cloud integration.",
      tech: ["Kotlin", "Python", "ADB Automation"]
    },
    {
      name: "Automation Framework Suite",
      description: "Enterprise-grade Python automation and analytics frameworks for GNSS device validation.",
      tech: ["Python", "Selenium", "Analytics", "Cloud Integration"]
    }
  ];

  return (
    <section id="projects" className="relative py-20 md:py-32 px-4 bg-card/20" data-testid="section-projects">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <p className="text-sm font-mono text-muted-foreground mb-2" data-testid="text-command">
              {'>'} run_command --execute
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-primary" data-testid="heading-projects">
              /PROJECTS_RUN
            </h2>
            <div className="h-1 w-32 bg-primary mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card 
                  className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover-elevate h-full group relative overflow-hidden"
                  data-testid={`card-project-${i}`}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary/20">
                    <motion.div 
                      className="h-full bg-primary"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                    ></motion.div>
                  </div>

                  <CardContent className="p-6 md:p-8 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground mb-1" data-testid={`text-loading-${i}`}>
                          {'>'} LOADING_PROJECT_{i + 1}...
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold font-mono text-primary group-hover:animate-flicker" data-testid={`heading-project-${i}`}>
                          {project.name}
                        </h3>
                      </div>
                      <Terminal className="w-5 h-5 text-primary flex-shrink-0" />
                    </div>

                    <p className="text-sm md:text-base font-mono text-muted-foreground leading-relaxed" data-testid={`text-project-desc-${i}`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge 
                          key={idx}
                          variant="outline"
                          className="border-primary/30 text-xs font-mono bg-primary/5"
                          data-testid={`badge-tech-${i}-${idx}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const timeline = [
    {
      period: "2019—2025",
      title: "Senior Software Engineer in Test",
      company: "Capgemini / Google GNSS QA",
      description: "Built Python automation and analytics frameworks for GNSS device validation."
    },
    {
      period: "2017—2019",
      title: "Test Engineer",
      company: "L&T Tech / Intel — Medical Devices",
      description: "Developed comprehensive testing strategies for medical device firmware and embedded systems."
    },
    {
      period: "2016—2017",
      title: "Firmware Test Engineer",
      company: "L&T / Technicolor",
      description: "Led firmware validation and quality assurance for consumer electronics platforms."
    },
    {
      period: "2012—2016",
      title: "LTE/GNSS Test Engineer",
      company: "Huawei, Intel, Motorola",
      description: "Specialized in LTE protocol testing and GNSS positioning system validation."
    },
    {
      period: "2009—2012",
      title: "Multimedia Firmware Engineer",
      company: "LG Soft India",
      description: "Developed and tested multimedia firmware for mobile devices and embedded systems."
    }
  ];

  return (
    <section id="timeline" className="relative py-20 md:py-32 px-4" data-testid="section-timeline">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-12">
            <p className="text-sm font-mono text-muted-foreground mb-2" data-testid="text-journey-command">
              {'>'} cat journey.log
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-mono text-primary" data-testid="heading-timeline">
              /JOURNEY_LOG
            </h2>
            <div className="h-1 w-32 bg-primary mt-4"></div>
          </div>

          <div className="space-y-6 md:space-y-8 relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
                data-testid={`timeline-entry-${i}`}
              >
                <div className="absolute left-2 md:left-5 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background animate-pulse-orange"></div>

                <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover-elevate">
                  <CardContent className="p-6 md:p-8 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <p className="text-sm font-mono text-primary font-bold" data-testid={`text-period-${i}`}>
                        {'>'} {entry.period}
                      </p>
                      <Badge variant="outline" className="border-primary/50 text-xs font-mono w-fit" data-testid={`badge-status-${i}`}>
                        EXECUTED
                      </Badge>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold font-mono text-foreground" data-testid={`heading-position-${i}`}>
                      {entry.title}
                    </h3>

                    <p className="text-sm md:text-base font-mono text-muted-foreground" data-testid={`text-company-${i}`}>
                      {entry.company}
                    </p>

                    <p className="text-sm md:text-base font-mono text-muted-foreground leading-relaxed pt-2" data-testid={`text-description-${i}`}>
                      {'>> '}{entry.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const [statusPulse, setStatusPulse] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusPulse(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="footer" className="relative py-16 px-4 border-t-2 border-primary/30 bg-card/20" data-testid="footer-contact">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-2" data-testid="text-footer-command">
              {'>'} access /CONTACT_ROOT
            </p>
            <h2 className="text-2xl md:text-4xl font-bold font-mono text-primary mb-2" data-testid="heading-footer-name">
              JAYAKUMAR M
            </h2>
            <p className="text-sm md:text-base font-mono text-muted-foreground" data-testid="text-footer-roles">
              Web Developer <span className="text-primary">•</span> Systems Architect <span className="text-primary">•</span> Test Architect
            </p>

            <div className="flex items-center justify-center gap-2 mt-4">
              <p className="text-sm font-mono text-muted-foreground" data-testid="text-footer-status">
                Status: AVAILABLE <span className="text-primary">•</span> ADVISORY
              </p>
              <div 
                className={`w-3 h-3 rounded-full bg-primary transition-opacity duration-300 ${statusPulse ? 'opacity-100' : 'opacity-40'}`}
                data-testid="indicator-status-pulse"
              ></div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a 
              href="mailto:jmunuswa@gmail.com" 
              className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4" />
              <span className="group-hover:underline">jmunuswa@gmail.com</span>
            </a>

            <a 
              href="tel:+919818967280" 
              className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span className="group-hover:underline">+91-9818967280</span>
            </a>

            <a 
              href="https://linkedin.com/in/jmunuswa" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
              data-testid="link-linkedin"
            >
              <Linkedin className="w-4 h-4" />
              <span className="group-hover:underline">linkedin.com/in/jmunuswa</span>
            </a>

            <a 
              href="https://github.com/dejayillegal" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors group"
              data-testid="link-github"
            >
              <Github className="w-4 h-4" />
              <span className="group-hover:underline">github.com/dejayillegal</span>
            </a>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

          <p className="text-xs md:text-sm font-mono text-muted-foreground" data-testid="text-copyright">
            © 2025 Jayakumar M — Built with automation, art, and intent.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
