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
const firebaseConfig = {
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
//for search query
var number = 2;
// var apiKey = "633d97f5523a4f86a9b9fc20e109b345";
// var apiKey = "686bf77ea40940eca86366d063e7137d";
// var apiKey="d8bfae19e3cf4d1fbebcc79439a972e3"
var apiKey = "acf6511091b54a129bdeffcb449d025f";
var idNum;
var ingredientsEntered = [ ];
var ingredients;
var query = "noodles";
var dietType;

//for recipe card generation
var recipeCard;
var recipeImg = "";
var title = "";
var readyInMinutes = "";
var healthScore = "";
var summary = "";
var sourceUrl = "";
var num;
//user needs to provide a search query, then has the option to add ingredients or a diet type they would like the recipes to follow. On click of the search button, an array will be made for the ingredients (or we could just turn it into a string, the new search needs multiple params in a string separated by a ,) and will be made for the diet types. search will be run
$("#search-button").on("click", function() {
    event.preventDefault();

    query = $("#search-box").val().trim();
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

    dietType = [ ];
    $.each($("input[name='dietType']:checked"),
    function (){
        dietType.push($(this).val());
    });

    $("input[name='dietType").prop("checked", false);

    dietType.join(",");

    ingredientsEntered.push(
        ingredientOne,
        ingredientTwo,
        ingredientThree,
        ingredientFour,
        ingredientFive
    );

    ingredients = ingredientsEntered.filter(function(ingredient){
        if (ingredient == ""){
            return false;
        }
        else {
            return true;
        }
    });
    console.log(ingredients, dietType, query);

    //array into a string separated by comma
    ingredients.join(",");

    //search for recipes
    searchComplex();
    
});

//search recipe complex
//will search for recipes. Required params: query, apiKey. Optional dietType, ingredients. Number could be set to something, could give user the option to change it if we want to.
//will need to change the query url depending on which params have values. If no diet was added we don't nee the "diet=" in the query url
function searchComplex(){
    var queryURL = "https://api.spoonacular.com/recipes/complexSearch?query=" + query + "&dietType=" + dietType + "&includeIngredients=" + ingredients + "&number=" + number + "&apiKey=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){ 
        console.log(response);
        $("#recipeCards").html("");
        for (var i = 0; i < response.results.length; i++) {
            idNum = response.results[i].id;
            getRecipesById();
        }
    });
};

//get recipes
function getRecipesById() {
    var queryURL ="https://api.spoonacular.com/recipes/informationBulk?ids=" + idNum + "&apiKey=" + apiKey;
    return $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        recipeImg = response[0].image;
        title = response[0].title;
        readyInMinutes = response[0].readyInMinutes;
        healthScore = response[0].healthScore;
        summary = response[0].summary;
        sourceUrl = response[0].sourceUrl;
        idNum=response[0].id
        
        // createRecipeCard();
        return createRecipeCard();
    });
}

// random recipe
//will generate one random recipe and display it on the page
function randomRecipe() {
    var queryURL = "https://api.spoonacular.com/recipes/random?number=1&apiKey=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        $("#recipeCards").html("");
        recipeImg = response.recipes[0].image;
        title = response.recipes[0].title;
        readyInMinutes = response.recipes[0].readyInMinutes;
        healthScore = response.recipes[0].healthScore;
        summary = response.recipes[0].summary;
        sourceUrl = response.recipes[0].sourceUrl;
        idNum = response.recipes[0].id
        createRecipeCard();
        valueReset();
    });
}

function valueReset(){
    ingredientsEntered = [ ];
    ingredients = "";
    dietType = "";
    query = "noodles";
    recipeImg = "";
    title = "";
    readyInMinutes = "";
    healthScore = "";
    summary = "";
    sourceUrl = "";
}

function createRecipeCard(){
    recipeCard = $('<div class="card recipe-card" id="' + idNum + '"><div class="recipe-image"><img src="'+ recipeImg + '" class="card-img-top" alt="Picture of Recipe"></div><div class="card-body"><h5 class="card-title" id="title">' + title + '</h5><p><i class="fas fa-clock" style="color: #f7941e;"></i> Ready in <span id="ready-time">' + readyInMinutes + '</span> minutes.</p><p>Health Score <span id="health-score">' + healthScore +'</span></p><p class="card-text" id="summary">'+ summary +'</p><a id="card-t"><a href="'+ sourceUrl +'" class="btn btn-primary" id="fullRecipe">View Full Recipe</a><a class="btn add-to-favorites-button" data-toggle="tooltip" data-placement="right" title="Add to Favorites"><i class="far fa-star" data-state="false" data-recipeNum="' + idNum + '"></i></a></p></div></div>');
    $("#recipeCards").append(recipeCard);
    $(recipeCard).find(".fa-star").click(function() {
        $(this).toggleClass("fas far");

        var IDnum = $(this).attr("data-recipeNum");

        var state = $(this).attr("data-state");
        if (state === "false"){
            $(this).attr("data-state", "true");
            data.ref().push(IDnum);
        }
        else {
            $(this).attr("data-state", "false");
            var favID = $(this).attr("id");
            var deleteFav = firebase.database().ref(favID);
            deleteFav.remove();
            $("#"+IDnum).empty();
        }
    })
    valueReset();
    return recipeCard;
};
    
    //if the img is in the array then delete it
    //if it isnt in the array then add it
    //this is only pushing the star... need to have it push the gif in the array... 
    
    

//favRecipes is a function that will be called when the fav. page is loaded (html body tag calls this function) This is set up to create a recipe card with a recipe idNum. 
function favRecipes(){
    //saved recipes id numbers will be pulled from firebase 
    //and below will create the recipes saved
    data.ref().on('child_added', function(snapshot) {
        console.log("this is happening");
        idNum = snapshot.val();

        var uid = snapshot.key;

        getRecipesById().then(function(recipeCard) {
            const favoriteButton = $(recipeCard).find(".fa-star");

            favoriteButton.attr("id", uid);
            favoriteButton.attr("data-state", "true");
            favoriteButton.attr("class", "fas fa-star");
            
            $(recipeCard).find(".fa-star").attr("id", uid);
        })
    });
};