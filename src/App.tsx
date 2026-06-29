import { Container } from './components/Container'
import Header from './components/Header'
import Case from './pages/Case'

import Home from './pages/Home'
// import NewCase from './pages/NewCase'

function App() {
  return (
    <Container>
      <Header/>
      <Home/>
      {/* <NewCase/> */}
      <Case/>
    </Container>
  )
}

export default App