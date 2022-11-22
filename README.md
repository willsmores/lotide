# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @willsmores/lotide`

**Require it:**

`const _ = require('@willsmores/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: asserts that two arrays are equal, returns true if equal and false if not
* `assertEqual(...)`: asserts that two objects are equal, returns true if equal and false if not
* `assertObjectsEqual(...)`: asserts that two variables are equal, returns true if equal and false if not
* `countLetters(...)`: counts each character in a string
* `countOnly(...)`: counts specific string elements in an array
* `eqArrays(...)`: compares two arrays
* `eqObjects(...)`: compares two objects
* `findKey(...)`: return the first object key for which the callback returns a truthy value
* `findKeyByValue(...)`: search for a key on an object where its value matches a given value
* `head(...)`: returns the first element in an array
* `letterPositions(...)`: returns the index of a specific character in a string
* `map(...)`: returns a new array based on the results of the callback function
* `middle(...)`: returns the middle element in an array
* `tail(...)`: returns all elements in an array except the first
* `takeUntil(...)`: returns slice of array up until a given element
* `without(...)`: removes unwanted elements from array