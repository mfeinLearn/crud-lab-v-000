import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  checkIfRestaurantAddOrUpdate = () => {
    if (this.props.updateRestaurant === true ) {
      this.setState({
        text: this.state.text,
      });
    }
    this.props.addRestaurant(this.state.text);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.checkIfRestaurantAddOrUpdate()
    //this.props.addRestaurant(this.state.text);
    this.setState({
      text: ''
    });
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }

};

export default RestaurantInput;
