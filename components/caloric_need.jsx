import React from 'react';
import { convertPoundsToKg, calculateREE, calculateCalories, calculateBMI } from './util/calculator';

//1 inch = 2.54 cm   || 1 cm = 0.3937 in
//1 kg = 2.204 lbs || 1 lb = 0.4536 kg


//BMI = (weight(height * height))) * 703


const CaloricNeed = ({weight, height, activity, age, conditions}) => {


    const kg = convertPoundsToKg(weight);
    const BMI = calculateBMI(height, weight);
    const REE = calculateREE(kg, height, age, activity);
    const totalCal = calculateCalories(REE, activity);

 if (BMI && activity && conditions) {
    return (
      <div className="caloric">
        <div className="caloric-stats">
          <div className="label-name">ACTIVITY</div>
          <div>{ activity }</div>

          <div className="label-name">BMI</div>
          <div>{ BMI }</div>

          <div className="label-name">Total Calories</div>
          <div>{ totalCal }</div>
        </div>
        <div className="caloric-stats-bottom">
          <label className="label-name">Estimated Caloric Needs</label>
          <div className="caloric-needs">

            <div className="label-name low">Low</div>
            <div className="label-name high">High</div>

            <div className="caloric-needs-chart low">
              <div className="input-name">Weight Loss</div>
              <div>{ kg * 20}</div>
              <div className="input-name">Normal</div>
              <div>{ kg * 25}</div>
              <div className="input-name">Weight Gain</div>
              <div>{ kg * 30}</div>
            </div>


            <div className="caloric-needs-chart high">
              <div className="input-name">Weight Loss</div>
              <div >{ kg * 25}</div>
              <div className="input-name">Normal</div>
              <div>{ kg * 30}</div>
              <div className="input-name">Weight Gain</div>
              <div>{ kg * 35}</div>

            </div>
        </div>
      </div>
    </div>
      );
    } else {
      return null;
    }
};

export default CaloricNeed;
