import React, { Component } from 'react';
import {connect} from 'react-redux';
import './RecipeApp.css';
import RecipeForm from './components/RecipeForm';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';


class RecipeApp extends Component {

  render() {
    const {showForm, recipes, saveRecipe, deleteRecipe, showForm_, hideForm} = this.props;
    return (
      <div className="App">
        <Navbar onClickNewRecipe={showForm_} />
        {showForm ? <RecipeForm onSave={saveRecipe} onClose={hideForm} /> : null}
        <RecipeList onDelete={deleteRecipe} recipes={recipes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    showForm: state.showForm
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveRecipe(recipe) {
      dispatch({
        type: "SAVE_RECIPE",
        recipe
      })
    },
    deleteRecipe(recipeId) {
      dispatch({
        type: "DELETE_RECIPE",
        recipeId
      })
    },
    showForm_() {
      dispatch({
        type: "SHOW_FORM"
      })
    },
    hideForm() {
      dispatch({
        type: "HIDE_FORM"
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeApp);
