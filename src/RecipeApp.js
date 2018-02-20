import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './components/Recipe';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Recipe />
      </div>
    );
  }
}

export default RecipeApp;
