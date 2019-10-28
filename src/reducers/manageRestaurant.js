
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
    // case "UPDATE_RESTAURANT":
      // if(restaurant.id  === action.id){
      //
      //   return {restaurants: state.restaurants }
      // }
      //   return {restaurants: state.restaurants.map(restaurant => restaurant.id !== action.id) }
      // alert("inside of UPDATE_RESTAURANT");
      // return state;
    case "ADD_REVIEW":
    console.log("inside add review:", action.review)
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
