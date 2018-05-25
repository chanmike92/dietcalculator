import React from 'react';
import { calculateIBW } from './util/calculator';

class IBW extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aka: 0,
      bka: 0,
      foot: 0,
    };
    this.handleSelect.bind(this);
  }

  handleSelect(input) {
    return (e) => {
      e.preventDefault();
      // switch(input) {
      //   case "aka":
      //   break;
      //
      //   case "bka":
      //   break
      //
      //   case "foot":
      //   break
      // }
      this.setState({
        [input]: e.currentTarget.value
      });
    };
  }

  render() {
    const IBWvalue = calculateIBW(this.props.height, this.props.gender);
    const lowEnd = Math.floor((IBWvalue * 0.9) * 100)/100;
    const highEnd = Math.floor((IBWvalue * 1.1) * 100)/100;
    const IBWPercentage = Math.floor((IBWvalue / this.props.weight) * 100)/100;
    // this.props.weight/(1-(( 0.015* this.state.foot)+( 0.059* this.state.bka )+( 0.084* this.state.aka)))
      return (
        <div className="ibw page">

          <div className="stats-section">
            <label>{ this.props.gender }</label>
            <div className="stats">
              <label className="input-name">IBW</label>
              <div className="static-unit">{ IBWvalue }</div>
              <label className="input-name">Low End</label>
              <div className="static-unit">{ lowEnd }</div>
              <label className="input-name">High End</label>
              <div className="static-unit">{ highEnd }</div>
              <label className="input-name">% IBW</label>
              <div className="static-unit">{ IBWPercentage }%</div>
            </div>
          </div>
          <div className="input-section">
            <label>Amputations</label>
            <div className="inputs">
              <label className="input-name">AKA</label>
              <select className="dropbtn" onChange={ this.handleSelect("aka") } defaultValue="Select your option" className="dropbtn">
                <option value={ 1.4 }>0</option>
                <option value={ 1.3 }>1</option>
                <option value={ 1.2 }>2</option>
              </select>
              <label>BKA</label>
              <select className="dropbtn" onChange={ this.handleSelect("bkb") } defaultValue="Select your option" className="dropbtn">
                <option value={ 1.4 }>0</option>
                <option value={ 1.3 }>1</option>
                <option value={ 1.2 }>2</option>
              </select>
              <label>Foot</label>
              <select className="dropbtn" onChange={ this.handleSelect("foot") } defaultValue={ 0 } className="dropbtn">
                <option value={ 1.4 }>0</option>
                <option value={ 1.3 }>1</option>
                <option value={ 1.2 }>2</option>
              </select>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default IBW;
