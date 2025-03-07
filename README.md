# Assignment

In this assignment, you will build a `Node` class and a `LinkedList` class. Then, you will implement a few class interview problems using your classes.

- [Setup](#setup)
- [Testing Your Code](#testing-your-code)
  - [npm test](#npm-test)
  - [How To Read Tests](#how-to-read-tests)
  - [Submitting On Time](#submitting-on-time)
  - [playground.js](#playgroundjs)
- [Questions](#questions)
  - [Part 1: Node and LinkedList](#part-1-node-and-linkedlist)
  - [Part 2: Interview Problems](#part-2-interview-problems)

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/fullstack-curriculum/how-tos/working-with-assignments#how-to-work-on-assignments).

After cloning your repository, make sure to run the following commands:

```sh
npm i
git checkout -b draft
npm t
```

## Testing Your Code

### npm test

Before submitting your code, make sure you got things right by running the provided automated tests.

You can do this using the commands:

```sh
npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change
```

You will know that you have "completed" an assignment once you have passed 75% or more of the automated tests!

### How To Read Tests

All tests are made up of `expect()` statements that must all be true in order for the test to pass.

Remember, when reading tests ask yourself:
* How is the test using my code? What inputs are being provided to my functions?
* What is the test expecting my function to return?
* Is the test expecting my function to produce any side effects (printing something to the console, modifying the passed-in array, etc...)?

### Submitting On Time

You have to understand that "grades" don't exist at Marcy. We only need performance data in order to know how you're doing, and make sure the people who need help get it as quickly as they can. It's ok if you didn't finish by the deadline! Just show us what you have. We'll have office hours and reviews, and we want to know what you are all struggling with so we can use those meetings effectively. **This is not about grades, its about seeing what you know, and where we can help!**

### playground.js

The most straightforward way to test your code is to test your code by hand as you work. Invoke your functions and use `console.log()` to print out the results. Then, `cd` into the `src/` directory and use the `node <file_name>` command to run your JavaScript files. 

You can also create what's called a "playground" (or "sandbox") file where you import any code you need, and then mess around with that file. We've included one in the `src` directory so you can see it. Run that program using `node src/playground.js`.

## Questions

### Part 1: Node and LinkedList

Implement a `Node` class and `LinkedList` class.

Use the tests to determine the requirements of each class!

### Part 2: Interview Problems

These are common interview problems and you can find an algorithm to solve them online. That's okay!

However, we encourage you to **spend at least 15 minutes** attempting to come up with an algorithm on your own before looking it up. If you find an algorithm online, **STOP before copying** and take time to **internalize the algorithm**.

1. Given the head node of a singly linked list, write a function which returns a boolean indicating if the linked list contains a "cycle". A cycle is when a node's `next` pointer points back to a previous node in the list. This is also sometimes known as a circularly linked list.

2. Write a function to reverse a linked list **in place** (don't make a new linked list). The function will take in the head node of the list as an input and return the new head node of the list.

3. Merge two **sorted** linked lists and return **a new sorted list**. The new list should be made by splicing together the nodes of the first two lists. 

  For example:
  ```
  Input: 1->2->4, 1->3->4
  Output: 1->1->2->3->4->4
  ```

5. Write a function that removes duplicates from a linked list and returns the head node of the list.
