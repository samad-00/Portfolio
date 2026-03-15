"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"
import { useEffect, useMemo, useState, useRef } from "react"
import Image from "next/image"

function TypeWriter({ words, className }: { words: string[]; className?: string }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className={className}>
      {currentText}
      <motion.span 
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-primary"
      >
        |
      </motion.span>
    </span>
  )
}

function FloatingParticles() {
  const shouldReduceMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const particles = useMemo(
    () => {
      if (!mounted) return []

      return (
      [...Array(shouldReduceMotion ? 8 : 18)].map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 4 + 3,
      }))
      )
    },
    [mounted, shouldReduceMotion]
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: shouldReduceMotion ? 0 : [-12, 12, -12],
            opacity: shouldReduceMotion ? 0.2 : [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: particle.duration,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay: shouldReduceMotion ? 0 : Math.random() * 1.5,
          }}
        />
      ))}
    </div>
  )
}

function ScrollIndicator() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </a>
    </motion.div>
  )
}

export function Hero() {
  const roles = ["Data Science", "Python Development", "AI & Machine Learning", "Data Analytics"]
  const shouldReduceMotion = useReducedMotion()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const yText = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 40 : 120])
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <FloatingParticles />
      
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(100,200,180,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(100,200,180,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="relative z-10"
          style={{ y: yText, opacity: opacityText }}
        >
        {/* Intro line */}
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-mono text-sm md:text-base mb-6 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-primary" />
          Hi, my name is
        </motion.p>
        
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight"
        >
          Samad
        </motion.h1>
        
        {/* Subtitle with typewriter */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-3xl lg:text-4xl font-bold text-muted-foreground mb-8"
        >
          I craft solutions with{" "}
          <TypeWriter words={roles} className="text-primary" />
        </motion.h2>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
        >
          Computer Science Engineering student passionate about transforming raw data into 
          actionable insights. I build{" "}
          <span className="text-primary">AI-powered solutions</span> and{" "}
          <span className="text-primary">interactive dashboards</span> that drive decisions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4"
        >
          <motion.a 
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm flex items-center gap-2 transition-all hover:opacity-90"
          >
            <Sparkles className="w-4 h-4" />
            View My Work
          </motion.a>
          
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 border border-primary/50 text-primary rounded-lg font-medium text-sm transition-all hover:bg-primary/10"
          >
            Get In Touch
          </motion.a>

          <motion.a 
            href="/cv%20mine.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 text-muted-foreground hover:text-primary rounded-lg font-medium text-sm flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4" />
            CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-1 mt-10"
        >
          <span className="h-px w-8 bg-border mr-3" />
          {[
            { href: "mailto:edsam324@gmail.com", icon: Mail, label: "Email" },
            { href: "https://github.com/samad-00", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/abdus-samad0", icon: Linkedin, label: "LinkedIn" },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-3 text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Profile Image - Right Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:flex items-center justify-center"
      >
        <div className="relative">
          {/* Animated ring */}
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-primary/30"
            animate={{ rotate: shouldReduceMotion ? 0 : 360 }}
            transition={{ duration: 24, repeat: shouldReduceMotion ? 0 : Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full" />
          </motion.div>
          
          {/* Outer glow */}
          <motion.div
            className="absolute -inset-8 bg-primary/10 rounded-full blur-2xl"
            animate={{ scale: shouldReduceMotion ? 1 : [1, 1.08, 1], opacity: shouldReduceMotion ? 0.3 : [0.25, 0.4, 0.25] }}
            transition={{ duration: 6, repeat: shouldReduceMotion ? 0 : Infinity }}
          />
          
          {/* Image container */}
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
            <Image
              src="/images/profile.jpeg"
              alt="Samad - Developer and Data Scientist"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
          
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full border border-border shadow-lg"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-foreground font-medium whitespace-nowrap">Available for hire</span>
          </motion.div>
        </div>
      </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
