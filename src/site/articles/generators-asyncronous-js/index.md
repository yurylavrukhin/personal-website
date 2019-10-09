---
layout: layouts/article.njk
title: Generators
---

<div>
  <h1>Asynchronous JS. Promises By Example.</h1>
  Introduction
// In this article, you will learn promise's syntax, how to use it to fetch //  // data,  how to
Promises are one of the most important parts of asynchronous operations in JavaScript.
In computer science term `promise` was proposed in 1976.
Early implementations of promises began to appear in languages such as MultiLisp sometime in the 1980s.
Native promises appeared in JavaScript in 2015 with ES6  (or ECMAScript2015) standard.
Promise's purpose — is to let us write asynchronous code conveniently.

Before we dive in. If you are not familiar with promises I recommend you to open the browser's console or node.js REPL and execute code examples in the article while reading to get a better understanding and practice.

Main Concepts
Promise — is a special JavaScript object, that can store its value.
The promise can be returned synchronously from the asynchronous function.
For example: ↓
const promiseResponse = fetch('https://api.tvmaze.com/shows') // fetch function returns a promise
console.log(promiseResponse) // Pending Promise (why pending → below)
3 possible promise states
As I said before, the promise is a special JavaScript object, and this object has the state.
[IMAGE HERE]
before the result is ready — the promise is pending
when the result is available — the promise is fulfilled
when an error happened — the promise is rejected
Once the promise is no longer pending (e.g. fulfilled or rejected), we say that promise has been settled.
Once the promise settled, it can no longer change its state.

Promise chain with `then` method
We want to know when our promise will be fulfilled to access the data we get from the asynchronous operation. Or rejected if and error happened.
There is where the `then` method comes in.
promise.then(
	onFulfilled?: Function,
	onRejected?: Function
) => Promise
`then` signature

`onFulfilled` function will call when the promise is `fulfilled`. It receives the data from asynchronous operation as an argument, and we can do whatever we want with it. I'll just log response into the console.
promiseResponse.then((response) => console.log(response))

But to get an actual result we need to parse the body of the response.
As we already know, `then` method returns a promise, so we can «chain» another `then` to the previous one.
promiseResponse
	.then((response) => response.json())
	.then(console.log)
Finally got the actual data.

return promise — unresolved promise
error handling(catching). (because asynchronous operations fail all the time)
from fetch to my async function
`finally` method how to use. use case (remove loading state)
объяснение на примере жизненом
how to create rejected promise using Promise.reject method (for catch, but also throw error works for it )
promise with constructor
WORK WITH MULTIPLE PROMISES: Promise.race (to wait for the fastest promise to settle) ||| Promise.all (to wait for all promises to settle)
how to use async functions with the `await` operator to write asynchronous code that almost easy to read as synchronous code

</div>
