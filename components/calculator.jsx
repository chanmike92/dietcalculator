import React from 'react';

//1 inch = 2.54 cm   || 1 cm = 0.3937 in
//1 kg = 2.204 lbs || 1 lb = 0.4536 kg


//BMI = (weight(height * height))) * 703


class Calculator extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  render() {
    const BMI = ((this.props.weight / (this.props.height * this.props.height)) * 703);

      if (BMI) {
        return (
      <div>
        <div>Keon is a bitch</div>
        <div>{this.props.height}</div>
        <div>{this.props.weight}</div>
        <div>{this.props.age}</div>
        <div>BMI = { BMI }</div>
      </div>
      );
    } else {
      return (
        <div>Not Enough Information</div>
      );
    }
  }
}

export default Calculator;
