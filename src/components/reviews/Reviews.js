import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
//(review => console.log(review));
    let reviews; //= this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
    let reviewList;
    if (this.props.reviews ){
      reviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId);
      reviewList = reviews.map(review => <Review review={review} key={review.id} delete={this.props.delete} />);
    }
    // let reviewList = reviews.map(review => <Review review={review} key={review.id} />);

    return (
      <ul>
       {reviewList}
      </ul>
    );
  }
};

export default Reviews;
