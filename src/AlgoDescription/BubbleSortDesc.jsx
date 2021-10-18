import React from "react";
import "./styles.css";
function BubbleSortDesc() {
  return (
    <>
      <div className="main">
        <div className="title">BUBBLE SORT</div>
        <div className="description">
          <p>
            Is a simple sorting algorithm that repeatedly steps through the
            list, compares adjacent elements and swaps them if they are in the
            wrong order.The pass through the list is repeated until the list is
            sorted. The algorithm, which is a comparison sort, is named for the
            way smaller or larger elements "bubble" to the top of the list.
            Although the algorithm is simple, it is too slow and impractical for
            most problems
          </p>
        </div>
        <div className="timeContainer">
          <div className="time-heading">TIME COMPLEXITY :-</div>
          <div className="timeComplx">
            <div>
              Worst Case: O(N<sup>2</sup>)
            </div>
            <div>
              Average Case: O(N<sup>2</sup>)
            </div>
            <div>Best Case: O(N)</div>
          </div>
        </div>
        <div className="spaceComplx">
          <div className="space-heading">SPACE COMPLEXITY :-</div>
          <div className="space-value">O(1)</div>
        </div>
      </div>
    </>
  );
}
export default BubbleSortDesc;
