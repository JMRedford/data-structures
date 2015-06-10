var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);

  newStack.length = 0;
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.length] = value;
  this.length += 1;
}

stackMethods.pop = function() {
  if(this.length > 0) {
    var retVal = this.storage[this.length - 1];
    delete this.storage[this.length - 1];
    this.length -= 1;
    return retVal;
  }
}

stackMethods.size = function() {
  return this.length;
}

