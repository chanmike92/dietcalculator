import React from 'react';
import Calculator from './calculator';

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
      showCalc: false,
    };

    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit() {

    this.setState({
      showCalc: true
    });


  }

  render() {

    const calc = this.state.showCalc ? <Calculator height={ this.state.height }
          weight={ this.state.weight }
          age={ this.state.age }
          gender={ this.state.gender }
          weightval={ this.state.weightval }
          heightval={ this.state.heightval }
          activity={ this.state.activity }/>
        :
        "";
    return (
        <div>
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
          </form>
          <div class='special-conditions'>
            <div class="activity">
              <button onclick="myFunction()" class="dropbtn">Dropdown</button>
              <div id="myDropdown" class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div class="weight-trend">
              <button onclick="myFunction()" class="dropbtn">Dropdown</button>
              <div id="myDropdown" class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div class="conditions">
              <button onclick="myFunction()" class="dropbtn">Dropdown</button>
              <div id="myDropdown" class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </div>
            <button onClick={ this.handleSubmit } name="button">Calculate</button>
            { calc }


        </div>

    );
  }
}

export default DietCalculator;
