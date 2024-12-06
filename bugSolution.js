```javascript
// Correct usage of $inc operator with $setOnInsert
db.collection.updateOne({"_id":ObjectId("someId")},{
  $setOnInsert: {counter: 0},
  $inc: {counter: -1}
});
```