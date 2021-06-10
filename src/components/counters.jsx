import React ,{Component} from "react";
import Counter from "./counter";

class Counters extends Component {


    render(){
        return (
        <div className="Counters" >
            <button onClick={this.props.onReset} className="btn btn-primary mx-4 my-2">Reset</button>
            { this.props.counters.map( counter => (
            <Counter key={counter.id} counters={counter} onDelete={ this.props.onDelete } onIncrement={this.props.onIncrement}></Counter>
            ))}
           
        </div>
        );
    }
}

export default Counters;