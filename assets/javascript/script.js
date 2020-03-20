// on click of the button to make a shopping list. A modal will popup unless the screen is too small, and then it will open a new tab. uses whisk API, allows user to login to a whisk account if they want to
$("#list").on("click", function(event){
    whisk.queue.push(function() {
        whisk.shoppingList.viewList({
            styles: {
                type: 'modal',
            },
        });
    });
})

//random recipe button will generate random recipe
$("#random-button").on("click", function(event) {
    randomRecipe();
});

//Bootstrap Tooltips needed for data toggle
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
var dietType = [ ];
var number = 1;
var apiKey = "633d97f5523a4f86a9b9fc20e109b345";
var ingredient = "carrot";
var idNum = "1051408";
var ingredients = [ ];
var title;
var image;
var search;

//user needs to provide a search query, then has the option to add ingredients or a diet type they would like the recipes to follow. On click of the search button, an array will be made for the ingredients (or we could just turn it into a string, the new search needs multiple params in a string separated by a ,) and will be made for the diet types. search will be run
$("#search-button").on("click", function() {
    event.preventDefault();

    search=$("#search-box").val().trim();
    $("#search-box").val("");


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

    var query = $("#search-box").val().trim();
    $("#search-box").val("");

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
        search,
        ingredientOne,
        ingredientTwo,
        ingredientThree,
        ingredientFour,
        ingredientFive
    );

    //array into a string separated by comma
    ingredients.join();
    dietType.push(
        glutenfree,
        ketogenic,
        vegetarian,
        vegan,
        paleo
    );

    //array into a string separated by comma
    dietType.join();

    //search for recipes
    searchComplex();
    
});

//search recipe complex
//will search for recipes. Required params: query, apiKey. Optional dietType, ingredients. Number could be set to something, could give user the option to change it if we want to.
//will need to change the query url depending on which params have values. If no diet was added we don't nee the "diet=" in the query url
function searchComplex(){
    var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + ingredients +  "2&apiKey=" + apiKey;

    //var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&diet=" + dietType + "&includeIngredients=" + ingredients + "&iranking=2&number=" + number + "&apiKey=" + apiKey;


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    
        $("#title").append(response.results[0].title);
        $(".recipe-image").append(response.results[0].image);
        $("#fullRecipe").append(response.results[0].sourceURL);
      
        $("#title2").append(response.results[1].title);
        $(".recipe-image").append(response.results[1].image);
        $("#fullRecipe2").append(response.results[1].sourceURL);
      
        $("#title3").append(response.results[2].title);
        $(".recipe-image").append(response.results[2].image);
        $("#fullRecipe3").append(response.results[2].sourceURL);
        idNum = response.results[0].id;
        getRecipesById();
         
       

      
  
    
    });



   
   
};

//get recipes
        $("#fullRecipe").append(response.results[0].sourceURL);
        idNum = response.results[0].id;
        getRecipesById();
    });
}

function getRecipesById() {
    var queryURL ="https://api.spoonacular.com/recipes/informationBulk?ids=" + idNum + "&apiKey=" + apiKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#ready-time").html(response[0].readyInMinutes);
        $("#health-score").append(response[0].healthScore);
        $("#fullRecipe").append(response[0].sourceUrl);
        $("#summary").append(response[0].summary);
        $("#fullRecipe").html("<a href='" + response[0].sourceUrl  + "' class='btn btn-primary' id='fullRecipe'>View Full Recipe</a>");

    });
    
}



// random recipe
//will generate one random recipe and display it on the page
function randomRecipe() {
    var queryURL = "https://api.spoonacular.com/recipes/random?number=" + number + "&apiKey=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        $("#title").append(response.recipes[0].title);
        $(".recipe-image").append(response.recipes[0].image);
        $("#health-score").append(response.recipes[0].healthScore);
        $("#fullRecipe").html("<a href='" + response.recipes[0].sourceUrl  + "' class='btn btn-primary' id='fullRecipe'>View Full Recipe</a>");
        $("#summary").append(response.recipes[0].summary);
        
    });
    
}

