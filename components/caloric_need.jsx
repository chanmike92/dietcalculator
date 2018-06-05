import React from 'react';
import { convertPoundsToKg, calculateREE, calculateCalories, calculateBMI } from './util/calculator';

//1 inch = 2.54 cm   || 1 cm = 0.3937 in
//1 kg = 2.204 lbs || 1 lb = 0.4536 kg


//BMI = (weight(height * height))) * 703


const CaloricNeed = ({weight, height, activity, age, conditions, adjBMI}) => {


    const kg = convertPoundsToKg(weight);
    const BMI = calculateBMI(height, weight);
    const REE = calculateREE(kg, height, age, activity);
    const totalCal = calculateCalories(REE, activity);

    // label it mifflin st jor  under its own section

    return (
      <div className="caloric">
        <div className="caloric-stats">
          <div className="label-name">BMI</div>
          <div className="label-name">{ BMI }</div>
          <div className="label-name">Total Calories</div>
          <div className="label-name">{ totalCal } kcal</div>

          <div className="label-name">Weight Gain</div>
          <div className="label-name">{ totalCal + 250 } kcal</div>

          <div className="label-name">Weight Loss</div>
          <div className="label-name">{ totalCal - 250 } kcal</div>

        </div>
        <div className="caloric-stats-bottom">
          <label className="label-name">Simplified</label>
          <div className="caloric-needs">

            <div className="label-name low">Low</div>
            <div className="label-name high">High</div>

            <div className="caloric-needs-chart low">
              <div className="label-name">Weight Loss</div>
              <div className="label-name">{ Math.round(kg * 20) } kcal</div>
              <div className="label-name">Normal</div>
              <div className="label-name">{ Math.round(kg * 25) } kcal</div>
              <div className="label-name">Weight Gain</div>
              <div className="label-name">{ Math.round(kg * 30)} kcal</div>
            </div>


            <div className="caloric-needs-chart high">
              <div className="label-name">Weight Loss</div>
              <div className="label-name">{ Math.round(kg * 25)} kcal</div>
              <div className="label-name">Normal</div>
              <div className="label-name">{ Math.round(kg * 30)} kcal</div>
              <div className="label-name">Weight Gain</div>
              <div className="label-name">{ Math.round(kg * 35)} kcal</div>

            </div>
        </div>
      </div>
    </div>
      );
};

export default CaloricNeed;
