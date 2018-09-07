# FizzBuzz

Write a program that prints the numbers from 1 to 100. But for multiples of
three print “Fizz” instead of the number and for the multiples of five print
“Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

This has become a classic programming problem that serves as a litmus test to
see if a programmer knows the basics of a language. Companies have been known
to ask job applicants this question during the very first stage of the interview
process just to make sure they're talking to a real programmer!

### Example Output
```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23

... and so on
```

# Sum array of numbers recursively
Create a function to sum an array of numbers using recursion.

# Array List
Use your own custom array list you built in today's "Custom Array List" lab
to solve this problem:

Write a function that accepts an `MyArrayList` of integers as a parameter and
manipulates the given list to remove any duplicate elements appearing exactly
beside each other.

Do not create and return a new list, manipulate the original list.

Given a list with:

```
1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 7, 7, 8, 2, 2, 1
```

The list should have only these values at the end:

```
1, 2, 3, 4, 5, 6, 7, 8, 2, 1
```


# Recursive isPalindrome
Write a Recursive method that accepts a String and returns true or false
depending on if the String is an exact palindrome.

A palindrome is any word that's spelled the same backward and forwad.

isPalindrome("racecar") // returns true
isPalindrome("Racecar") // returns false because of capitalization
isPalindrome("elephant") // returns false because it's not spelled the same in reverse

## Stretch Goals
* Modify the isPalindrome function so it ignores:
  * Whitespace
  * Capitalization
  * Punctuation
* It should only care about the letters A-Z and digits 0-9

With this modification your program should recognize these lines as a palindromes:

```
UFO tofu?
A man, a plan, a canal, Panama!
Was it a car or a cat I saw?
No 'x' in Nixon
Are we not pure? “No, sir!” Panama’s moody Noriega brags. “It is garbage!” Irony dooms a man—a prisoner up to new era.
```

And this rather long one:

```
Dennis, Nell, Edna, Leon, Nedra, Anita, Rolf, Nora, Alice, Carol, Leo, Jane, Reed, Dena, Dale, Basil, Rae, Penny, Lana, Dave, Denny, Lena, Ida, Bernadette, Ben, Ray, Lila, Nina, Jo, Ira, Mara, Sara, Mario, Jan, Ina, Lily, Arne, Bette, Dan, Reba, Diane, Lynn, Ed, Eva, Dana, Lynne, Pearl, Isabel, Ada, Ned, Dee, Rena, Joel, Lora, Cecil, Aaron, Flora, Tina, Arden, Noel, and Ellen sinned.
```

# Is Linked List Sorted?
Write a function `isSorted` that accepts a LinkedList of integers and returns
true or false if it's sorted.

A Linked List with these values should return:

```
isSorted(1, 2, 3) // true
isSorted(1, 3, 2) // false because it's not sorted in either order
isSorted(3, 2, 1) // false because it's not in ascending order
```

## Stretch Goal
Modify the function so it returns true if the list is sorted, no matter if it's
in ascending order or descending order.

After making the changes both these lists should return true because they're
sorted, just in ascending vs descending order:

```
isSorted(1, 2, 3) // true
isSorted(3, 2, 1) // true
```


# Inserting Linked List
Write a method `insertAtIndex` that accepts an integer `index` and a value
and inserts the value at that index in the linked list.

Consider the following cases:
* What happens when someone tries to insert at the front of the list?
* What happens when someone tries to insert in the middle of the list?
* What happens when someone tries to insert at the end of the list?


# Detect a Cycle in a Linked List
Write a method called `isCyclic` that accepts a LinkedList and returns true or
false depending on if there is a cycle in the LinkedList.

A cycle is when one node points back to another node that's already in the
list. If you followed the `.next` references from one to the next and kept
going, a cycle would end up steering you in a circle and you'd never stop
traversing the list.

Imagine you have nodes `A`, `B`, `C` and `D`.

* A points to B
* B points to C
* C points to D
* D points to B

**Exercise:** Draw a picture of what this Linked List looks like.

**Stuck?:** It's hard. Read this: <https://blog.ostermiller.org/find-loop-singly-linked-list>


# Implement Stacks and Queues
Use a Linked List to create your own custom-built Stacks and Queues.

Your stack should have these methods:
* push - pushes a new value on to the top of the stack.
* pop - returns the value on the top of the stack.
* size - returns an integer with the number of elements in the stack.
* isEmpty - returns true if there are zero elements in the stack.

Your Queue should have these methods:
* enqueue - adds a value to the back of the queue
* dequeue - removes the value at the front of the queue
* size - returns the number of elements in the queue
* isEmpty - returns true or false depending on if the queue is empty

Once you're built these, try solving this problem:

Write a method called `flip` that "turns a stack upside down" by reversing
the order of all the elements in the stack. You may only use one queue as
an additional data structure.


# Bracket Matching
Write a method called `isNestedProperly` that accepts a String and returns true only
if each opening bracket is exactly nested with corresponding closing brackets.
Ignore any character that's not a bracket.

```
isNestedProperly("") // true
isNestedProperly("aaa[bbb[]]") // true
isNestedProperly("][") // false because closing bracket appears before opening
isNestedProperly("[[]") // false because there's a missing closing bracket
```


# Implement a Queue with Two Stacks
Build a queue using only two stacks.

### Method
Keep 2 stacks, let's call them inbox and outbox.

### Enqueue
Push the new element onto inbox

### Dequeue:
If outbox is empty, refill it by popping each element from inbox and pushing it
onto outbox Pop and return the top element from outbox Using this method, each
element will be in each stack exactly once - meaning each element will be pushed
twice and popped twice, giving amortized constant time operations.

Credit: https://stackoverflow.com/a/69436


# Breadth-First Traversal
Write a method that accepts a Tree and prints out the values of each
node in a breadth-first traversal.

The nodes should be printed out level-by-level, from left to right.
Use a queue as an auxiliary data structure to achieve this effect.

A breadth-first traversal visits nodes in this order:

1. Put the root node in a queue
2. Dequeue one node and visit/print it
3. Enqueue the current nodes left child
4. Enqueue the current nodes right child
5. Repeat steps 2-5 until the queue is empty.

```
    10
   /  \
  4   37
 / \
1   5
```

This tree should display as `10 4 37 1 5`.