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

See [README-EDITOR.md](README-EDITOR.md) for notes about recursion outside of programming.

##### Lists / Arrays

1. Focus on our current understanding: finish the exercises in <array-student.js>
2. Find the recursive structure
   Every list is either the empty list `[]` or an element prepended to
   another list. Call the element `first` and call the list being prepended to `rest`.

   The base case when dealing with a list is always the empty list.
   The recursive case: how do you combine `first` and `rest`?
3. Write some recursive code: [array-recursive.js](array-recursive.js)

To the code.

##### Human Language

See [README-EDITOR.md](README-EDITOR.md).

##### Your Computer's Filesystem

See [README-EDITOR.md](README-EDITOR.md).

##### Algebraic Expressions (like high school algebra)

See [README-EDITOR.md](README-EDITOR.md).

### Advanced Concepts

Invariants and structure-preserving operations.

The empty list has a special property with respect to `concat`. For any `list`, it has the following special property:

```javascript
concat([], list) === list
concat(list, []) === list
```

We gain flexibility and clarity if operations like `length`, `sum`, etc. "pass through" or "work with" `concat`. For example, if we write functions which work with `concat` in this way, we don't have to worry about corner cases.

Here's what I mean:

```javascript
length(concat(leftList, rightList)) === length(leftList) + length(rightList)
sum(concat(leftList, rightList)) === sum(leftList) + sum(rightList)
product(concat(leftList, rightList)) === product(leftList) * product(rightList)
```

If we want this property to hold, certain choices are forced on us. For example, since `list === concat([], list)`, we ahve:

```javacript
product(list) === product(concat([], list)) === product([]) * product(list)
```

which means that `product([])` *must* evaluate to `1` if we want to ensure `product` and `concat` play nice together.

Thinking in this way is one way to answer the question "What should the base case return?" It's not the only way, but some some operations like `largest` and `smallest` it can be hard to motivate a specific return value. Under this perspective, negative infinity is the *only* viable choice for `largest([])`, though.
