import React, { Component } from 'react';

class Counter extends Component {
  


  componentDidUpdate(prevProps, prevState){
    console.log('prevProps : ', prevProps);
    console.log('prevState : ', prevState);
    if(prevProps.counters.value !== this.props.counters.value) {
      // Make Ajax call
    }
  }

  componentWillUnmount() {
    console.log('counter-unmount');
  }

  render(){
    // const today = new Date().toDateString();
    // console.log("props :  ", this.props);
    console.log('Counter-render');
    return (
      <div className="p-4">
        <h4>Counter# {this.props.counters.id}</h4>
        <div className="row">
          <div className="col-1">
            <span className={ this.getBadgeClass() }>{ this.formatCount() }</span> 
          </div>
          <div className="col">
            <button className="btn btn-sm btn-secondary mr-2" onClick={ ()=> this.props.onIncrement(this.props.counters) }> + </button>
            <button className= "btn btn-sm btn-danger mr-2" disabled={this.buttonDisable()} onClick={()=> this.props.onIncrement(this.props.counters, true)}> - </button>
            <button className="btn btn-sm btn-danger" onClick={ ()=> this.props.onDelete(this.props.counters.id)}>Delete</button>

          </div>
        </div>
       
      </div>
    );
  }

  

  getBadgeClass = () => {
    let classes = "badge badge-";
    classes += (this.props.counters.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counters;
    return value === 0 ? 'Zero' : value;
  }

  buttonDisable() {
    const { value } = this.props.counters;
    return value === 0 ? "disabled": '';
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