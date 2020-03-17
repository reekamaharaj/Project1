## Things that need to be done

# Front End
**Things to update based on API parameters**
Diet types
* Gluten Free
* Ketogenic
* Vegetarian
* Vegan
* Paleo
*could add but don't necessarily have to*
* Primal
* Whole30
* Pescetarian
* Lacto-Vegetarian
* Ovo-Vegetarian

Intolerances
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
* Wheat

# Back End
- function to search with multiple parameters, diet and ingredients
- make sure the function pulls the data we want
- format data to be pushed to front end
- list API and how that will work with recipes
- function for the favorites to be saved
- function to get values from the filters

**Parameters API returns we might want to display and pull**
- Random
    - weightWatchersSmartPoints
    - sourceUrl
    - aggregateLikes
    - sourceName
    - title
    - image
    - summary
    - instructions

- Search
Does not return the recipe if the user is interested then look up by id
    - title
    - readyInMinutes
    - image
    - servings
    - id

- Meal Plan
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
        - sunday

- Receipt by ingredients
 - 0
 - id
 - title
 - image

- Receipt by Id
    -weightWatcherSmartPoint
    - sourceUrl
    - aggregateLikes
    - spoonacularScore
    - sourceName
    - title
    - readyInMinutes
    - images
    - summary
    - instructions
    - diets

