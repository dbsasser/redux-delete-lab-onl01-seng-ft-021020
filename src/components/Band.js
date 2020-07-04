import React, { Component } from 'react';

class Band extends Component {

  
  handleOnClick = () => {
    this.props.delete({type: "DELETE_BAND", id: this.props.id})
  }

  render() {
    return(
      <div>
        <li>{this.props.band} <button onClick={this.handleOnClick}>DELETE</button></li>
        {/* <button onClick={() => delete(band.id)}>DELETE</button></li> */}
      </div>
    );
  }
};

export default Band;
