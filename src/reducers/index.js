export default (state={}, action) => {
    switch(action.type) {
        case "SAVE_RECIPE":
        const newRecipe = {id: state.nextRecipeId, ...action.recipe};
            return {
                ...state,
                nextRecipeId: state.nextRecipeId + 1,
                showForm: false,
                recipes: [...state.recipes, newRecipe]
        };
        case "DELETE_RECEIPE":
            const recipes = state.recipes.filter(recipe => recipe.id !== action.recipeId)
            return {
                ...state,
                recipes
            };
        case "SHOW_FORM":
            return {
                ...state,
                showForm: true
            };
            case "HIDE_FORM":
            return {
                ...state,
                showForm: true

            };
        default:
            return state;
    }
};
