"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const techStack = [
  "Python", "Power BI", "SQL", "Pandas", "NumPy", "Java", "Django", "Excel"
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="section-shell py-32 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-lg">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About Me</h2>
            <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Text content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  I&apos;m a <span className="text-primary font-medium">Computer Science Engineering</span> student 
                  passionate about transforming raw data into actionable insights. My journey in tech began 
                  with a curiosity about how data shapes decisions in the real world.
                </p>
                <p>
                  I specialize in <span className="text-primary font-medium">data science</span>, 
                  <span className="text-primary font-medium"> analytics</span>, and building real-world 
                  dashboards that help businesses make informed decisions.
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  When I&apos;m not coding or analyzing data, you can find me exploring new AI technologies 
                  and learning about the latest trends in machine learning.
                </p>
                {/* Tech stack tags */}
                <div className="pt-2">
                  <p className="text-sm font-mono text-primary mb-3">Technologies I work with:</p>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(100, 200, 180, 0.15)" }}
                        className="px-3 py-1.5 bg-secondary/50 text-foreground text-sm rounded-lg border border-border hover:border-primary/50 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
