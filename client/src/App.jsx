import { Home } from './pages/home/Home'
import './App.scss'
import { About } from './pages/about/About'
import { Services } from './pages/services/Services'
import { Contact } from './pages/contact/Contact'

function App() {

  return (
    <div className='app-container'>

      <Home/>
      <About/>
      <Services/>
      <Contact/>
      
    </div>
  )
}

export default App
