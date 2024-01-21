import Container from './components/container/Container';
import ContainerFluid from './components/container/ContainerFluid';
import Navbar from './components/navbar/Navbar';
import Hero from './components/sections/hero/Hero';
import Services from './components/sections/services/Services';
import About from './components/sections/about/About';
import OurWorks from './components/sections/works/OurWorks';
import Testimonial from './components/sections/testimonials/Testimonial';
import Footer from './components/footer/Footer';

import './App.css'
function App() {
  return (
    <>
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <main>
        <Hero />
        <ContainerFluid>
          <Services />
        </ContainerFluid>
        <Container>
          <About />
        </Container>
        <ContainerFluid>
          <OurWorks />
        </ContainerFluid>
        <Container>
          <Testimonial />
        </Container>
      </main>
      <footer>
        <ContainerFluid>
          <Footer />
        </ContainerFluid>
      </footer>
    </>
  )
}

export default App
