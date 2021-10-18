import React from "react";
import "./styles.css";
function QuickSortDesc() {
  return (
    <>
      <div className="main">
        <div className="title">QUICK SORT</div>
        <div className="description">
          <p>
            Is an efficient, in-place sorting algorith that in practice is
            faster than MergeSort and HeapSort. However, it is not a stable
            sorting algorithm, meaning that the relative positioning of equal
            sort items is not preserved.Quicksort is a divide and conquer
            algorithm. Quicksort first divides a large array into two smaller
            sub-arrays: the low elements and the high elements. Quicksort can
            then recursively sort the sub-arrays. The steps are:
          </p>
          <ol>
            <li>
              Pick an element, called a pivot, from the array. This is usually
              done at random.
            </li>
            <li>Move pivot element to the start of the array.</li>
            <li>
              <em>Partitioning:</em> reorder the array so that all elements with
              values less than the pivot come before the pivot, while all
              elements with values greater than the pivot come after it (equal
              values can go either way). After this partitioning, the pivot is
              in its final position. This is called the <em>partition</em>{" "}
              operation.
            </li>
            <li>
              Recursively apply the above steps to the sub-array of elements
              with smaller values and separately to the sub-array of elements
              with greater values.
            </li>
          </ol>
          <p>
            The base case of the recursion is an array of size zero or one,
            which are sorted by definition.
          </p>
        </div>
        <div className="timeContainer">
          <div className="time-heading">TIME COMPLEXITY :-</div>
          <div className="timeComplx">
            <div>
              Worst Case: O(<em>n</em>
              <sup>2</sup>)
            </div>
            <div>
              Average Case: O(<em>n</em>log<em>n</em>)
            </div>
            <div>
              Best Case: O(<em>n</em>log<em>n</em>)
            </div>
          </div>
        </div>
        <div className="spaceComplx">
          <div className="space-heading">SPACE COMPLEXITY :-</div>
          <div className="space-value">
            O(log<em>n</em>)
          </div>
        </div>
      </div>
    </>
  );
}
export default QuickSortDesc;
