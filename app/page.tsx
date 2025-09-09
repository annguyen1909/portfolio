import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Achievements from '@/components/Achievements'
import Testimonials from '@/components/Testimonials'
import ResumeSection from '@/components/ResumeSection'
import FloatingContactButton from '@/components/FloatingContactButton'
import AnimatedBackground from '@/components/AnimatedBackground'
import CursorTrail from '@/components/CursorTrail'
import ModernLoader from '@/components/ModernLoader'

export default function Home() {
  return (
    <>
      <ModernLoader />
      <AnimatedBackground />
      <CursorTrail />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Testimonials />
        <ResumeSection />
        <Contact />
        <Footer />
      </main>
      <FloatingContactButton />
    </>
  )
}
