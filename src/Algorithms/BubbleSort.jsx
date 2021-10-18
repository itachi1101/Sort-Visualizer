import { swap } from "../Helpers/swap";
export function getBubbleAnimations(array) {
  const temp = [...array];
  const animations = [];
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < temp.length - i-1; j++) {
      animations.push([[j, j + 1], false]);
      if (temp[j] > temp[j + 1]) {
        animations.push([[j, temp[j + 1]], true]);
        animations.push([[j + 1, temp[j]], true]);
        swap(temp, j, j + 1);
      }
    }
  }
  return animations;
}
