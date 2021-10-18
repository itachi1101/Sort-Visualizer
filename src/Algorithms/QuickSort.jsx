import {swap} from "../Helpers/swap";
export function getQuickSort(array) {
  const temp = [...array];
  const animations = [];
  quickSortHelper(temp, 0, temp.length - 1, animations);
  return animations;
}
function quickSortHelper(array, left, right, animations) {
  if (right <= left) {
    return;
  }
  const part = Partition(array, left, right, animations);
  quickSortHelper(array, left, part, animations);
  quickSortHelper(array, part + 1, right, animations);
}
function Partition(array, left, right, animations) {
  let i = left;
  let j = right + 1;
  const pivot = array[left];
  while (true) {
    while (array[++i] <= pivot) {
      if (i === right) break;
      animations.push([[i], false]);
    }
    while (array[--j] >= pivot) {
      if (j === left) break;
      animations.push([[j], false]);
    }
    if (j <= i) break;
    animations.push([[i, array[j]], true]);
    animations.push([[j, array[i]], true]);
    swap(array, i, j);
  }
  animations.push([[left, array[j]], true]);
  animations.push([[j, array[left]], true]);
  swap(array, left, j);
  return j;
}
