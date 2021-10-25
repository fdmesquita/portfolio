import { Switch, Route } from 'react-router-dom'
import Footer from './components/Footer'

import About from './screens/About'
import Contact from './screens/Contact'
import Header from './components/Header'
import Home from './screens/Home'
import NotFound from './screens/404'
import Skills from './screens/Skills'
import Work from './screens/Work'

import './Normalize.css'
import './styles/App.css'

function App() {
  return (
    <div className='main-container'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/work'>
          <Work />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/notfound'>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
