"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, MapPin } from "lucide-react"

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "B.Tech Computer Science Engineering",
    score: "CGPA: 6.98",
    date: "Aug 2023 - Present",
    description: "Focusing on Software Architecture, Data Structures, Algorithms, and Machine Learning. Active participant in technical clubs and hackathons.",
  },
  {
    institution: "Savitri Public School",
    location: "Partawal, Maharajganj",
    degree: "Intermediate",
    score: "66%",
    date: "Apr 2020 – Mar 2022",
    description: "Completed higher secondary education with a focus on Mathematics and Computer Science.",
  },
  {
    institution: "P.G Senior Secondary",
    location: "Captainganj, Kushinagar",
    degree: "Matriculation",
    score: "76%",
    date: "Apr 2019 – Mar 2020",
    description: "Completed secondary education with strong foundational coursework.",
  }
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="section-shell py-32 px-6 md:px-12 lg:px-24 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-primary font-mono text-lg">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Education</h2>
            <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
          </div>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-colors group-hover:border-primary group-hover:bg-primary/10">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>

              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-secondary/30 border border-border rounded-xl transition-all hover:bg-secondary/50 hover:border-primary/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-xl text-foreground">{edu.institution}</h3>
                  <span className="text-sm font-mono text-primary whitespace-nowrap">{edu.date}</span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {edu.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full">
                    {edu.degree}
                  </span>
                  <span className="px-3 py-1 bg-background text-muted-foreground border border-border text-xs font-mono rounded-full">
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
