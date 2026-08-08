"use client"

import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring, useReducedMotion } from "framer-motion"
import { useState, useEffect, type MouseEvent } from "react"
import { Menu, X, FileText, Sparkles } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

function MagneticLink({ children, href, className, onClick }: { children: React.ReactNode; href: string; className?: string; onClick?: () => void }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const xSpring = useSpring(x, springConfig)
  const ySpring = useSpring(y, springConfig)

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set((e.clientX - centerX) * 0.3)
    y.set((e.clientY - centerY) * 0.3)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className={className}
    >
      {children}
    </motion.a>
  )
}

export function Navigation() {
  const shouldReduceMotion = useReducedMotion()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { scrollYProgress } = useScroll()
  
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map((link) => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/70 backdrop-blur-2xl shadow-2xl shadow-black/10 border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary"
          style={{ width: progressWidth }}
        />
        
        <nav className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <MagneticLink href="#" className="relative group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <span className="text-2xl font-bold text-primary font-mono relative z-10 flex items-center gap-1">
                <motion.span
                  animate={shouldReduceMotion ? undefined : { rotate: [0, 6, 0, -6, 0] }}
                  transition={shouldReduceMotion ? undefined : { duration: 2.4, repeat: Infinity, repeatDelay: 5 }}
                >
                  {"<"}
                </motion.span>
                S
                <motion.span
                  animate={shouldReduceMotion ? undefined : { rotate: [0, -6, 0, 6, 0] }}
                  transition={shouldReduceMotion ? undefined : { duration: 2.4, repeat: Infinity, repeatDelay: 5 }}
                >
                  {" />"}
                </motion.span>
              </span>
              <motion.span
                className="absolute -inset-3 bg-primary/10 rounded-xl -z-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              />
              {/* Glow effect */}
              <motion.span
                className="absolute -inset-4 bg-primary/20 rounded-xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </MagneticLink>

          {/* Desktop Navigation Links (Center) */}
          <ul className="hidden md:flex items-center justify-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: [0.215, 0.61, 0.355, 1] }}
              >
                <MagneticLink
                  href={link.href}
                  className={`relative px-4 py-2.5 text-sm transition-colors font-mono rounded-xl flex items-center gap-1 ${
                    activeSection === link.href.slice(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="text-primary/70 text-xs">0{index + 1}.</span>
                  <span>{link.name}</span>
                  
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 rounded-xl -z-10 border border-primary/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover underline */}
                  <motion.span
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </MagneticLink>
              </motion.li>
            ))}
          </ul>

          {/* Actions (Right) */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <motion.a
                href="/cv%20mine.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-mono overflow-hidden"
              >
                <motion.span
                  className="absolute inset-0 border border-primary rounded-xl"
                />
                <motion.span
                  className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <FileText className="w-4 h-4 relative z-10 text-primary group-hover:text-primary-foreground transition-colors" />
                <span className="relative z-10 text-primary group-hover:text-primary-foreground transition-colors">CV</span>
              </motion.a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.215, 0.61, 0.355, 1] }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative z-50 p-3 text-primary bg-card/50 backdrop-blur-sm rounded-xl border border-border"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-background/90 backdrop-blur-xl md:hidden"
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-40 w-4/5 max-w-sm bg-card/95 backdrop-blur-2xl border-l border-border md:hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 pointer-events-none" />
              
              <div className="flex flex-col h-full p-8 pt-24 relative">
                <ul className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.08, type: "spring", stiffness: 100 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`group block py-4 px-5 rounded-2xl text-lg font-mono transition-all relative overflow-hidden ${
                          activeSection === link.href.slice(1)
                            ? "text-primary bg-primary/10 border border-primary/20"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          <span className="text-primary text-sm opacity-70">0{index + 1}.</span>
                          {link.name}
                        </span>
                        
                        {/* Hover effect */}
                        <motion.span
                          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="mt-10 flex flex-col gap-4"
                >
                  <a
                    href="/cv%20mine.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl font-mono relative overflow-hidden"
                  >
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                    />
                    <FileText className="w-5 h-5 relative z-10 text-primary-foreground" />
                    <span className="relative z-10 text-primary-foreground font-semibold">Download CV</span>
                  </a>
                  
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-sm text-muted-foreground font-mono">Theme</span>
                    <ThemeToggle />
                  </div>
                </motion.div>

                {/* Decorative element */}
                <motion.div 
                  className="mt-auto pt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground font-mono">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>{"<samad />"}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
