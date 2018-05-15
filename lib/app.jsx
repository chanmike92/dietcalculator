import React from 'react';

export default class DietCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      age: 0,
      gender: "",
      activity: 0,
    };
  }

  handleInput(input) {
    return (e) => {
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  handleSwitch(input) {
    return (e) => {
      switch (input) {
        case "inches":
        this.setState({
          heightval: "cm"
        });
        break;

        case "cm":
        this.setState({
          heightval: "inches"
        });
        break;

        case "lbs":
        this.setState({
          weightval: "kg"
        });
        break;

        case "kg":
        this.setState({
          weightval: "lbs"
        });
        break;

        case "M":
        this.setState({
          gender: "F"
        });
        break;
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {

    return (
      <div className='server-form-container'>
        <form onSubmit={this.handleSubmit} className="server-form">
          <form class="dietcalc">
            <label>Height
              <input type="text" name="height"></input>
              <input type="text" onClick={ this.handleSwitch(this.state.heightval) }>{ this.state.heightval }</input>
            </label>
            <label>Weight
            <input type="text" name="weight">{ this.state.height }</input>
            <input type="text" onClick={ this.handleSwitch(this.state.heightval) } value={this.state.weightval}></input>
            </label>
            <label>Age
            <input type="text" name="age">{ this.state.age }</input>
            years
            </label>
            <label>Gender
              <input type="text" onClick={ this.handleSwitch(this.state.gender) } value={ this.state.gender }></input>
            </label>
            <label>Activity Level
            <input type="text" name="activity"></input>
            </label>

            <button type="submit" name="button">Calculate</button>
          </form>
        </form>
      </div>
    );
  }
}
