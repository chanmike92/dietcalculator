

const Condition = ({condition}) => {

  switch (condition) {
    case ("infection") :
      <div className=>

      </div>
      break;
    case ("pu") :
      renderConditions = <condition
        weight={ kg }
        />;
      break;
    case ("mpu") :
      renderConditions = <Condition
        weight={ kg }
        />;
      break;
    case ("uti") :
      renderConditions = <Condition
        weight={ kg }
        />;
      break;
    case ("ckd") :
      renderConditions = <Condition
        weight={ kg }
        />;
      break;
    case ("chf") :
      renderConditions = <Condition
        weight={ kg }
        />;
      break;
    case ("fever") :
      renderConditions = <Condition
        weight={ kg }
        />;
      break;
    default:
      renderConditions = <condition
        weight={ kg }
        />;
    }
  return (
    <div className="condition-chart">
      <div className="label-name">{ condition }</div>
      { renderConditions }
    </div>
  )
};
