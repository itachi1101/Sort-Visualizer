import randomNumber from "./randomNumber";
function generateArray(size) {
  const array = [];
  for (let i = 0; i < Math.min(100,size); i++) {
    let num = randomNumber();
    array.push(num);
  }
  return array;
}
export default generateArray;
