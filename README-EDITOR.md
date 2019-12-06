# Recursion

## What is Recursion

Recursion is the natural way to describe self-referential structures.

We deal with recursion every day. For example, many linguists believe the defining feature of natural language is recursion.

How many English sentences are there? Infinitely many, because any valid sentence can be the sub-part of a larger sentence.

For example, here's one "type" of sentence in English:

- Jesse said "Hello."
- Dmitri said that Jesse said "Hello."
- Galit said that Dmitri said that Jesse said "Hello."
- Jasmine said that Galit said that Dmitri said that Jesse said "Hello."
- etc. etc.

There's a self-similar structure at work here. If we were to invent our own syntax to describe that structure, we might come ypu something like this after a little bit of thinking:

```text
<Name>          := Jesse|Dmitri|Galit|Jasmine
<HelloSentence> := <Name> said "Hello."
<ThatSentence>  := <Name> said that <HelloSentence>|<ThatSentence>
```

Here we could read `:=` as "can be replace with" and `|` as "or". We start with an expression like `<ThatSentence>` and replace until there's nothing left to replace.

These three lines represent a finite description of an *infinity* of valid English sentences. The recursive *stucture* of natural language is why we can create a compact description.

## Directories

Your computer organizes data recursively on the hard drive. Every directory contains 0 or more files and 0 or more directories.

## Recursive Structures in CS

1. A list is either empty or consists of an element prepended to another list
2. A string is empty or consists of a character preprended to another string
3. A binary tree is either or consists of a node with a left and right tree
4. A natural number is either 0 or the successor of another natural number

## Algebra

Consider the following, where `Expr` is short for "expression":

```text
<Number>      := 0|1|2|3|4|5|6|7|8|9
<Variable>    := a|b|c|d|...|w|x|y|z
<Term>        := <Number>|<Variable>
<Operation>   := +|*
<Expr>        := (<Expr>)|<Expr> <Operation> <Expr>|<Term>
```

This describes an infinitely-large class of algebraic expressions like:

```text
4 + x
(4 + 7 * x)
5 * (w + 6 * q)
5 * ((w + 6) * q) + z
```

## The Very Concept of a Computer

The pithiest description of a computer is something like: a machine that can simulate any other machine. This is the concept of a [Universal Turing Machine](https://en.wikipedia.org/wiki/Universal_Turing_machine), which Alan Turing developed in the 1930s to study the nature of computation. In the 1940s, this led to John von Neumann and others proposing a physical computing machine using these principles.

A [virtual machine](https://en.wikipedia.org/wiki/Virtual_machine), for example, is a piece of software that emulates computer hardware. You can run a computer inside your computer! You could even run a computer inside the computer that's running on your computer.
