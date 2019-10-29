import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    let restaurants;
    if (this.props.restaurants && this.props.restaurants.length > 0 ){
    console.log(this.props.restaurants)
      restaurants = this.props.restaurants.map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id}  update={this.props.update}  delete={this.props.delete}/>);
    }

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;
