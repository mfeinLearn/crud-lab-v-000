import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let restaurants;
    if (this.props.restaurants ){
      restaurants = this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id}  delete={this.props.delete}/>);
    }

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
