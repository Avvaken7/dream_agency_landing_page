import Container from './components/container/Container';
import Navbar from './components/navbar/Navbar';
import Hero from './components/sections/hero/Hero';
// import TitleText from './components/TitleText/TitleText'
// import Button from './components/button/Button'

import './App.css'
function App() {
  return (
    <>
      <Container>
        <Navbar/>
        <Hero/>
      </Container>
    </>
  )
}

export default App
