"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type WheelEvent } from "react"
import { Award, ExternalLink, Calendar, Building, ChevronLeft, ChevronRight } from "lucide-react"

const certificates = [
  {
    title: "Oracle Cloud Generative AI Professional",
    issuer: "Oracle",
    date: "2024",
    description: "Professional certification in cloud-based generative AI technologies, covering LLMs, prompt engineering, and AI application development.",
    skills: ["Generative AI", "Cloud Computing", "LLMs"],
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=79B97D068DC97662BF96CF1A37252A01437F8E21B7D02FBF821073FD989A2E6E",
  },
  {
    title: "NPTEL Social Networks",
    issuer: "NPTEL - IIT",
    date: "2023",
    description: "Comprehensive course covering social network analysis, graph theory, network dynamics, and community detection algorithms.",
    skills: ["Graph Theory", "Network Analysis", "Data Mining"],
    verifyUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs65/Course/NPTEL25CS65S54750030304445977.pdf",
  },
  {
    title: "Java Application Development Training",
    issuer: "Professional Training Institute",
    date: "2023",
    description: "Hands-on training in building enterprise-level Java applications using modern frameworks and design patterns.",
    skills: ["Java", "Spring Boot", "Design Patterns"],
    verifyUrl: "https://drive.google.com/file/d/1DRP9esLNNHxCCr-y2Hsrj-jYPfZillyP/view",
  },
]

export function Certificates() {
  const ref = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const scrollByCards = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const container = scrollRef.current
    const amount = Math.min(container.clientWidth * 0.9, 520)
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    })
  }

  const handleWheelScroll = (e: WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault()
      scrollRef.current.scrollBy({ left: e.deltaY, behavior: "smooth" })
    }
  }

  return (
    <section id="certificates" className="section-shell py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-lg">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Certifications</h2>
            <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Professional certifications that validate my expertise in cutting-edge technologies.
          </p>
        </motion.div>

        {/* Certificates list */}
        <div className="relative">
          <div className="hidden md:flex absolute right-0 -top-16 items-center gap-2">
            <button
              onClick={() => scrollByCards("left")}
              className="p-2 rounded-lg border border-border bg-card/80 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="Scroll certificates left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollByCards("right")}
              className="p-2 rounded-lg border border-border bg-card/80 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="Scroll certificates right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div
            ref={scrollRef}
            onWheel={handleWheelScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-1 pb-3 scroll-smooth [scrollbar-width:thin] [scrollbar-color:var(--primary)_transparent]"
          >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="group min-w-[85%] md:min-w-[48%] lg:min-w-[46%] xl:min-w-[42%] p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all relative overflow-hidden snap-start"
            >
              {/* Left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-l-xl" />
              
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <div className="mt-2 grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5 min-w-0">
                          <Building className="w-4 h-4 shrink-0" />
                          <span className="truncate">{cert.issuer}</span>
                        </span>
                        <span className="flex items-center gap-1.5 sm:justify-self-end">
                          <Calendar className="w-4 h-4 shrink-0" />
                          {cert.date}
                        </span>
                      </div>
                    </div>
                    
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>
        
        {/* Count badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border text-sm text-muted-foreground">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">{certificates.length}+</span> certifications earned
          </span>
        </motion.div>
      </div>
    </section>
  )
}
