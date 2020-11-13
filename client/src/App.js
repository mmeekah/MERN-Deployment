
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.css';
import { Router } from '@reach/router';
import PetForm from './components/PetForm';
import Home from './views/Home';
import Navbar from './views/Navbar';
import OnePet from './components/OnePet';
import Update from './components/Update';

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Home path='/' />
        <PetForm path='/new' />
        <OnePet path='/pets/:id' />
        <Update path='/pets/:id/edit' />
      </Router>
    </div>
  );
}

export default App;