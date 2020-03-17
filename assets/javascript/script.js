
//variables
let dietType = "vegan";
let number = 1;
let apiKey = "633d97f5523a4f86a9b9fc20e109b345";
let ingredients = "carrot";
let idNum = "1051408"

// $("#random").on("click", function(){
//     event.preventDefault();
//     var randomfood=recipes[Math.floor(Math.random()*5)]
//     console.log(randomfood);
//     $("#card-title").html(randomfood);
// });

$("#search-button").on("click", function(){
    
    event.preventDefault();

    var ingredientOne=$("#ingredient-input").val().trim();  
    $("#ingredient-input").val("");
    var ingredientTwo=$("#ingredient2-input").val().trim();
    $("#ingredient2-input").val("");
    var ingredientThree=$("#ingredient3-input").val().trim();
    $("#ingredient3-input").val("");
    var ingredientFour=$("#ingredient4-input").val().trim();
    $("#ingredient4-input").val("");
    var ingredientFive=$("#ingredient5-input").val().trim();
    $("#ingredient5-input").val("");
    var balanced=$("#balanced-diet").val();
    $("#balanced-diet").val("");
    var fiberHigh=$("#high-fiver").val();
    $("#high-fiber").val();
    var lowCarb=$("#low-carb").val();
    $("#low-carb").val();
    var lowFAt=$("#low-fat").val();
    $("#low-fat").val();
    var lowSodium=$("#low-sodium").val();
    $("#low-sodium").val();

    for (var i= 0; i < recipes.length; i++) {
        var keyRecipe = recipes[i];
        if(ingredientOne && ingredientTwo && ingredientThree && ingredientFour && ingredientFive === keyRecipe){
            $("#card-title").html(keyRecipe);
            console.log(keyRecipe);
        };
    };

    for (var j=0; j<nutrition.length; j++ ){
        var keyNutrients=nutrition[i];
        if(balanced || fiberHigh || lowCarb || lowFAt || lowSodium === keyNutrients){
            return keyNutrients;
        };
        $("#card-title").append(keyNutrients);
    };

});


//get recipes
function getRecipesById(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.spoonacular.com/recipes/" + idNum + "/information?apiKey=" + apiKey,
        "method": "GET",
        "headers": {
        "content-type": "application/json"
        }
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

//search recipes
function searchRecipe() {
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
};

// random recipe
function randomRecipe(){
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
        $("#card-title").html(response);
    });
};

//generate meal plan
function generateMealPlan(){
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
};

//search recipes by ingredients
//adding more ingredients will go in the url search "&ingredients=" + ingredient
function recipesByIngredients(){
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
};

$("#random-button").on("click", function(event){
    randomRecipe();
});

// will extract a recipe if a url is provided
//extract recipes
// let recipeUrl = "";
// function extractRecipes(){
//     var settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.spoonacular.com/recipes/extract?apiKey=" + apiKey + "&url="+ recipeUrl,
//         "method": "GET",
//         "headers": {
//         "content-type": "application/json"
//         }
//     }
//     $.ajax(settings).done(function (response) {
//         console.log(response);
//     });
// };

//Bootstrap Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

