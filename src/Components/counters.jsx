import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleIncrement=(counter)=>{
    const newCounters=[...this.state.counters];
    const index= newCounters.indexOf(counter);
    newCounters[index]={...counter};
    newCounters[index].value++;
    this.setState({counters:newCounters});
  }

  handleDelete = (counterId) => {
    let newCounters = this.state.counters.filter((counter) => {
      return counter.id != counterId;
    });
    this.setState({ counters: newCounters });
  };

  handleReset=()=>{
    const counters=this.state.counters.map(counter=>{
      counter.value=0
    return counter;
       });
       this.setState({counters});
  }

  render() {
    return (
      <div>
        <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
