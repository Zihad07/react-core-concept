import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar.jsx'
import Counters from './components/counters.jsx';

class App extends Component{
  state = {
      counters: [
          {id:1, value:0},
          {id:2, value:1},
          {id:3, value:2},
      ]
  }

//   it called once when component create
  constructor( props ){
      super( props );
      console.log('App-constructor', this.props);
  }

  componentDidMount() {
    //   ajax call
    console.log('app-mount');
  }

  handleDelete = (id )=> {
      console.log('the handle delete.',id);
      const  counters  = this.state.counters.filter( c=> c.id !== id);
      this.setState({counters});
  }

  handleReset=()=> {
      const counters = this.state.counters.map( c => {
          c.value = 0;
          return c;
      });
      this.setState({counters});
  }
  handleIncremnt = (counter, decrement= false) => {
      // console.log(counter);
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      // console.log(index);
      counters[index] = {...counter};
      decrement ? counters[index].value-- : counters[index].value++ ;
      if(counters[index].value <= 0) { counters[index].value = 0;}
      this.setState({counters});

  }
  render() {    
    console.log('App-render');  
    return(
      
      <React.Fragment>
        <NavBar totalCounter={ this.state.counters }>/</NavBar>
        <div className="container">
            <Counters counters={this.state.counters} onReset={this.handleReset} onIncrement={this.handleIncremnt} onDelete={this.handleDelete}></Counters>
        </div>
      </React.Fragment>
    );
  }
} 
export default App;




