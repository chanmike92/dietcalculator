export const convertInchesToCm = (inches) => {
  return (Math.round(inches * 2.54 * 100) / 100);
};

export const convertCmToInches = (cm) => {
  return (Math.round(cm / 2.54 * 100) / 100);
};

export const convertPoundsToKg = (lbs) => {
  return (Math.round(lbs / 2.2 * 100) / 100);
};

export const convertKgToPounds = (kg) => {
  return (Math.round(kg * 2.2 * 100) / 100);
};

export const calculateREE = (kg, height, age, activity) => {
  return Math.round((kg * 10) + (height * 15.875) -  (5 * age) + (parseFloat(activity)));
};

export const calculateCalories = (ree, activity) => {
  return Math.round(ree * activity);
};

export const calculateBMI = (height, weight) => {
  return Math.round(((weight / (height * height)) * 703) * 10) / 10;
};

export const calculateIBW = (height, gender) => {
  if (gender === "Male") {
    return (106+(6*(height-60)));
  } else {
    return (100+(5*(height-60)));
  }
};

export const calculateAmpWeight = (weight, foot, bka, aka) => {
  return (weight/(1-((0.015* foot)+(0.059* bka)+(0.084* aka))));
};
