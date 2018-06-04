import React from 'react';
// import Condition from './condition';
import { convertPoundsToKg } from './util/calculator';

class Requirement extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const kg = convertPoundsToKg(this.props.weight);
    let renderConditions;
    let conditionName;

    // switch (this.props.conditions) {
    //   case ("infection") :
    //     renderConditions = <Condition
    //       weight={ kg }
    //       />;
    //     break;
    //   case ("pu") :
    //     renderConditions = <condition
    //       weight={ kg }
    //       />;
    //     break;
    //   case ("mpu") :
    //     renderConditions = <Condition
    //       weight={ kg }
    //       />;
    //     break;
    //   case ("uti") :
    //     renderConditions = <Condition
    //       weight={ kg }
    //       />;
    //     break;
    //   case ("ckd") :
    //     renderConditions = <Condition
    //       weight={ kg }
    //       />;
    //     break;
    //   case ("chf") :
    //     renderConditions = <Condition
    //       weight={ kg }
    //       />;
    //     break;
    //   case ("fever") :
    //     renderConditions = <Condition
    //       weight={ kg }
    //       />;
    //     break;
    //   default:
    //     renderConditions = <condition
    //       weight={ kg }
    //       />;
    //   }

    switch (this.props.conditions) {
      case ("infection") :
        conditionName = "Infection";
        renderConditions = <div className="condition-requirement">
          <div className>Protein Requirement</div>
          <div className="label-name">{ kg * 1.2 }</div>
        </div>;
        break;
      case ("pu") :
        conditionName = "Pressure Ulcer";
        renderConditions = <div className="condition-requirement">
          <div className="label-name high">Low End</div>
          <div className="label-name">High End</div>
          <div className>Protein Requirement</div>
          <div className="label-name">{ kg * 1.25 }</div>
          <div className="label-name">{ kg * 1.5 }</div>
          <div className>Fluid Requirement</div>
          <div className="label-name">{ kg * 30 }</div>
          <div className="label-name">{ kg * 40 }</div>
        </div>;
        break;
      case ("mpu") :
        conditionName = "Multiple Pressure Ulcer";
        renderConditions = <div className="condition-requirement">
          <div className="label-name high">Low End</div>
          <div className="label-name">High End</div>
          <div className>Protein Requirement</div>
          <div className="label-name">{ kg * 1.4 }</div>
          <div className="label-name">{ kg * 1.5 }</div>
        </div>;
        break;
      case ("uti") :
        conditionName = "Urinary Tract Infection";
        renderConditions = <div className="condition-requirement">
          <div className>Fluid Requirement</div>
          <div className="label-name">{ kg * 35 }</div>
        </div>;
        break;
      case ("ckd") :
        conditionName = "Chronic Kidney Disease";
        renderConditions = <div className="condition-requirement">
          <div className="label-name high">Low End</div>
          <div className="label-name">High End</div>
          <div className>Protein Requirement</div>
          <div className="label-name">{ kg * 0.8 }</div>
          <div className="label-name">{ kg * 1 }</div>
        </div>;
        break;
      case ("chf") :
        conditionName = "Chronic Heart Failure";
        renderConditions = <div className="condition-requirement">
          <div className="label-name high">Low End</div>
          <div className="label-name">High End</div>
          <div className>Fluid Requirement</div>
          <div className="label-name">{ kg * 20 }</div>
          <div className="label-name">{ kg * 25 }</div>
        </div>;
        break;
      case ("fever") :
        conditionName = "Fever";
        renderConditions = <div className="condition-requirement">
          <div className="label-name high">Low End</div>
          <div className="label-name">High End</div>
          <div className>Fluid Requirement</div>
          <div className="label-name">{ Math.round((kg * 25) + (kg * 25 * 0.07 * this.props.fever) * 100)/100 }</div>
          <div className="label-name">{ Math.round((kg * 30) + (kg * 30 * 0.07 * this.props.fever) * 100)/100 }</div>
          <div className="label-name">Degrees above 98.6 F</div>
          <input className="input-field" maxLength="10" type="text" name="fever" value={ this.props.fever }  onChange={ this.props.handleInput("fever") } onKeyPress={ (e) => this.props.validKeys(e) }></input>
        </div>;
        break;
      case ("dialysis") :
        conditionName = "Dialysis";
        renderConditions = <div className="condition-requirement">
          <div className="label-name high">Low End</div>
          <div className="label-name">High End</div>
          <div>Protein Requirement</div>
          <div>{ kg * 1.2 }</div>
          <div>{ kg * 1.4 }</div>
        </div>;
        break;
      default:
        conditionName = "Normal";
        renderConditions = <div className="condition-requirement">
          <div className="label-name high">Low End</div>
          <div className="label-name">High End</div>
          <div className>Protein Requirement</div>
          <div className="label-name">{ kg * 1 }</div>
          <div className="label-name">{ kg * 1.2 }</div>
          <div className>Fluid Requirement</div>
          <div className="label-name">{ kg * 25 }</div>
          <div className="label-name">{ kg * 30 }</div>
        </div>;
      }

    return ( <div className="condition-chart">
        <div className="label-name">{ conditionName }</div>
        { renderConditions }
      </div>
    );
  }
}

export default Requirement;
