import React, { Component } from 'react';

class Counter extends Component {
  




  render(){
    // const today = new Date().toDateString();
    // console.log("props :  ", this.props);
    return (
      <div className="p-4">
        <h4>Counter# {this.props.counters.id}</h4>
        <span className={ this.getBadgeClass() }>{ this.formatCount() }</span> 
        <button className="btn btn-sm btn-secondary mr-2" onClick={ ()=> this.props.onIncrement(this.props.counters) }>Increment</button>
        <button className="btn btn-sm btn-info mr-2" onClick={()=> this.props.onIncrement(this.props.counters, true)}>Decrement</button>
        <button className="btn btn-sm btn-danger mx-2" onClick={ ()=> this.props.onDelete(this.props.counters.id)}>Delete</button>
       
      </div>
    );
  }

  

  getBadgeClass = () => {
    let classes = "mr-4 badge badge-";
    classes += (this.props.counters.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counters;
    return value === 0 ? 'Zero' : value;
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

  demoReder() {
    if(this.state.tags.length === 0) return <p>There are no tag</p>

    return (
      <ul className="list-group">
        {
         this.state.tags.map((item,index)=> 
           <li className="list-group-item" key={index}>{item}</li>
         )
        }
      </ul>

    );
  }
}

export default Counter;