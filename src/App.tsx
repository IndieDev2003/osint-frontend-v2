import { Route, Routes } from 'react-router-dom'
import { Container } from './components/Container'
import Footer from './components/Footer'
import Header from './components/Header'
import Case from './pages/Case'

import Home from './pages/Home'
import Cases from './pages/Cases'
import Evidences from './pages/Evidences'
import Persons from './pages/Persons'
import Person from './pages/singles/Person'


function App() {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cases/:id' element={<Case />} />
        <Route path='/cases' element={<Cases />} />
        <Route path='/evidences' element={<Evidences />} />
        <Route path='/persons' element={<Persons />} />
        <Route path='/person' element={<Person />} />
        
      </Routes>
      <Footer/>
    </Container>
  )
}

export default App