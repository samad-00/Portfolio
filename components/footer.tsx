"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles, Code2 } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/abdus-samad0", label: "LinkedIn", color: "hover:bg-blue-500/20 hover:border-blue-500/50" },
  { icon: Github, href: "https://github.com/samad-00", label: "GitHub", color: "hover:bg-gray-500/20 hover:border-gray-500/50" },
  { icon: Mail, href: "mailto:edsam324@gmail.com", label: "Email", color: "hover:bg-red-500/20 hover:border-red-500/50" },
]

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const shouldReduceMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer ref={ref} className="section-shell relative py-16 px-6 border-t border-border bg-card/50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: shouldReduceMotion ? 1 : [1, 1.1, 1], opacity: shouldReduceMotion ? 0.3 : [0.25, 0.4, 0.25] }}
        transition={{ duration: 10, repeat: shouldReduceMotion ? 0 : Infinity }}
      />
      
      <div className="max-w-6xl mx-auto relative">
        {/* Back to top button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute -top-8 left-1/2 -translate-x-1/2 p-4 bg-card border border-border rounded-2xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all shadow-xl group"
          aria-label="Back to top"
        >
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={shouldReduceMotion ? undefined : { duration: 1.5, repeat: Infinity }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.div>
          
          {/* Glow effect */}
          <motion.span
            className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"
          />
        </motion.button>

        <div className="grid md:grid-cols-3 gap-12 pt-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-2xl font-bold text-primary font-mono"
            >
              <Code2 className="w-6 h-6" />
              <span>{"<samad />"}</span>
            </motion.a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building data-driven solutions and AI-powered applications. 
              Passionate about transforming data into insights.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-mono text-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1"
                  >
                    <span className="text-primary/50">{">"}</span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-mono text-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Connect
            </h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-secondary/50 rounded-xl border border-border transition-all ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        {/* Credits */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Designed & Built with{" "}
            <motion.span
              animate={shouldReduceMotion ? undefined : { scale: [1, 1.2, 1] }}
              transition={shouldReduceMotion ? undefined : { duration: 1.6, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>{" "}
            by <span className="text-primary font-medium">Samad</span>
          </p>
          
          <p className="text-muted-foreground/60 text-xs font-mono">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
