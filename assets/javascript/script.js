//random recipe button
$("#random-button").on("click", function(event) {
    randomRecipe();
});

//Bootstrap Tooltips
$(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

//Firebase
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

//variables
let dietType = [ ];
let number = 1;
let apiKey = "633d97f5523a4f86a9b9fc20e109b345";
let ingredient = "carrot";
let idNum = "1051408";
let ingredients = [ ];

$("#search-button").on("click", function() {
    event.preventDefault();

    var ingredientOne = $("#ingredient-input").val().trim();
    $("#ingredient-input").val("");
  
    var ingredientTwo = $("#ingredient2-input").val().trim();
    $("#ingredient2-input").val("");
  
    var ingredientThree = $("#ingredient3-input").val().trim();
    $("#ingredient3-input").val("");
  
    var ingredientFour = $("#ingredient4-input").val().trim();
    $("#ingredient4-input").val("");
  
    var ingredientFive = $("#ingredient5-input").val().trim();
    $("#ingredient5-input").val("");
  
    var glutenfree = $("#gluten-free-toggle").val();
    $("#glutenfree").val("");

    var ketogenic = $("#ketogenic-toggle").val();
    $("#ketogenic").val("");

    var vegetarian = $("#vegetarian-toggle").val();
    $("#vegetarian").val("");

    var vegan = $("#vegan-toggle").val();
    $("#vegan").val("");

    var paleo = $("#paleo-toggle").val();
    $("#paleo").val("");

    ingredients.push(
        ingredientOne,
        ingredientTwo,
        ingredientThree,
        ingredientFour,
        ingredientFive
    );
    dietType.push(
        glutenfree,
        ketogenic,
        vegetarian,
        vegan,
        paleo
    )
    searchComplex();
});

//search recipe complex
function searchComplex(){
    var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=soup&diet=vegan&includeIngredients=tomato&intolerances=peanut%2Cshellfish&ranking=2&number=2&apiKey=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    });
    console.log(response);
    
    $("#title").append(response.results[0].title);
    $(".recipe-image").append(response.results[0].image);
    $("#fullRecipe").append(response.results[0].sourceURL);
    idNum = response.results[0].id;
    getRecipesById();
}

//get recipes
function getRecipesById() {
    var queryURL ="https://api.spoonacular.com/recipes/" + idNum +"/information?apiKey=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#ready-time").html(response.results[0].readyInMinutes);
        $("#health-score").append(response.results[0].healthScore);
    });
}

// random recipe
function randomRecipe() {
    var queryURL = "https://api.spoonacular.com/recipes/random?number=" + number + "&apiKey=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        $("#ready-time").html(response.recipes[0].readyInMinutes);
        $("#title").append(response.recipes[0].title);
        $(".recipe-image").append(response.results[0].image);
        $("#fullRecipe").append(response.recipes[0].sourceURL);
        $("#health-score").append(response.recipes[0].healthScore);

    });
}

//whisk
// $.ajax({
//     url: "https://graph.whisk.com/v1/lists",
//     method: "GET",
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//         "Authorization": "Bearer " + "VGTCDebdmPO7aDx9Rm4TCeXo71F5LszWVTR8HNJtR323KG1suU9LaqlrvuK2F5SG"

//     }

// }).then(function(response){
//     console.log(response);
// })
