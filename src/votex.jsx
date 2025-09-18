import React from 'react';
import './votex.css';

class Votex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { label: 'Dharmi', value: 0 },
        { label: 'Aman', value: 0 },
        { label: 'Megh', value: 0 }
      ]
    };
  }

  increment = (index) => {
    this.setState((prevState) => {
      const counters = prevState.counters.map((counter, i) =>
        i === index ? { ...counter, value: counter.value + 1 } : counter
      );
      return { counters };
    });
  };

  resetVotes = () => {
    this.setState({
      counters: this.state.counters.map(counter => ({ ...counter, value: 0 }))
    });
  };

  renderCounter(index) {
    const counter = this.state.counters[index];
    return (
      <div className="votex-counter" key={counter.label}>
        <h2>{counter.label}</h2>
        <p className="votex-value">Votes: {counter.value}</p>
        <button className="votex-increment" onClick={() => this.increment(index)}>+1 Vote</button>
      </div>
    );
  }

  render() {
    return (
      <div className="votex-container">
        <h1 className="votex-title">Vote Counting System</h1>
        <div className="votex-counters-row">
          {this.renderCounter(0)}
          {this.renderCounter(1)}
          {this.renderCounter(2)}
        </div>
        <button className="votex-reset" onClick={this.resetVotes}>Reset All</button>
      </div>
    );
  }
}

export default Votex;