import React from "react";
import "./styles.css";
function MergeSortDesc() {
  return (
    <>
      <div className="main">
        <div className="title">MERGE SORT</div>
        <div className="description">
          <p>
            Is an efficient, stable sorting algorith that makes use of the
            divide and conquer strategy. Conceptually the algorithm works as
            follows:
          </p>
          <ol>
            <li>
              Divide the unsorted list into <em>n</em> sublists, each containing
              one element(a list of one element is considered sorted)
            </li>
            <li>
              Repeatedly merge sublists to produce new sorted sublists until
              there is only one sublist remaining. This will be the sorted list.
            </li>
          </ol>
        </div>
        <div className="timeContainer">
          <div className="time-heading">TIME COMPLEXITY :-</div>
          <div className="timeComplx">
            <div>
              Worst Case: O(<em>N</em> log <em>n</em>)
            </div>
            <div>
              Average Case: O(<em>N</em> log <em>n</em>)
            </div>
            <div>
              Best Case: O(<em>N</em> log <em>n</em>)
            </div>
          </div>
        </div>
        <div className="spaceComplx">
          <div className="space-heading">SPACE COMPLEXITY :-</div>
          <div className="space-value">
            O(<em>N</em>)
          </div>
        </div>
      </div>
    </>
  );
}
export default MergeSortDesc;
