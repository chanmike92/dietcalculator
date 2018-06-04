import React from 'react';
import CaloricNeed from './caloric_need';
import IBW from './ibw';
import Requirement from './requirements';
// import WeightTrend from './weight_trend';
import { convertInchesToCm, convertCmToInches, convertPoundsToKg, convertKgToPounds } from './util/calculator';

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
    };

    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.currentPage = this.currentPage.bind(this);
  }


  validKeys(e) {
    const valid = {1: true, 2: true, 3: true, 4: true, 5: true,
      6: true, 7: true, 8: true, 9: true, 0: true, ".": true};
      // debugger
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
        if (inputVal === "." || inputVal < 600) {
          this.setState({
            [input]: inputVal
            });
          }
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

  handleTab(input) {
    return (e) => {
      if (this.state.height > 0 && this.state.weight > 0 && this.state.age > 0 && this.state.activity > 0 && this.state.conditions !== "") {
        this.setState({
          page: input
        });
      }
    };
  }


  handleSelect(input) {

    return (e) => {
      e.preventDefault();
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }caloric_need


  currentPage(input) {
    return this.state.page === `${input}` ? "navbar-button selected" : "navbar-button";
  }


  render() {

    const height = this.state.heightval === 'inches' ?  this.state.height : convertCmToInches(this.state.height);
    const weight = this.state.weightval === 'lbs' ? this.state.weight : convertKgToPounds(this.state.weight);

    let renderPage;

    if (this.state.height > 0 && this.state.weight > 0 && this.state.age > 0 && this.state.activity > 0 && this.state.conditions !== "") {
      switch (this.state.page) {
        case ("requirement") :
          renderPage = <Requirement height={ height }
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
            activity={ this.state.activity }/>;
        }
      };

    return (
      <div className="dietapp">
        <div className="navbar">
          <button className={ this.currentPage("caloric") } onClick={ this.handleTab("caloric") }>Estimated Caloric Needs</button>
          <button className={ this.currentPage("requirement") } onClick={ this.handleTab("requirement") }>Protein/Fluid Requirements</button>
          <button className={ this.currentPage("trend") } onClick={ this.handleTab("trend") }>Weight Trend</button>
          <button className={ this.currentPage("ibw") } onClick={ this.handleTab("ibw") }>IBW</button>
        </div>
        <div className="rendered">
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
                <option value={ "pc" }>Pressure Ulcer</option>
                <option value={ "infection" }>Infection</option>
                <option value={ "dialysis" }>Dialysis</option>
              </select>
          </div>
        { renderPage }
        </div>
      </div>


    );
  }
}

// <div className="input-section">
//   <label>Amputations</label>
//   <div className="inputs">
//     <label className="input-name">AKA</label>
//     <select className="dropbtn" onChange={ this.handleSelect("aka") } defaultValue="Select your option" className="dropbtn">
//       <option value={ 0 }>0</option>
//       <option value={ 1 }>1</option>
//       <option value={ 2 }>2</option>
//     </select>
//     <label>BKA</label>
//     <select className="dropbtn" onChange={ this.handleSelect("bkb") } defaultValue="Select your option" className="dropbtn">
//       <option value={ 0 }>0</option>
//       <option value={ 1 }>1</option>
//       <option value={ 2 }>2</option>
//     </select>
//     <label>Foot</label>
//     <select className="dropbtn" onChange={ this.handleSelect("foot") } defaultValue={ 0 } className="dropbtn">
//       <option value={ 0 }>0</option>
//       <option value={ 1 }>1</option>
//       <option value={ 2 }>2</option>
//     </select>
//   </div>
// </div>


export default DietCalculator;
