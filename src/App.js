import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bibloteca from './components/pages/Bibloteca';
import ContactUs from './components/pages/ContactUs';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import AdmLibros from './components/pages/AdmLibros';
import AdmUser from './components/pages/AdmUser';
import InfoLibros from './components/pages/InfoLibro';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bibloteca' component={Bibloteca} />
        <Route path='/about' component={About} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
        <Route path="/AdmLibros" component={AdmLibros}/>
        <Route path="/AdmUser" component={AdmUser}/>
        <Route path="/InfoLibros/:libInfo" component={InfoLibros}/>
      </Switch>
    </Router>
  );
}

export default App;