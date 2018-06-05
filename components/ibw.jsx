import React from 'react';
import { calculateIBW } from './util/calculator';
import CaloricNeed from './caloric_need';

class IBW extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const IBWvalue = calculateIBW(this.props.height, this.props.gender);
    const lowEnd = Math.floor((IBWvalue * 0.9) * 100)/100;
    const highEnd = Math.floor((IBWvalue * 1.1) * 100)/100;
    const IBWPercentage = Math.floor((this.props.weight / IBWvalue) * 1000)/10;
    debugger
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
              <select className="dropbtn" onChange={ this.props.handleSelect("aka") } value={ this.props.aka } className="dropbtn">
                <option value={ 0 }>0</option>
                <option value={ 1 }>1</option>
                <option value={ 2 }>2</option>
              </select>
              <label>BKA</label>
              <select className="dropbtn" onChange={ this.props.handleSelect("bka") } value={ this.props.bka } className="dropbtn">
                <option value={ 0 }>0</option>
                <option value={ 1 }>1</option>
                <option value={ 2 }>2</option>
              </select>
              <label>Foot</label>
              <select className="dropbtn" onChange={ this.props.handleSelect("foot") } value={ this.props.foot } className="dropbtn">
                <option value={ 0 }>0</option>
                <option value={ 1 }>1</option>
                <option value={ 2 }>2</option>
              </select>
            </div>
          </div>
        </div>
      );
    }
}

export default IBW;
