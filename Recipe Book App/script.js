// Initializing all needed elements 
const apiKey = "5652268546184f2ca67e93c704cf88d8";
const recipeListEl = document.getElementById("recipe-list");

// created element for each recipe
// 4.foreach method does not return an array but map() return an array.
// increment the elements by appendchild()
function displayRecipes(recipes){
        recipeListEl.innerHTML = " ";
            recipes.forEach((recipe) => {
                const recipeItemEl = document.createElement("li");
                recipeItemEl.classList.add("recipe-item");

                const recipeImgEl = document.createElement("img");
                recipeImgEl.src = recipe.image;
                recipeImgEl.alt = "recipe image" 

                const recipeTitleEl = document.createElement("h2");
                recipeTitleEl.innerText = recipe.title;

                const recipeIngredientsEl = document.createElement("p");
                recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}`;

                const recipeLinkEl = document.createElement("a");
                recipeLinkEl.href = recipe.sourceUrl;
                recipeLinkEl.innerText = "View Recipe"

        recipeItemEl.appendChild(recipeImgEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientsEl);
        recipeItemEl.appendChild(recipeLinkEl); 
        recipeListEl.appendChild(recipeItemEl);
        });
}

// to fetch the information from the API
// after getting the data JSON() converts it into readable information.
async function getRecipes(){
        const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${apiKey}` );
            const data = await response.json();
            return data.recipes;
}

// a function which will load new data every time an user comes to the website.
async function init(){
    const recipes = await getRecipes();
    displayRecipes(recipes);
}
init();