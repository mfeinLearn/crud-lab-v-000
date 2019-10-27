import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    let restaurants = this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id}/>);

    return(
      <ul>
        Restaurants Component
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
