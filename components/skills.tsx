"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code, Wrench, Database, Sparkles } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "Frameworks",
    icon: Sparkles,
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "Django", level: 75 },
      { name: "Java Swing", level: 70 },
    ],
  },
  {
    title: "Tools & Tech",
    icon: Wrench,
    skills: [
      { name: "Power BI", level: 95 },
      { name: "Excel", level: 90 },
      { name: "Pandas", level: 85 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Jupyter", level: 90 },
      { name: "Git", level: 80 },
    ],
  },
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="section-shell py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-lg">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Skills & Expertise</h2>
            <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Technologies and tools I&apos;ve mastered to build data-driven solutions.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              whileHover={{ y: -4 }}
              className="p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{category.title}</h3>
                  <p className="text-xs text-muted-foreground">{category.skills.length} skills</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.2 + categoryIndex * 0.1 + skillIndex * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Also proficient in</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["NumPy", "Matplotlib", "Seaborn", "REST APIs", "JSON", "Data Cleaning", "Machine Learning"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-card text-foreground text-sm rounded-full border border-border hover:border-primary/50 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
