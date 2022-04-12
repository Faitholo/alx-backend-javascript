/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
export default function hasValuesFromArray(set, array) {
  for (const prop of array) {
    if (!set.has(prop)) {
      return false;
    }
  }
  return true;
}
