import React, {Component} from 'react';
class Counter extends Component{
    state={
        count:0,
        tags: [ ]
    };

    handleIncrement=()=>{
        //this.state.count++; won't work
        this.setState({count: this.state.count + 1})
    };

    render(){
        return (
        <div> 
             <span className={this.getBudgeClass()}>{this.formatCount()}</span>
             <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
         </div>);
    }

    getBudgeClass(){
        let classes = "badge m-2 badge-";
        classes+= this.state.count===0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
}



export default Counter;