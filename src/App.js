import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { HomePage, PricePage, FaqPage, SpecialPage, ContactPage, ReservePage } from './pages'

const App = () => {
  return (
    <Router>
      
      
     
      <Switch>
        <Route exact path='/'>
          <HomePage></HomePage>
        </Route>
        <Route path='/price'>
          <PricePage></PricePage>
        </Route>
        <Route path='/special' >
          <SpecialPage />
        </Route>
        <Route path='/faq' >
          <FaqPage />
        </Route>
        <Route path='/contact' >
          <ContactPage />
        </Route>
        <Route path='/reserve' >
          <ReservePage />
        </Route>
      </Switch>
     
      
    </Router>
    
  )
}

export default App
