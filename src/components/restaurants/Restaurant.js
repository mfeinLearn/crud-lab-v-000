import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import RestaurantInput from './RestaurantInput'

class Restaurant extends Component {
  state = {
    updateHasBeenPressed: false
  }

  handleOnClick(event) {
    event.preventDefault()
    this.setState({
      updateHasBeenPressed: true
    });
  }

  // updateRender = () => {
  //   if (this.state.updateHasBeenPressed === true){
  //     return (
  //       <RestaurantInput />
  //     );
  //   }
  // }

  renderCorrectOutput = () => {
    return this.state.updateHasBeenPressed === true ? <RestaurantInput updateRestaurant={this.state.updateHasBeenPressed}  /> : this.props.restaurant.text;
  }



  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {this.renderCorrectOutput()}
          <button  onClick={() => this.props.delete(this.props.restaurant.id)}> X </button>
          <button  onClick={(event) => this.handleOnClick(event)}> Update </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
