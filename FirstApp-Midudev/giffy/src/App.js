import React from 'react';
import './App.css'
import {Link, Route} from 'wouter'
import Home from './pages/Home';

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className='App-logo' alt='Giffy logo' src='/logo192.png'></img>
        </Link>
        <Route component={Home} path="/"/>          
      </section>
    </div>
  )
}