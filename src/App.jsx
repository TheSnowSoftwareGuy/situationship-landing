import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import GradeScale from './components/GradeScale'
import Quiz from './components/Quiz'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <Hero />
      <HowItWorks />
      <GradeScale />
      <Quiz />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
