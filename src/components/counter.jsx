import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 1,
    tags : ['tag1','tag2','tag3'],
    address: {
      name: 'Dhaka'
    }
  }
  render(){
    const today = new Date().toDateString();

    return (
      <div className="p-4">
        <span className={ this.getBadgeClass() }>{ this.formatCount() }</span> <button className="btn btn-sm btn-secondary">Increment</button>
        <ul>
          {/* { this.state.tags.map( (tag,index) => <li key={ index }>{ tag }</li>) } */}
          {this.rederTag()}
        </ul>
      </div>
    );
  }

  rederTag() {
    if(this.state.tags.length === 0) return <p style={{ color:'red' }}>Ther is no tag</p>
    return (
      <ul  className="list-group">
        { 
          this.state.tags.map((tag,index)=> 
          <li className="list-group-items">{tag}</li>
          )
        }
      </ul>
    );
  }

  getBadgeClass() {
    let classes = "mr-4 badge badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;