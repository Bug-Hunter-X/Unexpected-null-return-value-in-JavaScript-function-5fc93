# Unexpected null return value in JavaScript function

This repository demonstrates an uncommon error in JavaScript related to unexpected null return values when using null values as parameters to a function.

## Bug Description
The function `foo` returns `null` when either `a` or `b` is `null`. This behavior might be unexpected and can lead to unexpected behavior in the calling code, especially if the calling code does not handle null values gracefully. A better solution would be to handle null values explicitly, either by returning a default value or throwing an error.

## Bug Solution
The solution is to modify the function `foo` to handle null values explicitly by returning a default value (0 in this case) or throwing an error to indicate that the parameters are invalid.