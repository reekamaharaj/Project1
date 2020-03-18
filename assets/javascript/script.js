
//variables
let dietType = "vegan";
let number = 1;
let apiKey = "633d97f5523a4f86a9b9fc20e109b345";
let ingredients = "carrot";
let idNum = "1051408"
var ingredent=[];

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
    var balanced=$("#balanced-diet-toggle").val();
    $("#balanced-diet").val("");
    var fiberHigh=$("#high-fiber-toggle").val();
    $("#high-fiber").val();
    var lowCarb=$("#low-carb-toggle").val();
    $("#low-carb").val();
    var lowFAt=$("#low-fat-toggle").val();
    $("#low-fat").val();
    var lowSodium=$("#low-sodium-toggle").val();
    $("#low-sodium").val();

    
    
    ingredent.push(ingredientOne, ingredientTwo, ingredientThree, ingredientFour, ingredientFive);
    recipesByIngredients(ingredent);
    



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
    var queryURL= "https://api.spoonacular.com/recipes/" + idNum + "/information?apiKey=" + apiKey;
    
    $.ajax({
        url:queryURL ,
        method: "GET",

    }).then(function (response) {
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
    var queryURL="https://api.spoonacular.com/recipes/search?number=5&diet=" + dietType + "&apiKey=" + apiKey;
    $.ajax({
        url:queryURL ,
        method: "GET",

    }).then(function (response) {
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

    $.ajax(settings).then(function (response) {
        console.log(response);
        $("#card-t").html(response.recipes[0].readyInMinutes);
        $("#card-t").append(response.recipes[0].title);
        $("#card-t").append(response.recipes[0].sourceURL);
        $("#card-t").append(response.recipes[0].healthScore);
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
    var queryURL="https://api.spoonacular.com/mealplanner/generate?apiKey=" + apiKey + "&diet=" + dietType;
    $.ajax({
        url:queryURL ,
        method: "GET",

    }).then(function (response) {
        console.log(response);
    });
};

//search recipes by ingredients
//adding more ingredients will go in the url search "&ingredients=" + ingredient
function recipesByIngredients(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey + "&ingredients=" + ingredent + "&number=" + number,
        "method": "GET",
        "headers": {
        "content-type": "application/json"
        }
    }

    var queryURL="https://api.spoonacular.com/recipes/findByIngredients?apiKey=" + apiKey + "&ingredients=" + ingredent + "&number=" + number;
    $.ajax({
        url:queryURL ,
        method: "GET",

    }).then(function (response) {
        console.log(response);
        $("#card-t").text(response[0].image);
        $("#card-t").html(response[0].title);
     

        
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




var firebaseConfig = {
    apiKey: "AIzaSyBBSocOVu5wauuBtjv7VxBqfAfxxYpUlak",
    authDomain: "foodle-28d8f.firebaseapp.com",
    databaseURL: "https://foodle-28d8f.firebaseio.com",
    projectId: "foodle-28d8f",
    storageBucket: "foodle-28d8f.appspot.com",
    messagingSenderId: "745349458558",
    appId: "1:745349458558:web:21511189c58d07dc76062f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var data = firebase.database();
  



