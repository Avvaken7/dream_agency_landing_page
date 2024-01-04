import Container from './components/container/Container';
import ContainerFluid from './components/container/ContainerFluid';
import Navbar from './components/navbar/Navbar';
import Hero from './components/sections/hero/Hero';
import Services from './components/sections/services/Services';


import './App.css'
function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Hero />
      </Container>
      <ContainerFluid>
        <Services />
      </ContainerFluid>
    </>
  )
}

export default App
