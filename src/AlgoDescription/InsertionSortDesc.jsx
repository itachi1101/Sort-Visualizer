import React from "react";
import "./styles.css";
function InsertionSortDesc() {
  return (
    <>
      <div className="main">
        <div className="title">INSERTION SORT</div>
        <div className="description">
          <p>
            Is a simple sorting algorithm that iterates through an array and at
            each iteration it removes one element from the array, finds the
            location it belongs to in the sorted list and inserts it there,
            repeating until no elements remain in the unsorted list. It is an
            in-place, stable sorting algorithm that is inefficient on large
            input arrays but works well for data sets that are almost sorted. It
            is more efficient in practice compared to other quadratic sorting
            algorithms like bubble sort and selection sort.
          </p>
        </div>
        <div className="timeContainer">
          <div className="time-heading">TIME COMPLEXITY :-</div>
          <div className="timeComplx">
            <div>
              Worst Case: O(n<sup>2</sup>)
            </div>
            <div>
              Average Case: O(n<sup>2</sup>)
            </div>
            <div>
              Best Case: <span>O(n)</span>
            </div>
          </div>
        </div>
        <div className="spaceComplx">
          <div className="space-heading">SPACE COMPLEXITY :-</div>
          <div className="space-value">
            <span>O(1)</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default InsertionSortDesc;
