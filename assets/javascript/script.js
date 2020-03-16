
//variables
let dietType = "";
let recipeUrl = "";
let number = 1;
let apiKey = "633d97f5523a4f86a9b9fc20e109b345";
let ingredients = "";

//search recipes
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.spoonacular.com/recipes/search?number=5&diet=" + dietType + "&apiKey=" + apiKey,
    "method": "GET",
    "headers": {
    "content-type": "application/json"
    }
}
$.ajax(settings).done(function (response) {
    console.log(response);
});

//extract recipes
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.spoonacular.com/recipes/extract?apiKey=" + apiKey + "&url="+ recipeUrl,
    "method": "GET",
    "headers": {
    "content-type": "application/json"
    }
}
$.ajax(settings).done(function (response) {
    console.log(response);
});

// random recipe
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.spoonacular.com/recipes/random?number=" + number + "&apiKey=" + apiKey,
    "method": "GET",
    "headers": {
    "content-type": "application/json"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

//generate meal plan
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.spoonacular.com/mealplanner/generate?apiKey=" + apiKey + "&diet=" + dietType,
    "method": "GET",
    "headers": {
    "content-type": "application/json"
    }
}
$.ajax(settings).done(function (response) {
    console.log(response);
});

//search recipes by ingredients
//adding more ingredients will go in the url search "&ingredients=" + ingredient
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey + "&ingredients=" + ingredients + "&number=" + number,
    "method": "GET",
    "headers": {
    "content-type": "application/json"
    }
}
$.ajax(settings).done(function (response) {
    console.log(response);
});