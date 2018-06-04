import React from 'react';
import { calculateIBW } from './util/calculator';
import CaloricNeed from './caloric_need';

const IBW = ({weight, height, activity, age, gender, conditions, aka, bka, foot}) => {


    const IBWvalue = calculateIBW(height, gender);
    const lowEnd = Math.floor((IBWvalue * 0.9) * 100)/100;
    const highEnd = Math.floor((IBWvalue * 1.1) * 100)/100;
    const IBWPercentage = Math.floor((IBWvalue / weight) * 100)/100;

    // weight/(1-(( 0.015* this.state.foot)+( 0.059* this.state.bka )+( 0.084* this.state.aka)))
    return (
      <div className="ibw page">

        <div className="stats-section">
          <label>{ gender }</label>
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
      </div>
    );
};

export default IBW;
