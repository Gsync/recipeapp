import React, { Component } from 'react';
import {connect} from 'react-redux';
import './RecipeApp.css';
import RecipeForm from './components/RecipeForm';
import Navbar from './components/Navbar';
import RecipeList from './components/RecipeList';


class RecipeApp extends Component {

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {
        ...recipe, 
        id: this.state.nextRecipeId,
      };
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }
  onDelete(id) {
    const recipes = this.state.recipes.filter(recipe => recipe.id !== id);
    this.setState({
      recipes
    });
  }
  render() {
    const {showForm, recipes} = this.props;
    return (
      <div className="App">
        <Navbar onClickNewRecipe={() => this.setState({showForm: true})} />
        {showForm ? <RecipeForm onSave={this.handleSave} onClose={() => this.setState({showForm: false})} /> : null}
        <RecipeList onDelete={this.onDelete} recipes={recipes} />
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

export default connect(mapStateToProps, null)(RecipeApp);
