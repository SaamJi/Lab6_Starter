// main.js

// Run the init() function when the page has loaded
window.addEventListener("DOMContentLoaded", init);

// Starts the program, all function calls trace back here
function init() {
  // Get the recipes from localStorage
  let recipes = getRecipesFromStorage();
  // Add each recipe to the <main> element
  addRecipesToDocument(recipes);
  // Add the event listeners to the form elements
  initFormHandler();
}

/**
 * Reads 'recipes' from localStorage and returns an array of
 * all of the recipes found (parsed, not in string form). If
 * nothing is found in localStorage for 'recipes', an empty array
 * is returned.
 * @returns {Array<Object>} An array of recipes found in localStorage
 */
function getRecipesFromStorage() {
  // A9. TODO - Complete the functionality as described in this function
  //           header. It is possible in only a single line, but should
  //           be no more than a few lines.
  const recipes = JSON.parse(localStorage.getItem("recipes"));
  // console.log(typeof recipes);
  return recipes;
}

/**
 * Takes in an array of recipes and for each recipe creates a
 * new <recipe-card> element, adds the recipe data to that card
 * using element.data = {...}, and then appends that new recipe
 * to <main>
 * @param {Array<Object>} recipes An array of recipes
 */
function addRecipesToDocument(recipes) {
  if (!recipes) return;
  // A10. TODO - Get a reference to the <main> element
  let mainEl = document.querySelector("main");
  // console.log(mainEl);
  // A11. TODO - Loop through each of the recipes in the passed in array,
  //            create a <recipe-card> element for each one, and populate
  //            each <recipe-card> with that recipe data using element.data = ...
  //            Append each element to <main>
  // console.log(typeof recipes);
  recipes.forEach(createRecipeCard);

  function createRecipeCard(item) {
    // console.log(item);
    let element = document.createElement("recipe-card");
    element.data = item;
    mainEl.append(element);
  }
}

/**
 * Takes in an array of recipes, converts it to a string, and then
 * saves that string to 'recipes' in localStorage
 * @param {Array<Object>} recipes An array of recipes
 */
function saveRecipesToStorage(recipes) {
  // EXPLORE - START (All explore numbers start with B)
  // B1. TODO - Complete the functionality as described in this function
  //            header. It is possible in only a single line, but should
  //            be no more than a few lines.
}

/**
 * Adds the necesarry event handlers to <form> and the clear storage
 * <button>.
 */
function initFormHandler() {
  // B2. TODO - Get a reference to the <form> element
  let formEl = document.getElementById("new-recipe");
  console.log(formEl);
  // let clearLocalBtn = document.querySelector(".danger");
  // console.log(clearLocalBtn);
  // Steps B4-B9 will occur inside the event listener from step B3
  function formElSubmit(event) {
    console.log("form submitted.");
    // B4. TODO - Create a new FormData object from the <form> element reference above
    const formData = new FormData(formEl);
    // B5. TODO - Create an empty object (I'll refer to this object as recipeObject to
    //            make this easier to read), and then extract the keys and corresponding
    //            values from the FormData object and insert them into recipeObject
    let recipeobject = `<img src="${data.imgSrc}"
      alt="${data.imgAlt}">
    <p class="title">
      <a href="${data.titleLnk}">${data.titleTxt}</a>
    </p>
    <p class="organization">${data.organization}</p>
    <div class="rating">
      <span>${data.rating}</span>
      <img src="/assets/images/icons/${data.rating}-star.svg" alt="${data.rating} stars">
      <span>(${data.numRatings})</span>
    </div>
    <time>${data.lengthTime}</time>
    <p class="ingredients">
    ${data.ingredients}
    </p>`;
    // Display the key/value pairs
    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    //   recipeobject[`${pair[0]}`] = `${pair[1]}`;
    // }
    // B6. TODO - Create a new <recipe-card> element
    let element = document.createElement("recipe-card");
    // B7. TODO - Add the recipeObject data to <recipe-card> using element.data
    element.data = `${recipeobject}`;
    // B8. TODO - Append this new <recipe-card> to <main>
    let mainEl = document.querySelector("main");
    mainEl.append(element);
    // B9. TODO - Get the recipes array from localStorage, add this new recipe to it, and
    //            then save the recipes array back to localStorage
    let recipes = localStorage.getItem("recipes");
    recipes.push(recipeobject);
    localStorage.setItem("recipes", recipes);
  }
  // B3. TODO - Add an event listener for the 'submit' event, which fires when the
  //            submit button is clicked
  formEl.addEventListener("submit", formElSubmit);

  // Steps B12 & B13 will occur inside the event listener from step B11
  function clearStorage(event) {
    console.log("clearing local storage");
    // B12. TODO - Clear the local storage
    localStorage.clear();
    // B13. TODO - Delete the contents of <main>
    let mainEl = document.querySelector("main");
    mainEl.innerHTML = "";
  }
  // B10. TODO - Get a reference to the "Clear Local Storage" button
  let clearLocalBtn = document.querySelector(".danger");
  console.log(clearLocalBtn);
  // B11. TODO - Add a click event listener to clear local storage button
  clearLocalBtn.addEventListener("click", clearStorage);
}
