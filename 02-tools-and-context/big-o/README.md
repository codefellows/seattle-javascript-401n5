![cf](http://i.imgur.com/7v5ASc8.png) 02: Big-O / Space & Time Complexity
=====================================

## Learning Objectives
* Students will be able to determine and describe the runtime complexity of an algorithm


## Resources
* Read [simple wiki big o]
* Watch [hacker rank big o video]
* Skim at [big o cheat sheet]


## Outline

### Big O
Big-o is a way of describing the speed and memory usage of an algorithm. Algorithms can run faster or slower given a specific input, thus we only use big-o to describe the worst case scenario. The letter "n" is used to describe the number of items/calculations an algorithm is operating on.

If an algorithm only makes single statements in the worst case, it is said that the algorithm runs with an "O(1)" runtime.  This runtime is also called constant time.

If an algorithm recursively cuts it's iteration in half from "n" until 1, it is said that the algorithm runs with an "O(log(n))" runtime. This runtime is also called logarithmic time.

If an algorithm runs through every item, it is said that the algorithm runs with an "O(n)" runtime. This runtime is also called linear time.

If an algorithm runs through a list of "n" items "n" times it is said that the algorithm runs with an "O(n^2)" runtime. This runtime is also called quadratic time.

[simple wiki big o]: https://simple.wikipedia.org/wiki/Big_O_notation
[hacker rank big o video]: https://www.youtube.com/watch?v=v4cd1O4zkGw
[Big O Cheat Sheet]: http://bigocheatsheet.com/