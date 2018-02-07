// Rest operators
export const buildTeam = (...teammates) => {
  return teammates;
};

export const assignRolesInTeam = (captain, viceCapt, ...remainingMembers) => {
  return {
    captain,
    viceCaptain: viceCapt,
    remainingMembers
  };
};

export const sum = (...numbers) => {
  return numbers.reduce((a, b) => a + b);
};

// Spread operators
export const join3Arrays = (arr1, arr2, arr3) => {
  return [...arr1, ...arr2, ...arr3];
};

export const joinArrayAndString = (arr, str) => {
  return [...arr, str];
};

export const removePriceFromProperties = props => {
  const { price, ...otherProps } = props;
  return otherProps;
};
