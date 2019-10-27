TASK:

Implement a ***Yelp-like*** application with restaurants and reviews.


Practicing:
  a) creating
  b) removing various items

The two different /resources:
  1. each restaurant having many reviews
  2. reviews belonging to a restaurant

___Container Components:To connect to the redux store____
   1. Restaurants
   2. Reviews

Steps for this lab:
  1. []  Create `RestaurantsContainer` Component
    a) connect to Redux and pass the appropriate props down to its children.
  2. [x] create `RestaurantInput` Component
    __note__:
     [x] for input forms
      - only use basic input element
    a) allow a user to create new restaurants
  3. [] create `Restaurants` component
    a) displays a list of restaurants
  4. [] create `Restaurant` component
    a) responsible for each restaurant
      i) contains the button to delete
        a) Users can delete restaurants
          -  give each restaurant an id
            . use cuid to create a unique id

  -------------------------------------
    __Question__
  5. [] create `reviews` Component/resource
    a) Users can create and delete a review  
      __note__: for input forms
        - only use basic input element
      i) that is specifically associated with the related restaurant
        - Restaurant -< Reviews
          . display reviews underneath the related restaurant
            - `ReviewsContainer` nested within `Restaurant`
                like this:
                    Restaurant
                     ReviewsContainer

  -------------------------------------
  6. [] Update an item
    a) add button
      i) with each restaurant and review that was clicked
        - will open an input where a user could modify the contents of a specific item.
        __note__: for input forms
          - only use basic input element
    b) when sent to reducer
      i) instead of *filtering* you might consider *mapping*
        -  i.e. an action where all reviews are returned, but if a review's id matches, the newly submitted content is returned instead.




    __Question__

      1. restaurant data in Redux
        a) only - text and id keys

      2. How does the store looks like?
state = {
  restaurants = {
    reviews = {
    text: , //for review content
    restaurantId: , //specific restaurant id
    id: // unique to the review itself

    },
    reviews = {
    text: , //for review content
    restaurantId: , //specific restaurant id
    id: // unique to the review itself
    }
  }
}

    -----------------------------------------------------------
__note/Question__
store = {
  `restaurantName`: ,
  `otherRestaurantData`: '',
  restaurantId: cuid()
}
    -----------------------------------------------------------

  Conclusion:
  __note__
    - only Containers have code for the redux store/ redux!!









  - [implement container components]
    -----------------------------------------------------------
    class Restaurants extends Component

    export default connect(mapStateToProps)(Restaurants);
    -----------------------------------------------------------
    class Reviews extends Component

    export default connect(mapStateToProps)(Reviews);
    -----------------------------------------------------------
