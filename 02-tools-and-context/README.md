![cf](http://i.imgur.com/7v5ASc8.png) 02: Collections and Functional Programming
=====================================

## Learning Objectives
* Students will understand the difference between a constructor function and a factory function
* Students will be able to identify and explain the qualities of imperative and functional code
* Students will be able to implement a functional, array-like, list with `map`, `filter`, `reduce`, and `forEach` methods

## Resources
* Watch [funfunfunction functional programming video series]
* Read [what is functional programming]
* Read [Why functional programming](https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch1.md/#chapter-1-why-functional-programming)
* Skim [functional programming jargon]

## Outline

### Functional Programing
In order to understand functional programing, you must understand what a side effect is. A side effect is when a function alters a state defined outside of it's scope. A program with no side effects at all is not very useful. This means no input or output to or from devices and the user. Since a program with no-side effects is not useful, functional programers try two write their code as functional as possible. They do this by creating as few functions and with as few side effects as possible. They also have design patterns for wrapping functions with side effects so they act like pure functions. Functional programmers use a powerful technique called function composition that allows them to create functions out of function combinations.

##### Pros of functional programming
  * easy to test
  * when done correctly it's more readable
  * by isolating the the code with the most potential for bugs (code with side effects) to as few places as possible, you reduce the time it takes to track down bugs
  * encourages modularization

##### Cons of functional programming
  * looks more complex at first
  * functions may contain more arguments

### Imperative vs Functional
Imperative code is hard to read because you have to figure out what is happening on each line. Loops are a great example of this as they are generally harder to read the more complex that they get.  `forEach` is a great abstraction on this concept and is often used as a more functional approach to dealing with loops.

### Factory Functions
A factory function is a pure function that acts like a constructor but without the `new` keyword. You can almost think of this as a single object builder - not a constructor that requires direct object instantiation.

[funfunfunction functional programming video series]: https://www.youtube.com/playlist?list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84
[functional programming jargon]: https://github.com/hemanth/functional-programming-jargon#functional-programming-jargon
[what is functional programming]: http://blog.jenkster.com/2015/12/what-is-functional-programming.html
[functional-Light JS Book]: https://github.com/getify/Functional-Light-JS
