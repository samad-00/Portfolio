"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail, Send, ArrowUpRight, Sparkles } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/abdus-samad0", username: "@abdus-samad0" },
  { icon: Github, label: "GitHub", href: "https://github.com/samad-00", username: "@samad-00" },
  { icon: Mail, label: "Email", href: "mailto:edsam324@gmail.com", username: "edsam324@gmail.com" },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="section-shell py-32 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p 
            className="text-primary font-mono text-sm mb-4 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="w-8 h-px bg-primary/50" />
            05. What&apos;s Next?
            <span className="w-8 h-px bg-primary/50" />
          </motion.p>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground text-lg max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </motion.p>
        </motion.div>

        {/* Contact card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 md:p-12 bg-card rounded-2xl border border-border"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - CTA */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let&apos;s work together
              </h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m always interested in hearing about new projects and opportunities.
              </p>

              <div className="flex items-center gap-2 mb-8">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Available for remote work</span>
              </div>

              <motion.a
                href="mailto:edsam324@gmail.com"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium transition-all hover:opacity-90"
              >
                <Sparkles className="w-5 h-5" />
                Say Hello
                <Send className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Right side - Social links */}
            <div>
              <p className="text-sm font-mono text-primary mb-6 flex items-center gap-2">
                <span className="w-4 h-px bg-primary" />
                Connect with me
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center justify-between p-4 bg-secondary/30 rounded-xl border border-border hover:border-primary/30 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <social.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
