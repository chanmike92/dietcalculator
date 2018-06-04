export const convertInchesToCm = (inches) => {
  return (Math.round(inches * 2.54 * 100) / 100);
};

export const convertCmToInches = (cm) => {
  return (Math.round(cm * 0.3937 * 100) / 100);
};

export const convertPoundsToKg = (lbs) => {
  return (Math.round(lbs * 0.4536 * 100) / 100);
};

export const convertKgToPounds = (kg) => {
  return (Math.round(kg * 2.204 * 100) / 100);
};

export const calculateREE = (kg, height, age, activity) => {
  return Math.round((kg * 10) + (height * 15.875) -  (5 * age) + (parseFloat(activity)));
};

export const calculateCalories = (ree, activity) => {
  return Math.round(ree * activity);
};

export const calculateBMI = (height, weight) => {
  return Math.round(((weight / (height * height)) * 703) * 100) / 100;
};

export const calculateIBW = (height, gender) => {
  if (gender === "Male") {
    return (106+6*(height-60));
  } else {
    return (100+5*(height-60));
  }
};
