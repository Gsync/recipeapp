import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Pasta",
                instructions: "Open Pasta box and boil for 16 minutes, until cooked and serve with sauce",
                ingredients: ["Pasta", "3 cups of water", "Half cup of oil"],
                image: "images/spaghetti.jpg",
            },
            {
                title: "Pasta",
                instructions: "Open Pasta box and boil for 16 minutes, until cooked and serve with sauce",
                ingredients: ["Pasta", "3 cups of water", "Half cup of oil"],
                image: "images/spaghetti.jpg",
            },
            {
                title: "Pasta",
                instructions: "Open Pasta box and boil for 16 minutes, until cooked and serve with sauce",
                ingredients: ["Pasta", "3 cups of water", "Half cup of oil"],
                image: "images/spaghetti.jpg",
            },
            {
                title: "Pasta",
                instructions: "Open Pasta box and boil for 16 minutes, until cooked and serve with sauce",
                ingredients: ["Pasta", "3 cups of water", "Half cup of oil"],
                image: "images/spaghetti.jpg",
            },
            {
                title: "Pasta",
                instructions: "Open Pasta box and boil for 16 minutes, until cooked and serve with sauce",
                ingredients: ["Pasta", "3 cups of water", "Half cup of oil"],
                image: "images/spaghetti.jpg",
            },
            {
                title: "Pasta",
                instructions: "Open Pasta box and boil for 16 minutes, until cooked and serve with sauce",
                ingredients: ["Pasta", "3 cups of water", "Half cup of oil"],
                image: "images/spaghetti.jpg",
            },
        ]
    }
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render() {
        const recipes = this.props.recipes
            .map((recipe, index) => (
                <Recipe key={index} {...recipe} /> //...recipe is spread operator to include all the props
            ));
        return (
            <div className="recipe-list">{recipes}</div>
        );
    }
}

export default RecipeList;