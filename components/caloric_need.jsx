import React from 'react';
import { convertPoundsToKg, calculateREE, calculateCalories, calculateBMI } from './util/calculator';

//1 inch = 2.54 cm   || 1 cm = 0.3937 in
//1 kg = 2.204 lbs || 1 lb = 0.4536 kg


//BMI = (weight(height * height))) * 703


const CaloricNeed = ({weight, height, activity, age}) => {


    const kg = convertPoundsToKg(weight);
    const BMI = calculateBMI(height, weight);
    const REE = calculateREE(kg, height, age, activity);
    const totalCal = calculateCalories(REE, activity);

      if (BMI && age && activity) {
        return (
      <div className="caloric page">
        <div>
          ACTIVITY : { activity }
          <div>BMI</div>
          <div>{ BMI }</div>
        </div>
        <div>
          <label>Estimated Caloric Needs</label>
          <div>
            <label>Low</label>
            <div>{ kg * 20}</div>
            <div>{ kg * 25}</div>
            <div>{ kg * 30}</div>
          </div>
          <div>
            <label>High</label>
            <div>{ kg }</div>
            <div>{ kg * 25}</div>
            <div>{ kg * 30}</div>
            <div>{ kg * 35}</div>
          </div>
        </div>
        <div>
          <div>
            <label>Total Calories</label>
            <div></div>
            <div>
              Weight Gain
              <div>{ totalCal }</div>
            </div>
          </div>
        </div>
      </div>
      );
    } else {
      return (
        <div className="caloric page">Not Enough Information</div>
      );
    }
};

export default CaloricNeed;
