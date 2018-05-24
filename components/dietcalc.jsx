import React from 'react';
import CaloricNeed from './caloric_need';
import { convertInchesToCm, convertCmToInches, convertPoundsToKg, convertKgToPounds } from './util/calculator';

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
      conditions: "",
      page: "calculator",
    };

    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    // document.addEventListener("click", this.handleClose);
  }



  validKeys(e) {
    const valid = {1: true, 2: true, 3: true, 4: true, 5: true,
      6: true, 7: true, 8: true, 9: true, 0: true, ".": true};
    if (!valid[e.key]) {
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
      switch (input) {
        case "age":
        this.setState({
          [input]: Math.round(inputVal)
          });
        break;
        default:
        this.setState({
          [input]: Math.round(inputVal * 100) / 100,
          });
        }
        }
      };
    }

  handleSwitch(input) {
    return (e) => {

      e.preventDefault();
      switch (input) {
        case "inches":
        this.setState({
          heightval: "cm",
          height: convertInchesToCm(this.state.height)
        });
        break;

        case "cm":
        this.setState({
          heightval: "inches",
          height: convertCmToInches(this.state.height)
        });
        break;

        case "lbs":
        this.setState({
          weightval: "kg",
          weight: convertPoundsToKg(this.state.weight)
        });
        break;

        case "kg":
        this.setState({
          weightval: "lbs",
          weight: convertKgToPounds(this.state.weight)
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

  handleTab(input) {
    return (e) => {
      this.setState({
        page: input
      });
    };
  }


  handleSelect(input) {

    return (e) => {
      e.preventDefault();
      switch (input) {
        case "activity":
        this.setState({
          activity: e.currentTarget.value
        });
        break;
        case "conditions":
        this.setState({
          activity: e.currentTarget.value
        });
        break;
      }
    };
  }


  render() {

    const height = this.state.heightval === 'inches' ?  this.state.height : convertCmToInches(this.state.height);
    const weight = this.state.weightval === 'lbs' ? this.state.weight : convertKgToPounds(this.state.weight);

    let renderPage;

    switch (this.state.page) {
      case ("caloric") :
        renderPage = <CaloricNeed height={ height }
          weight={ weight }
          age={ this.state.age }
          gender={ this.state.gender }
          weightval={ this.state.weightval }
          heightval={ this.state.heightval }
          activity={ this.state.activity }/>;
        break;
      case ("requirement") :
        renderPage = <CaloricNeed height={ height }
          weight={ weight }
          age={ this.state.age }
          gender={ this.state.gender }
          weightval={ this.state.weightval }
          heightval={ this.state.heightval }
          activity={ this.state.activity }/>;
        break;
      case ("trend") :
        renderPage = <CaloricNeed height={ height }
          weight={ weight }
          age={ this.state.age }
          gender={ this.state.gender }
          weightval={ this.state.weightval }
          heightval={ this.state.heightval }
          activity={ this.state.activity }/>;
        break;
      case ("ibw") :
        renderPage = <CaloricNeed height={ height }
          weight={ weight }
          age={ this.state.age }
          gender={ this.state.gender }
          weightval={ this.state.weightval }
          heightval={ this.state.heightval }
          activity={ this.state.activity }/>;
        break;
      default: {
          renderPage =
          <div className="dietcalc page">
            <label>Height
              <input type="text" name="height" value={ this.state.height } placeholder={ 0 } onChange={ this.handleInput("height") } onKeyPress={ (e) => this.validKeys(e) }></input>
              <input type="button" onClick={ this.handleSwitch(this.state.heightval) } value={ this.state.heightval }></input>
            </label>
            <label>Weight
            <input type="text" name="weight" value={ this.state.weight } placeholder={ 0 } onChange={ this.handleInput("weight") } onKeyPress={ (e) => this.validKeys(e) }></input>
            <input type="button" onClick={ this.handleSwitch(this.state.weightval) } value={ this.state.weightval }></input>
            </label>
            <label>Age
            <input type="text" name="age" value={ this.state.age } placeholder={ 0 } onChange={ this.handleInput("age")} onKeyPress={ (e) => this.validKeys(e) }></input>
            years
            </label>
            <label>Gender
              <input type="button" onClick={ this.handleSwitch(this.state.gender) } value={ this.state.gender }></input>
            </label>
            <label>Activity Level</label>
              <div className='special-conditions'>
                <div className="activity">
                  Activity
                  <select onChange={ this.handleSelect("activity") } className="dropbtn">
                    <option value="" disabled selected>Select your option</option>
                    <option value={ 1.4 }>Light Activity</option>
                    <option value={ 1.3 }>Ambulatory/Out of Bed</option>
                    <option value={ 1.2 }>Confined to Bed</option>
                  </select>
                </div>
                <div className="conditions">
                  Conditions
                  <select onChange={ this.handleSelect("conditions") } className="dropbtn">
                    <option value={ 1 }>C 1</option>
                    <option value={ 1.2 }>C 2</option>
                    <option value={ 1.4 }>C 3</option>
                  </select>;
                </div>
              </div>
          </div>;
        }
      }


    return (
      <div className="dietapp">
        <div className="navbar">
          <button className="navbar-button" onClick={ this.handleTab("calculator") }>CaloricNeed</button>
          <button className="navbar-button" onClick={ this.handleTab("caloric") }>Estimated Caloric Needs</button>
          <button className="navbar-button" onClick={ this.handleTab("requirement") }>Protein/Fluid Requirements</button>
          <button className="navbar-button" onClick={ this.handleTab("trend") }>Weight Trend</button>
          <button className="navbar-button" onClick={ this.handleTab("ibw") }>IBW</button>
        </div>
        { renderPage }
      </div>


    );
  }
}

export default DietCalculator;
