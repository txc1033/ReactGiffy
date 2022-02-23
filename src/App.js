import React, {useState} from 'react';
import './App.css';
import ListOfGifs from './components/listOfGifs';
import {Link, Route} from "wouter";

function App() {

  return (
    <div className="App">
      <section className="App-Content">
        <h1>Gifs 😸</h1>
        <Link className='App-link' to='/gif/kawai'>Kawai</Link>
        <Link className='App-link' to='/gif/ecchi'>Ecchi</Link>
        <Link className='App-link' to='/gif/anime'>Anime</Link>
        <Route  component={ListOfGifs} path="/gif/:keyword" />      
      </section>
    </div>
  );
}

export default App;
