# Index Num Swap

In this activity you will be writing code to create a function that takes in an array of integers and returns a new array with the numbers and indexes swapped.

## Instructions

* Open [Unsolved/index-num-swap.js](Unsolved/index-num-swap.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `indexNumSwap` function to achieve the following:

    * Return a new array where the numbers and indexes are swapped.

    * For example, given the following array:

    ```js
    var arr = [3, 0, 1, 2];
    // The number 3 is at index 0 - index 3 should contain 0 in the new array
    // The number 0 is at index 1 - index 0 should contain 1 in the new array
    // The number 1 is at index 2 - index 1 should contain 2 in the new array
    // The number 2 is at index 3 - index 2 should contain 3 in the new array
    ```

    * The following array should be returned:

    ```js
    [1, 2, 3, 0];
    ```

    * Given the following array:

    ```js
    var arr = [3, 0, 2, 1, 4, 5];
    // The number 3 is at index 0 - index 3 should contain 0 in the new array
    // The number 0 is at index 1 - index 0 should contain 1 in the new array
    // The number 2 is at index 2 - index 2 should contain 2 in the new array
    // The number 1 is at index 3 - index 1 should contain 3 in the new array
    // The number 4 is at index 4 - index 4 should contain 4 in the new array
    // The number 5 is at index 5 - index 5 should contain 5 in the new array
    ```

    * The following array should be returned:

    ```js
    [1, 3, 2, 0, 4, 5];
    ```

    * The given array will always containing integers, with the lowest being zero, and the highest being the length of the array - 1, with no numbers missing between.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* Take your time understanding the problem before you attempt to solve it. Try to work it out on paper before you write any code.
