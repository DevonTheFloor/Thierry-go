---
title: Unknow operator $or
description: Error in MongoDB where the $or operator is not recognized.
img: 'https://thierry-go-dev.fr/tourn/images/blog/or.png'
---
   
   
## Definition
   
The $or operator in MongoDB applies "a logical OR to an array of two or more expressions and selects the documents that satisfy at least one of these expressions".
According to the syntax:

```js{}[query.js]
myCollection.find({
   $or: [
      {expression 1},
      {expression 2}
   ]
})   
```   

## Explanations

So, what happens when an error message in MongoDB tells you that the $or operator is unknown?
Initially, don't think it could be a problem with your mongod version not being up to date. Some operators have appeared gradually with new versions and therefore did not exist in previous ones.
But this is not the case with $or.

In fact, we are simply facing a very basic syntax error problem. A bit like you could have an error in the console saying:

```js{}[console]
myObject.myFunction() is not a function
```   

Your query is simply poorly written.
Important details to respect under penalty of error: expressions are in an array.
The operator opens with a colon (":").
And finally, it is at the top level of the query because it is an additional criterion.

```js{}[example]
myCollection.find({
   { base-query },
   $or: [
      {expression 1},
      {expression 2}
   ]
})   
```

And in the mongo shell, don't forget the quotes.
With that said, have fun and see you next week for some great new adventures in JavaScript!!   

