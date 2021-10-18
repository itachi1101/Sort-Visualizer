import { swap } from "../Helpers/swap";
export function getInsertionSort(array) {
  const temp = [...array];
  const animations = [];
  for (let i = 1; i < temp.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      animations.push([[j, j + 1], false]);
      if (temp[j + 1] < temp[j]) {
        animations.push([[j, temp[j + 1]], true]);
        animations.push([[j + 1, temp[j]], true]);
        swap(temp, j, j + 1);
      } else break;
    }
  }
  return animations;
}
