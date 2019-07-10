import React from 'react';
import './App.css';
import Navigation from './components/layout/Navigation/Navigfation'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home';
import MoviePage from './components/MovieDescriptionPage/MoviePage/MoviePage'
import BodyBackgroundColor from 'react-body-backgroundcolor'
import PageNotFound from './components/PageNotFound/PageNotFound'
import {Provider} from 'react-redux'
import LandingPage from './components/LandingPage/LandingPage'
import AddMovie from './components/Home/AddMovie/AddMovie'
import store from './store'
function App() {
 
  return (
    <BodyBackgroundColor backgroundColor='#000'>
    <Provider store={store}>
    <div className="App ">
     <Router>

    <Navigation />
    <AddMovie/>
       <Switch>
    <Route exact path='/' component= { LandingPage } />
    <Route exact path='/api/v1/movies' component= { Home } />
    <Route exact path='/api/v1/movies/:id' component= {MoviePage} />
    <Route component={PageNotFound} />
    </Switch>
    
    </Router>
    </div>
    </Provider>
    </BodyBackgroundColor>
  );
}

export default App;
