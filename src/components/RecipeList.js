import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';

class RecipeList extends Component {
    render() {
        return (
            <div>
                <Recipe
                    title="pasta"
                    ingredients={['flour', 'oil']}
                    instructions="Mix ingredients"
                    image="./images/spaghetti.jpg"
                />
            </div>
        );
    }
}

export default RecipeList;