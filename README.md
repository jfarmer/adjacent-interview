# Today: Recursion

## Goals For Today

1. Learning to Learn
2. Recursion
3. Advanced Concepts (maaaaaybe)

### Learning to Learn

> The most effective debugging tool is still careful thought, coupled with judiciously placed print statements. — Brian Kernighan, "Unix for Beginners" (1979)

> A change in perspective is worth 80 IQ points. — Alan Kay, inventor of Object-Oriented Programming

We can only learn new things in terms of things we already understand. Two corrollaries of this:

1. The more _ways_ understanding we have at our command, the faster we gain new understanding and the faster we refine our existing understanding.
2. We'll use _whatever_ understanding we have at out disposal to make sense of something, even if it's totally faulty.

#### Our First Understanding

Our first understanding will always be faulty. We will over-generalize, fail to notice things we should have noticed, form conclusions witout realizing it, and so on. There's no way around this, really.

As we learn, the best we can do is to ask ourselves:

1. What perspectives are at my disposal?
2. What insights does each perspective give?
3. How do those insights relate?
4. What could I be misunderstanding and how am I checking?

### Recursion

1. Recursion is a natural way to describe self-referential structures. It's so natural you use it every day without realizing it.
2. Don't focus on the recursive "algorithm", focus on the recursive structure. Where is the self-reference?
3. Start with something you already know and see what insights the "recursive perspective" gives you.

### What is Recursion?

Like a chain, following on itself, up until the point where it reaches the end and returns to the beginning.

Red and black.

Repetition, something happening repeatedly.

Going straight through something rather than jumping within it.

"Base case", the smallest portion of the problem.

"Portion", recursion is a problem that can be broken down into sub-problems until the problem isn't there any more.

#### Recursive Structures

In the live session we'll focus on the code, but recursion is *everywhere*. One of the core beliefs in contemporary linguistics is that recursion a defining feature of human language, for example. Where there's self-reference, there's recursion.

See <README-EDITOR.md> for notes about recursion outside of programming.

##### Lists / Arrays

1. Focus on our current understanding: finish the exercises in <array-student.js>
2. Find the recursive structure
   Every list is either the empty list `[]` or an element prepended to
   another list. Call the element `first` and call the list being prepended to `rest`.

   The base case when dealing with a list is always the empty list.
   The recursive case: how do you combine `first` and `rest`?
3. Write some recursive code: [array-recursive.js]

To the code.

##### Human Language

See <README-EDITOR.md>.

##### Your Computer's Filesystem

See <README-EDITOR.md>.

##### Algebraic Expressions (like high school algebra)

See <README-EDITOR.md>.

### Advanced Concepts

Invariants and structure-preserving operations.
