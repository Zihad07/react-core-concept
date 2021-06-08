import React ,{Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id:1, value:0},
            {id:2, value:1},
            {id:3, value:2},
        ]
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

    render(){
        return (
        <div className="Counters" >
            <button onClick={this.handleReset} className="btn btn-primary mx-4 my-2">Reset</button>
            { this.state.counters.map( counter => (
            <Counter key={counter.id} counters={counter} onDelete={ this.handleDelete } onIncrement={this.handleIncremnt}></Counter>
            ))}
           
        </div>
        );
    }
}

export default Counters;