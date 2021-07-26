import React from 'react'

function Ingredients(props) {
    const {ingredients}=props;
    return (
        <div className="ingredientWrapper">
            {
            ingredients.map(_ingredient=>{
                return <Ingredient ingredient={_ingredient}/>
            })
        }
            
        </div>
    )
}

export default Ingredients
function Ingredient(props){
    return(
        <div className="ingredient">
            <img src={`https://spoonacular.com/cdn/ingredients_100x100/${props.ingredient.image}`}/>
            <span>{props.ingredient.name}</span>
        </div>
    )
}

