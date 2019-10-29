
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    // debugger
         const restaurant = {
           id: cuid(),
           text: action.text
         }
      return { ...state, restaurants: [...state.restaurants, restaurant] }
    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }
    case "UPDATE_RESTAURANT":
      console.log(state.restaurants)
      let theRestaurant = state.restaurants.find(action.id)
      theRestaurant.text=action.text
      // const aRestaurant = {
      //   id: action.id,
      //   text: theRestaurant.text
      // }
      console.log(action)
        return {restaurants: state.restaurants.map(rest => {
          if (rest.id === action.id) {
            return { ...state, restaurants: [...state.restaurants, theRestaurant] }
          }
        })
      }
      return state;
    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return {...state, reviews: [...state.reviews, review]};
    case "DELETE_REVIEW":
      return {reviews: state.reviews.filter(review => review.id !== action.id) }
    // case "UPDATE_REVIEW":
      // if(review.id  === action.id){
      //
      //   return {reviews: state.reviews }
      // }
      // return {reviews: state.reviews.map(review => review.id !== action.id) }
      // alert("inside of UPDATE_REVIEW");
      // return state;
    default:
      return state;
  }
};
