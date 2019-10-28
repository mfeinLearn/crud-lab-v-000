import React, { Component } from 'react';

class Review extends Component {

  render() {
    const { review } = this.props

    return (
      <div>
        <li>
          {review.text}
        </li>
          <button  onClick={() => this.props.delete(this.props.review.id)}> X </button>
          <button  onClick={() => this.props.update(this.props.review.id)}> Update </button>
      </div>
    );
  }

};

export default Review;
