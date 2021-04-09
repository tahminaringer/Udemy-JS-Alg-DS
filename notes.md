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
- explore concrete examples
- Break it down
- Solve/Simplify
- Look back and refactor
