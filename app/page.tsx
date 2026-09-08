import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Proof from '@/components/Proof'
import Projects from '@/components/Projects'
import ClientValue from '@/components/ClientValue'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Projects />
        <Proof />
        <ClientValue />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
