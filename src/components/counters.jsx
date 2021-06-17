import React ,{Component} from "react";
import Counter from "./counter";

class Counters extends Component {

    componentDidMount(){
        console.log('Counter-Mount');
    }
    render(){
        console.log('Counters-render');  
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
        <div className="Counters" >
            <button onClick={onReset} className="btn btn-primary mx-4 my-2">Reset</button>
            { counters.map( counter => (
            <Counter key={counter.id} counters={counter} onDelete={ onDelete } onIncrement={onIncrement}></Counter>
            ))}
           
        </div>
        );
    }
}

export default Counters;