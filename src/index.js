import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/index';
import './index.css';
import RecipeApp from './RecipeApp';
import registerServiceWorker from './registerServiceWorker';


const state = {
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
            image: "images/cake.jpg",
        },
        {
            id: 2,
            title: "Biryani",
            instructions: "Open Pasta box and boil for 16 minutes, until cooked and serve with sauce",
            ingredients: ["Rice", "3 cups of water", "Half cup of oil"],
            image: "images/biryani.jpg",
        }
    ],
    nextRecipeId: 3,
    showForm: false
};

const store = createStore(rootReducer, state);

ReactDOM.render(
    <Provider store={store}>
        <RecipeApp />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();