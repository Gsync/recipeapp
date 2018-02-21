import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';


class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
