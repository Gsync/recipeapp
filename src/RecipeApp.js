import React, { Component } from 'react';
import logo from './logo.svg';
import './RecipeApp.css';
import RecipeForm from './components/RecipeForm';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';


class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Pasta",
          instructions: "Open Pasta box and boil for 16 minutes, until cooked and serve with sauce",
          ingredients: ["Pasta", "3 cups of water", "Half cup of oil"],
          image: "images/spaghetti.jpg",
        },
        {
          id: 1,
          title: "Banana Cake",
          instructions: "Open Pasta box and boil for 16 minutes, until cooked and serve with sauce",
          ingredients: ["Bananas", "3 cups of water", "Half cup of oil"],
          image: "images/spaghetti.jpg",
        },
        {
          id: 2,
          title: "Biryani",
          instructions: "Open Pasta box and boil for 16 minutes, until cooked and serve with sauce",
          ingredients: ["Rice", "3 cups of water", "Half cup of oil"],
          image: "images/spaghetti.jpg",
        }
      ],
      nextRecipeId: 3,
    };
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {
        ...recipe, 
        id: this.state.nextRecipeId
      };
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeForm onSave={this.handleSave} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
