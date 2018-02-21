import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RecipeForm.css';

class RecipeForm extends Component {
    static defaultProps = {
        onClose() {

        }
    }
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            instructions: "",
            ingredients: [""],
            image: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNewIngredient = this.handleNewIngredient.bind(this);
        this.handleChangeIngredient = this.handleChangeIngredient.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleNewIngredient(e) {
        const { ingredients } = this.state;
        this.setState({
            ingredients: [...ingredients, ""]
        });
    }
    handleChangeIngredient(e) {
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ingredient, ind) => (
            ind === index ? e.target.value : ingredient
        ));
        this.setState({ ingredients });
    }
    render() {
        const { title, instructions, ingredients, image } = this.state;
        const { onClose } = this.props;
        let ingInputs = ingredients.map((ingredient, index) => (
            <div className="recipe-form-line" key={`ingredient-${index}`} >
                <label>{index + 1}.
                    <input
                        type="text"
                        name={`ingredient-${index}`}
                        value={ingredient}
                        size={45}
                        autoComplete="off"
                        placeholder=" Ingredient"
                        onChange={this.handleChangeIngredient}
                    />
                </label>
            </div>
        ));
        return (
            <div className="recipe-form-container">
                <form className="recipe-form" onSubmit={this.handleSubmit} >
                    <button
                        type="button"
                        className="close-button"
                        onClick={onClose}
                    >X</button>
                    <div className="recipe-form-line">
                        <label
                            htmlFor="recipe-title-input"
                        >Title</label>
                        <input
                            type="text"
                            id="recipe-title-input"
                            name="title"
                            value={title}
                            size={42}
                            autoComplete="off"
                            onChange={this.handleChange}
                        />
                    </div>
                    <label
                        htmlFor="recipe-instructions-input"
                    >Instructions</label>
                    <textarea
                        name="Instructions"
                        id="recipe-instructions-input"
                        name="instructions"
                        cols="50"
                        rows="8"
                        autoComplete="off"
                        value={instructions}
                        onChange={this.handleChange}
                    />
                    {ingInputs}
                    <button
                        className="buttons" type="button"
                        onClick={this.handleNewIngredient}
                    >+</button>
                    <div className="recipe-form-line">
                        <label
                            htmlFor="recipe-image-input"
                        >Image URL</label>
                        <input
                            type="text"
                            id="recipe-image-input"
                            placeholder=" Image Path..."
                            value={image}
                            size={36}
                            autoComplete="off"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="buttons"
                    >SAVE</button>
                </form>
            </div>
        );
    }
}

export default RecipeForm;