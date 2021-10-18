import React, { useState, useEffect, useRef } from "react";

// importing the descriptions
import BubbleSortDesc from "../AlgoDescription/BubbleSortDesc";
import MergeSortDesc from "../AlgoDescription/MergeSortDesc";
import InsertionSortDesc from "../AlgoDescription/InsertionSortDesc";
import QuickSortDesc from "../AlgoDescription/QuickSort";

// importing animations
import { getBubbleAnimations } from "../Algorithms/BubbleSort";
import { getInsertionSort } from "../Algorithms/Insertion";
import { getQuickSort } from "../Algorithms/QuickSort";
import { getMergeSort } from "../Algorithms/MergeSort";

// importing helpers
import generateArray from "../Helpers/generateArray";

// styling the page
import "./sorting.css";

const Array_Size = 55;
let TimeOut = 30;
export default function SortVisualizer() {
  // initializing the  states
  const [array, setArray] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isSorted, setIsSorted] = useState(false);
  const [desc, setDesc] = useState(false);
  const [info, setInfo] = useState("");
  const selectConatiner = useRef(null);

  // for component mounting
  useEffect(CreateArray, []);

  //initialize array with random values
  function CreateArray() {
    if (isSorting) return;
    if(isSorted)ResetColor();
    const tempArray = generateArray(Array_Size);
    setArray(tempArray);
    setDesc(false);
    setIsSorted(false);
  }

  function InsertionSort() {
    if (isSorting) return;
    const animations = getInsertionSort(array);
    setDesc(true);
    TimeOut = 5;
    setInfo(<InsertionSortDesc />);
    animateArray(animations);
  }
  function QuickSort() {
    if (isSorting) return;
    const animations = getQuickSort(array);
    setDesc(true);
    setInfo(<QuickSortDesc />);
    animateArray(animations);
  }
  function BubbleSort() {
    if (isSorting) return;
    const animations = getBubbleAnimations(array);
    setDesc(true);
    TimeOut = 5;
    animateArray(animations);

    setInfo(<BubbleSortDesc />);
  }
  function MergeSort() {
    if (isSorting) return;
    const animations = getMergeSort(array);
    setDesc(true);
    animateArray(animations);
    setInfo(<MergeSortDesc />);
  }

  function animateArray(animations) {
    if (isSorting) return;
   
    setIsSorting(true);
    animations.forEach(([comparison, swapped], index) => {
      setTimeout(() => {
        if (!swapped) {
          if (comparison.length === 2) {
            const [i, j] = comparison;
            colorArray(i);
            colorArray(j);
          } else {
            const [i] = comparison;
            console.log(comparison.length);
            colorArray(i);
          }
        } else {
          setArray((prevArray) => {
            const [k, newValue] = comparison;
            const newArray = [...prevArray];
            newArray[k] = newValue;
            return newArray;
          });
        }
      }, index * TimeOut);
    });

    setTimeout(() => {
      sortedAnimations();
    }, animations.length * TimeOut);
  }
  function colorArray(index) {
    const allBars = selectConatiner.current.children;
    const currentBarStyle = allBars[index].style;
    setTimeout(() => {
      currentBarStyle.backgroundColor = "yellow";
    }, TimeOut);
    setTimeout(() => {
      currentBarStyle.backgroundColor = "";
    },  2*TimeOut);
  }
  function sortedAnimations() {
    const allBars = selectConatiner.current.children;
    console.log(allBars[0].style);
    for (let i = 0; i < allBars.length; i++) {
      const currentBarStyle = allBars[i].style;
      setTimeout(() => {
        currentBarStyle.backgroundColor = "lightgreen";
      }, 2 * TimeOut);
    }
    allBars[0].style.backgroundColor = "lightgreen";
    setTimeout(() => {
      setIsSorted(true);
      setIsSorting(false);
    }, allBars.length * TimeOut);
  }
  function ResetColor(){
    const allBars=selectConatiner.current.children;
    for(let i=0;i<array.length;i++){
      const currentBarStyle=allBars[i].style;
      currentBarStyle.backgroundColor='';
    }
  }
  return (
    <div>
      <div className="navbar">
        <div className="logo">SORT VISUALIZER</div>
        <div className="buttons-container">
          <button className="button" onClick={InsertionSort}>
            Insertion Sort
          </button>
          <button className="button" onClick={BubbleSort}>
            Bubble Sort
          </button>
          <button className="button" onClick={MergeSort}>
            Merge Sort
          </button>
          <button className="button" onClick={QuickSort}>
            Quick Sort
          </button>
        </div>
      </div>
      <div className="container">
        <div className="box" ref={selectConatiner}>
          {array.map((height, index) => (
            <div
              className="bars"
              style={{
                height: `${height}vmin`,
                width: `${100 / 2}vw`,
              }}
              key={index}
            >
              {array.length <= 25 ? height : ""}
            </div>
          ))}
        </div>
        <div className="generateArray">
          <button className="gbutton" onClick={CreateArray}>
            RANDOMIZE ARRAY
          </button>
          <div className="line"></div>
        </div>

        <div className="Description">
          {desc === false ? "DESCRIPTION / COMPLEXITY" : info}
        </div>
      </div>
      <div className="footer">

        <div>
          Made with ❤ by Aviral
        </div>
        <div className="favi">
        </div>
      </div>
    </div>
  );
}
