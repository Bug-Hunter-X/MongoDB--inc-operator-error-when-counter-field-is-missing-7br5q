# MongoDB $inc Operator Error
This repository demonstrates a common error encountered when using the `$inc` operator in MongoDB updates.  Specifically, it shows how attempting to increment/decrement a non-existent field can lead to errors. The solution provided demonstrates a proper way to handle this using the `$setOnInsert` operator.

## Bug
The initial code attempts to decrement a counter field. If the counter field does not exist for the document being updated, the update operation will fail.

## Solution
The solution uses the `$setOnInsert` operator in conjunction with `$inc` to correctly handle missing fields.  If the field does not exist, `$inc` will set the field to the incremented value. Otherwise it correctly increments/decrements the existing value.