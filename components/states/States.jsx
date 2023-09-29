import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      states: window.models.states(),
      updatedStates: [],
      inputValue: ''
    };

    this.handleChangeBound = event => this.handleChange(event);
  }

  // When text is inputted, filter state array to only include matching substring
  handleChange(event) {
    this.setState({ inputValue : event.target.value });
    let results = this.state.states.filter((str) => str.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState({ updatedStates: results });
  }

  render() {

    // If there's an input, display filtered states. Otherwise, display all.
    let stateResults;
    if (this.state.inputValue.length !== 0){
      stateResults = (
        this.state.updatedStates.map((s) => (
          <li key={s}>{s}</li>
        ))
      );
    } else {
      stateResults = (
        this.state.states.map((s) => (
          <li key={s}>{s}</li>
        ))
      );
    }

    return (
      <div className="states-container">
        <div className="states-input-container">
          <form>
            <label htmlFor="stateInput">Search for states:</label>
            <input type="text" id="stateInput" placeholder="Enter state here" onChange={(e) => {this.handleChangeBound(e);}}/>
          </form>
        </div>
        <div className="states-display-container">
          <h1>States</h1>
          <hr/>
          <div className="states-list-container">
            <ol>
              {stateResults}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default States;
