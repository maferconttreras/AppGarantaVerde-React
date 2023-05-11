import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Biblioteca from './views/biblioteca'
import SobreNosotros from './views/sobre-nosotros'
import InicioSesin from './views/inicio-sesin'
import Inicio from './views/inicio'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Biblioteca} exact path="/biblioteca" />
        <Route component={SobreNosotros} exact path="/sobre-nosotros" />
        <Route component={InicioSesin} exact path="/inicio-sesin" />
        <Route component={Inicio} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
