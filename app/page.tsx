import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import ClientValue from '@/components/ClientValue'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="relative">
        <Hero />
        <Projects />
        <ClientValue />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
