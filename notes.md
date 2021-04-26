# Notes

## Section 1-2

### Big O

#### Time

**O(log n)**

#### Space

**O(1)** (constant, does not change) If returns Number, Null, undefined, boolean
**O(n)** If arrays, strings, (all things that can not be standard size, changing)

## Section 3

**Objects** Unordered, key value pairs

- When to use
  - When you don't need order
  - When you need fast access/insertion and removal
  - **Big O**
    - insertion O(1)
    - Removal O(1)
    - Searching O(n)
    - Access O(1)
  - **Big O of Object Methods**
    - Object.keys O(n)
    - Object.values O(n)
    - Object.entries O(n)
    - hasOwnProperty O(1)

**Arrays** Ordered Lists

- When to use
  - Use when you need order
  - When you need fast access/insertion and removal(... sort of...)
  - **Big O of Arrays**
    - Insertion - It depends ...
      - Beginning of array O(n)
      - End of array O(1)
    - Removal - It Depends ...
      - Beginning of array O(n)
      - End of array O(1)
    - Searching - O(n)
    - Access - O(1)
  - Push and pop faster than shift and unshift
  - **Big O of Array Operations**
    - push O(1)
    - pop O(1)
    - shift O(n)
    - unshift O(n)
    - concat O(n)
    - slice O(n)
    - splice O(n)
    - sort O(n * log n)
    - forEach/map/filter/reduce/etc. O(n)

## Section 4

**Algorithm** process or set of steps to accomplish a certain task

- everything in programing involeves some kind of algorithm
- foundation for being a successful dev

- **How to improve your algorithm process**
  1. Devise a plan for solving problems
  2. Master common problem solving patterns

- **Problem Solving**
- Understand the problem
  - Questions to ask
    1. can you restate the problem in your own words?
    2. What are the inputs
    3. What are the outputs
    4. Can the outputs be determined from the inputs? Do you have enough information to solve the problem
    5. How should I label the important pieces of data that are a part of the problem?
- explore concrete examples
  - come up with concrete examples to understand the problem better
  - Examples also provide sanity checks to prove solution works how it should
  - User Stories, Unit Tests
    - start with simple examples
    - progress to more complex examples
    - explore examples with empty inputs
    - explore examples with invalid inputs
- Break it down
  - algorithm - steps I would take to solve
  - gets you to think about the code before your write it
  - helps highlight problems you might not be comfortable with solving
- Solve/Simplify
  - Solve if you can, if you can't solve a simpler problem
  - Find the core difficulty in what you are trying to do
  - Temporarily ignore that difficulty
  - Write a simplified solution
  - Then incorporate that difficulty back in
- Look back and refactor
  - Can you check the result?
  - Can you derive the result differently?
  - Can you understand it at a glance?
  - Can you use the result or method for some other problem?
  - Can you improve the performance of your solution?
  - Can you think of other ways to refactor?
  - How have other people solved this problem?
- **Patterns**
  - Frequency counters - This pattern uses objects or sets to collect values frequencies of value
  - Multiple Pointers - Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
    - Very efficient way to solve problems with minamal space complexity
- **Sliding Window** This pattern involes creating a window which can either be an array or number from one position to another
- **Divide and Conquer** This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. Can decrease complexity.

