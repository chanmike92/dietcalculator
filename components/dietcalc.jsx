import React from 'react';
import CaloricNeed from './caloric_need';
import IBW from './ibw';
import Requirement from './requirements';
import WeightTrend from './weight_trend';

import { convertInchesToCm, convertCmToInches, convertPoundsToKg, convertKgToPounds, calculateAmpWeight } from './util/calculator';

class DietCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "",
      weight: "",
      age: "",
      gender: "Male",
      weightval: "lbs",
      heightval: "inches",
      activity: "",
      conditions: "normal",
      page: "caloric",
      aka: 0,
      bka: 0,
      foot: 0,
      fever: 0,
      errors: "",
    };

    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.currentPage = this.currentPage.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
  }

  // validates keys pressed by keyboard; only positive numerical
  // numbers and period for decimal

  validKeys(e) {
    const valid = {1: true, 2: true, 3: true, 4: true, 5: true,
      6: true, 7: true, 8: true, 9: true, 0: true, ".": true};
    if (valid[e.key]) {
    } else {
      e.preventDefault();
    }
  }

  // reset field to empty rather than 0 when removing imput
  // converts string inputs into floats rounded to the neared numbers
  // validates number input
  handleInput(input) {
    return (e) => {
      if (e.currentTarget.value === "") {

        this.setState({
          [input]: ""
        });
      } else {
      const inputVal = parseFloat(e.currentTarget.value) ? Math.round(parseFloat(e.currentTarget.value).toFixed(2) * 100) / 100 : e.currentTarget.value;
      switch (input) {
        case "age":
        if (inputVal < 200) {
        this.setState({
          [input]: Math.round(inputVal)
          });
        }
        break;
        default:
        if (inputVal === "." || inputVal < 1000) {
          this.setState({
            [input]: inputVal
            });
          }
        }
        }
      };
    }

  // auto converts different measurement values to their metric counterparts

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

        case "Male":
        this.setState({
          gender: "Female"
        });
        break;

        case "Female":
        this.setState({
          gender: "Male"
        });
        break;
      }
    };
  }

  // only allows selection of tabs when provided sufficient intial input
  handleTab(input) {
    return (e) => {
      if (this.state.height > 0 && this.state.weight > 0 && this.state.age > 0 && this.state.activity > 0 && this.state.conditions !== "") {
        this.setState({
          page: input,
          errors: "",
        });
      } else {
        this.setState({
          errors: "Please fill out all inputs first!"
        });
      }
    };
  }


  // passed down to the IBW component to select number of amputation parts

  handleSelect(input) {

    return (e) => {
      e.preventDefault();

      switch (input) {
        case "aka":
        if (((this.state.foot) + (this.state.bka) + parseInt(e.currentTarget.value)) <= 2) {
          this.setState({
            [input]: parseInt(e.currentTarget.value)
          });
        }
        break;

        case "bka":
        if (((this.state.foot) + (this.state.aka) + parseInt(e.currentTarget.value)) <= 2) {
          this.setState({
            [input]: parseInt(e.currentTarget.value)
          });
        }
        break;

        case "foot":
        if (((this.state.aka) + (this.state.bka) + parseInt(e.currentTarget.value)) <= 2) {
          this.setState({
            [input]: parseInt(e.currentTarget.value)
          });
        }
        break;

        default:
          this.setState({
          [input]: parseInt(e.currentTarget.value)
        });
      }
    };
  }

  // assigns current page to be highlighted on tab

  currentPage(input) {
    return this.state.page === `${input}` ? "navbar-button selected" : "navbar-button";
  }

  clearErrors() {
    this.setState({errors: ""});
  }


  render() {

    const height = this.state.heightval === 'inches' ?  this.state.height : convertCmToInches(this.state.height);
    const weight = this.state.weightval === 'lbs' ? this.state.weight : convertKgToPounds(this.state.weight);
    const ampWeight = calculateAmpWeight(this.state.weight, this.state.foot, this.state.bka, this.state.aka);
    let renderPage;

    if (this.state.height > 0 && this.state.weight > 0 && this.state.age > 0 && this.state.activity > 0 && this.state.conditions !== "") {
      if (this.state.errors) {
        setTimeout(this.clearErrors(), 0);
      }
      switch (this.state.page) {
        case ("requirement") :
          renderPage = <Requirement height={ height }
            weight={ weight }
            fever={ this.state.fever }
            conditions={ this.state.conditions }
            validKeys={ this.validKeys }
            handleInput={ this.handleInput }/>;
          break;
        case ("trend") :
          renderPage = <WeightTrend height={ height }
            weight={ weight }
            age={ this.state.age }
            gender={ this.state.gender }
            weightval={ this.state.weightval }
            heightval={ this.state.heightval }
            activity={ this.state.activity }/>;
          break;
        case ("ibw") :
          renderPage = <IBW height={ height }
            weight={ weight }
            age={ this.state.age }
            gender={ this.state.gender }
            weightval={ this.state.weightval }
            heightval={ this.state.heightval }
            activity={ this.state.activity }
            handleSelect= { this.handleSelect }
            aka={ this.state.aka }
            bka={ this.state.bka }
            foot={ this.state.foot }
            />;
          break;
        default:
          renderPage = <CaloricNeed height={ height }
            weight={ weight }
            age={ this.state.age }
            gender={ this.state.gender }
            weightval={ this.state.weightval }
            heightval={ this.state.heightval }
            activity={ this.state.activity }
            ampWeight={ ampWeight }/>;
        }
      }

      // input this later
      // <button className={ this.currentPage("trend") } onClick={ this.handleTab("trend") }>Weight Trend</button>


    return (
      <div className="dietapp">
        <div className="navbar">
          <button className={ this.currentPage("caloric") } onClick={ this.handleTab("caloric") }>Estimated Caloric Needs</button>
          <button className={ this.currentPage("requirement") } onClick={ this.handleTab("requirement") }>Protein/Fluid Requirements</button>
          <button className={ this.currentPage("ibw") } onClick={ this.handleTab("ibw") }>IBW</button>
        </div>
        <div className="rendered">
          <div>
            <div className="error">{ this.state.errors }</div>
            <div className="dietcalc">
                <label className="input-name">Height</label>
                <input className="input-field" maxLength="10" type="text" name="height" value={ this.state.height }  onChange={ this.handleInput("height") } onKeyPress={ (e) => this.validKeys(e) }></input>
                <input className="change-unit" type="button" onClick={ this.handleSwitch(this.state.heightval) } value={ this.state.heightval }></input>
                <label className="input-name">Weight</label>
                <input className="input-field" maxLength="10" type="text" name="weight" value={ this.state.weight }  onChange={ this.handleInput("weight") } onKeyPress={ (e) => this.validKeys(e) }></input>
                <input className="change-unit" type="button" onClick={ this.handleSwitch(this.state.weightval) } value={ this.state.weightval }></input>
                <label className="input-name">Age</label>
                <input className="input-field" maxLength="3" type="text" name="age" value={ this.state.age }  onChange={ this.handleInput("age")} onKeyPress={ (e) => this.validKeys(e) }></input>
                <label className="static-unit">years</label>

                <label className="input-name">Gender</label>
                <input className="change-unit" type="button" onClick={ this.handleSwitch(this.state.gender) } value={ this.state.gender }></input>
                <div className="input-name">Activity</div>
                <select onChange={ this.handleSelect("activity") } defaultValue="Select Option" className="dropbtn">
                  <option disabled>Select Option</option>
                  <option value={ 1.4 }>Light Activity</option>
                  <option value={ 1.3 }>Ambulatory/Out of Bed</option>
                  <option value={ 1.2 }>Confined to Bed</option>
                </select>
                <div className="input-name">Conditions</div>
                <select onChange={ this.handleSelect("conditions") } defaultValue="Normal" className="dropbtn">
                  <option value={ "normal" }>Normal</option>
                  <option value={ "pu" }>Pressure Ulcer</option>
                  <option value={ "infection" }>Infection</option>
                  <option value={ "dialysis" }>Dialysis</option>
                  <option value={ "mpu" }>Multiple Pressure Ulcers</option>
                  <option value={ "ckd" }>Chronic Kidney Disease</option>
                  <option value={ "uti" }>Urinary Tract Infection</option>
                  <option value={ "chf" }>Congestive Heart Failure</option>
                  <option value={ "fever" }>Fever</option>
                </select>
              </div>
            </div>
          { renderPage }
        </div>
      </div>
    );
  }
}

export default DietCalculator;
