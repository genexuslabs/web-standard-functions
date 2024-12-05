/**
 * Assigns a value depending on the evaluation of an expression. IIf is an abbreviation for Immediate if.
 * @param {boolean} condition Condition to be evaluated
 * @param {any} valueIfTrue Return value if the condition evaluates to true
 * @param {any} valueIfFalse Return value if the condition evaluates to false
 * @return any Either valueIfTrue or valueIfFalse depending on the condition
 */
export const iif = (
  condition: boolean | Number,
  valueIfTrue: any,
  valueIfFalse: any
): any => {
  if (condition === 0) {
    condition = true;
  } else if (condition === 1 || condition === -1) {
    condition = false;
  }

  return condition ? valueIfTrue : valueIfFalse;
};
