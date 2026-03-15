"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder, FolderGit2, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Real-Time Air Quality Index Dashboard",
    description: "An interactive Power BI dashboard that visualizes real-time air quality data across multiple regions, enabling users to monitor pollution levels and track environmental trends.",
    tech: ["Power BI", "DAX", "Data Modeling", "API Integration"],
    github: "https://github.com/samad-00/Real-Time-AQI-PowerBI-Dashboard",
  },
  {
    title: "COVID-19 Data Analysis Dashboard",
    description: "A comprehensive data analysis project using Python to visualize COVID-19 trends, including case distributions, vaccination rates, and predictive modeling.",
    tech: ["Python", "Plotly", "Pandas", "Scikit-learn"],
    github: "https://github.com/samad-00/Python_Project",
  },
  {
    title: "Agricultural Crop Yield Dashboard",
    description: "An Excel-based dashboard for analyzing agricultural crop yields, helping farmers and stakeholders make data-driven decisions about crop production.",
    tech: ["Excel", "Power Query", "Pivot Tables", "Slicers"],
    github: "https://github.com/samad-00/Excel_Project",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="section-shell py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-lg">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
            <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
          </div>
          <p className="text-muted-foreground max-w-2xl">
            A selection of projects I&apos;ve worked on, focusing on data visualization and analytics.
          </p>
        </motion.div>

        {/* Featured projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Folder className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="View source code">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors" aria-label="View live project">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono text-primary bg-primary/10 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex justify-center"
        >
          <motion.a
            href="https://github.com/samad-00?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-4 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-4 text-left hover:bg-primary/10 hover:border-primary/50 transition-all"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 border border-primary/30">
              <FolderGit2 className="h-5 w-5 text-primary" />
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-mono text-primary">More Projects</span>
              <span className="text-foreground font-semibold">View all repositories on GitHub</span>
            </span>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
