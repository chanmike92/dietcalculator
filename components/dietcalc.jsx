import React from 'react';
import Calculator from './calculator';

class DietCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: "",
      age: "",
      gender: "M",
      weightval: "lbs",
      heightval: "inches",
      activity: "",
      showCalc: false,
    };

    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validKeys(e) {
    const valid = {1: true, 2: true, 3: true, 4: true, 5: true,
      6: true, 7: true, 8: true, 9: true, 0: true, ".": true};
    if (valid[e.key]) {

    } else {

      e.preventDefault();
    }
  }

  handleInput(input) {
    return (e) => {
      if (e.currentTarget.value === "") {

        this.setState({
          [input]: ""
        });
      } else {
      // if (this.validKeys(e.keyCode)) {
      const inputVal = parseFloat(e.currentTarget.value).toFixed(2);
      console.log(inputVal);
      switch (input) {

        case "age":
        // if (e.keyCode !== 46) {
        this.setState({
          // [input]: Math.round(Number(String(this.state[`${input}`]).concat(e.key)))
          [input]: Math.round(inputVal)
          });
        break;
        default:
        this.setState({
          [input]: Math.round(inputVal * 100) / 100
          });
        }
        }
      };
    }






  handleSwitch(input) {
    return (e) => {

      switch (input) {
        case "inches":
        this.setState({
          heightval: "cm",
          height: Math.round(this.state.height * 2.54 * 100) / 100
        });
        break;
//1 kg = 2.204 lbs || 1 lb = 0.4536 kg
        case "cm":
        this.setState({
          heightval: "inches",
          height: Math.round(this.state.height * 0.3937 * 100) / 100,
        });
        break;

        case "lbs":
        this.setState({
          weightval: "kg",
          weight: Math.round(this.state.weight * 0.4536 * 100) / 100
        });
        break;

        case "kg":
        this.setState({
          weightval: "lbs",
          weight: Math.round(this.state.weight * 2.204 * 100) / 100
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

    const height = this.state.heightval === 'inches' ?  Math.round(this.state.height * 100) / 100 : Math.round(this.state.height * 0.3937 * 100) / 100
    const weight = this.state.weightval === 'lbs' ? Math.round(this.state.weight * 100) / 100 : Math.round(this.state.weight * 2.204 * 100) / 100

    const calc = this.state.showCalc ? <Calculator height={ height }
          weight={ weight }
          age={ this.state.age }
          gender={ this.state.gender }
          weightval={ this.state.weightval }
          heightval={ this.state.heightval }
          activity={ this.state.activity }/>
        :
        "";
    return (
        <div className='app'>
          <form className="dietcalc">
            <label>Height
              <input type="number" name="height" value={ this.state.height } placeholder={ 0 } onChange={ this.handleInput("height") } onKeyPress={ (e) => this.validKeys(e) }></input>
              <input type="button" onClick={ this.handleSwitch(this.state.heightval) } value={ this.state.heightval }></input>
            </label>
            <label>Weight
            <input type="number" name="weight" value={ this.state.weight } placeholder={ 0 } onChange={ this.handleInput("weight") } onKeyPress={ (e) => this.validKeys(e) }></input>
            <input type="button" onClick={ this.handleSwitch(this.state.weightval) } value={ this.state.weightval }></input>
            </label>
            <label>Age
            <input type="number" name="age" value={ this.state.age } placeholder={ 0 } onChange={ this.handleInput("age")} onKeyPress={ (e) => this.validKeys(e) }></input>
            years
            </label>
            <label>Gender
              <input type="button" onClick={ this.handleSwitch(this.state.gender) } value={ this.state.gender }></input>
            </label>
            <label>Activity Level
            <input type="text" name="activity"></input>
            </label>
            <button onClick={ this.handleSubmit } name="button">Calculate</button>
          </form>


            { calc }


        </div>

    );
  }
}

// <div class='special-conditions'>
//   <div class="activity">
//     <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//     <div id="myDropdown" class="dropdown-content">
//       <a href="#">Link 1</a>
//       <a href="#">Link 2</a>
//       <a href="#">Link 3</a>
//     </div>
//   </div>
//   <div class="weight-trend">
//     <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//     <div id="myDropdown" class="dropdown-content">
//       <a href="#">Link 1</a>
//       <a href="#">Link 2</a>
//       <a href="#">Link 3</a>
//     </div>
//   </div>
//   <div class="conditions">
//     <button onclick="myFunction()" class="dropbtn">Dropdown</button>
//     <div id="myDropdown" class="dropdown-content">
//       <a href="#">Link 1</a>
//       <a href="#">Link 2</a>
//       <a href="#">Link 3</a>
//     </div>
//   </div>
// </div>

export default DietCalculator;
