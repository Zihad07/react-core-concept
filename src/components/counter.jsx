import React, { Component } from 'react';

class Counter extends Component {
  render(){
    const today = new Date().toDateString();
    return (
      <div>
        <div className="border shadow m-4 rounded text-center">
          <h1 className="py-2">Hello world - ({ today })</h1>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum repellat consequatur expedita, quis officiis dolorem nostrum corporis ex magni beatae.</p>
        </div>
      </div>
    );
  }
}

export default Counter;