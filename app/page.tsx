import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Certificates } from "@/components/certificates"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { DataScienceDoodles } from "@/components/data-science-doodles"

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden relative">
      <DataScienceDoodles />
      <Navigation />
      <div className="flex flex-col relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
