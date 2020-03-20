## Things that need to be done
-Firebase for favorites

# Front End
**Things to update based on API parameters**
Diet types
* Gluten Free
* Ketogenic
* Vegetarian
* Vegan
* Paleo
<!-- *could add but don't necessarily have to*
* Primal
* Whole30
* Pescetarian
* Lacto-Vegetarian
* Ovo-Vegetarian -->

<!-- ** maybe Intolerances 
* Dairy
* Egg
* Gluten
* Grain
* Peanut
* Seafood
* Shellfish
* Soy
* Sulfite
* Tree Nut
* Wheat -->

# Back End
- function to search with multiple parameters, diet and ingredients
- make sure the function pulls the data we want
- format data to be pushed to front end
- list API and how that will work with recipes
- function for the favorites to be saved
- function to get values from the filters

**Parameters API returns we might want to display and pull**
- All Recipes 
    <!-- - weightWatchersSmartPoints **maybe -->
    - sourceUrl -> full recipe button will open this
    - health score -> Need to find scale (div)
    - title -> name of recipe (div)
    - image -> (div)
    - summary -> (div)
    - readyInMinutes-> (div)


<!-- - Search
Does not return the recipe if the user is interested then look up by id
    - title
    - readyInMinutes
    - image
    - servings
    - id -->

<!-- - Meal Plan
    - week
        - monday
            - meals
                - 0 
                    - id
                    - title
                    - readyInMinutes
                    - image
                    - link
                - 1
                - 2 
            - nutrients
                - calories
                - protein
                - fat
                - carbohydrates
        - tuesday
        - wednesday
        - thursday
        - friday
        - saturday
        - sunday -->

Request (adding raw items)
curl -X POST "https://graph.whisk.com/v1/lists" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <User-Access-Token>" \
-d '{
  "name": "My Shopping List",
  "rawItems": [
    "200g pack smoked salmon",
    "2 slices sharp cheddar cheese",
    "1 tbsp salt and olive oil to serve"
  ]
}'
Request (adding items)
curl -X POST "https://graph.whisk.com/v1/lists" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <User-Access-Token>" \
-d '{
  "name": "My Shopping List",
  "items": [
    {
      "quantity": 200,
      "unit": "g",
      "name": "smoked salmon"
    },
    {
      "quantity": 2,
      "unit": "slices",
      "name": "cheddar cheese",
      "comment": "extra mature"
    }
  ]
}'
Request (adding recipes)
curl -X POST "https://graph.whisk.com/v1/lists" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer <User-Access-Token>" \
-d '{
  "name": "My Shopping List",
  "recipes": [
    {
      "id": "https://www.bbcgoodfood.com/recipes/omelette-pancakes-tomato-pepper-sauce",
      "scale": 0.5
    },
    {
      "id": "9773cb7eca5d11e7ae7e42010a9a0035"
    }
  ]
}'
Response
ATTRIBUTE		TYPE		DESCRIPTION
id*		string		
name*		string		
primary		boolean		
createdTime*		datetime		
The time the Shopping List was created.

updatedTime*		datetime		
items		array [ShoppingListItemElement]		
ShoppingListItemElement
ATTRIBUTE		TYPE		DESCRIPTION
quantity		double		
Item quantity

unit		string		
Item unit (e.g. gram, ml)

name*		string		
Item name (e.g. potato)

comment		string		
brand		string		
analysis		SLItemAnalysis		
recipe		string		
recipeOrdering		integer		
createdTime		datetime		
combined		array		
SLItemAnalysis
ATTRIBUTE		TYPE		DESCRIPTION
canonicalName		string		
Unique normalised product name

category		ProductCategory		
ProductCategory
ATTRIBUTE		TYPE		DESCRIPTION
name*		string		
Sample Response
{
  "id": "ef610b5c0e294ef6a54931738d79f55d",
  "name": "My Shopping List",
  "primary": true,
  "createdTime": "2017-12-07T20:06:14+0000",
  "updatedTime": "2017-12-07T20:06:14+0000",
  "items": [
    {
      "id": "c484682c-66b7-4fa9-82b6-9ef34dec9fc7",
      "quantity": 200,
      "unit": "g",
      "name": "smoked salmon",
      "analysis": {
        "canonicalName": "SMOKED SALMON",
        "category": {
          "name": "MEATS AND SEAFOOD"
        }
      },
      "recipe": "9773cb7eca5d11e7ae7e42010a9a0035",
      "recipeOrdering": 0
    },
    {
      "id": "bb47bf7b-060d-49f0-9091-bada6b695019",
      "quantity": 4,
      "name": "eggs",
      "comment": "large",
      "analysis": {
        "canonicalName": "EGG",
        "category": {
          "name": "DAIRY AND EGGS"
        }
      },
      "recipe": "9773cb7eca5d11e7ae7e42010a9a0035",
      "recipeOrdering": 1
    }
  ],
  "recipes": [
    {
      "id": "9773cb7eca5d11e7ae7e42010a9a0035",
      "name": "Omelette pancakes with tomato & pepper sauce",
      "url": "https://www.bbcgoodfood.com/recipes/omelette-pancakes-tomato-pepper-sauce"
    }
  ]
}

