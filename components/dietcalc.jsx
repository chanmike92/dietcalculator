import React from 'react';

class DietCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      weight: 0,
      age: 0,
      gender: "M",
      weightval: "lbs",
      heightval: "inches",
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

        case "F":
        this.setState({
          gender: "M"
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

          <form className="dietcalc">
            <label>Height
              <input type="number" name="height" value={ this.state.height } onChange={ this.handleInput("height")}></input>
              <input type="button" onClick={ this.handleSwitch(this.state.heightval) } value={ this.state.heightval }></input>
            </label>
            <label>Weight
            <input type="number" name="weight" value={ this.state.weight } onChange={ this.handleInput("weight")}></input>
            <input type="button" onClick={ this.handleSwitch(this.state.weightval) } value={ this.state.weightval }></input>
            </label>
            <label>Age
            <input type="number" name="age" value={ this.state.age } onChange={ this.handleInput("age")}></input>
            years
            </label>
            <label>Gender
              <input type="button" onClick={ this.handleSwitch(this.state.gender) } value={ this.state.gender }></input>
            </label>
            <label>Activity Level
            <input type="text" name="activity"></input>
            </label>

            <button type="submit" name="button">Calculate</button>
          </form>

    );
  }
}

export default DietCalculator;
