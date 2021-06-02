import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 2,
    tags : ['tag1','tag2','tag3'],
    address: {
      name: 'Dhaka'
    }
  }

  // Bind event hander by constructor or user arrow function in method
  // constructor(){
  //   super()
  //   // console.log('constructor', this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement(){
  //   console.log('increment', this);
  // }
  handleIncrement = () =>{
    // console.log('increment', this);
    // this.state.count += 1;
    this.setState({ count : this.state.count + 1})
  }

  handleDercrement= () => {
    // this.state.count -= 1;
    if(this.state.count != 0){
      this.setState({ count: this.state.count -1 });
    }

  }
  showProduct = ( product )=> {
    console.log(product)
  }
  render(){
    const today = new Date().toDateString();

    return (
      <div className="p-4">
        <span className={ this.getBadgeClass() }>{ this.formatCount() }</span> 
        <button className="btn btn-sm btn-secondary mr-2" onClick={ this.handleIncrement }>Increment</button>
        <button className="btn btn-sm btn-info mr-2" onClick={ this.handleDercrement }>Decrement</button>
        <button className="btn btn-sm btn-primary" onClick={ ()=> this.showProduct({id:1,name:'Apple'}) }>Show Product</button>
       
      </div>
    );
  }

  

  getBadgeClass = () => {
    let classes = "mr-4 badge badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
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