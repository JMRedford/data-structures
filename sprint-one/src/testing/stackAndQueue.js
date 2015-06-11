function setupFunctional() {
  Queue = function(){
    var someInstance = {};

    // Use an object with numeric keys to store values
    var storage = {};
    var first = 0;
    var last = -1;
    // Implement the methods below

    someInstance.enqueue = function(value){
      storage[last+1] = value;
      last += 1;
    };

    someInstance.dequeue = function(){
      if(storage.hasOwnProperty(first)){
        var toRet = storage[first];
        delete storage[first];
        first += 1;
        return toRet;
      }
    };

    someInstance.size = function(){
      return last - first + 1;
    };

    return someInstance;
  };

  Stack = function(){
    var size = 0;
    var someInstance = {};

    // Use an object with numeric keys to store values
    var storage = {};

    // Implement the methods below
    someInstance.push = function(value){
      storage[size+1] = value;
      size += 1;
    };

    someInstance.pop = function(){
      if (size > 0){
        var retItem = storage[size];
        delete storage[size];
        size -= 1;
        return retItem;
      }
    };

    someInstance.size = function(){
      return size;
    };

    return someInstance;
  };
}

var setupFunctionalShared = function() {
  Queue = function(){
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var newQueue = {};
    newQueue.first = 0;
    newQueue.last = -1;
    newQueue.storage = {};

    extend(newQueue, queueMethods);

    return newQueue;
  };

  var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };

  var queueMethods = {};

  queueMethods.enqueue = function(value) {
    this.storage[this.last+1] = value;
    this.last += 1;
  }

  queueMethods.dequeue = function() {
    if (this.storage.hasOwnProperty(this.first)){
      var retVal = this.storage[this.first];
      delete this.storage[this.first];
      this.first += 1;
      return retVal;
    }

  }

  queueMethods.size = function() {
    return this.last - this.first + 1;
  }

  Stack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var newStack = {};
    newStack.storage = {};
    newStack.length = 0;

    extend(newStack,stackMethods);

    return newStack;
  };

  var extend = function(to, from) {
    for (var key in from) {
      to[key] = from[key];
    }
  };

  var stackMethods = {};

  stackMethods.push = function(value) {
    this.storage[this.length] = value;
    this.length += 1;
  }

  stackMethods.pop = function(){
    if (this.length > 0){
      var retVal = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length -= 1;
      return retVal;
    }
  }

  stackMethods.size = function(){
    return this.length;
  }

}

var setupPrototypal = function() {
  Queue = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    var newQueue = Object.create(queueMethods);
    newQueue.first = 0;
    newQueue.last = -1;
    newQueue.storage = {};

    return newQueue;
  };

  var queueMethods = {};

  queueMethods.enqueue = function(value) {
    this.storage[this.last+1] = value;
    this.last += 1;
  }

  queueMethods.dequeue = function() {
    if(this.last >= this.first) {
      var retVal = this.storage[this.first];
      delete this.storage[this.first];
      this.first += 1;
      return retVal;
    }
  }

  queueMethods.size = function() {
    return this.last - this.first + 1;
  }

  Stack = function() {
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
}


var setupPseudoclassical = function() {
  Queue = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    this.storage = {};
    this.last = -1;
    this.first = 0;

  };

  Queue.prototype.enqueue = function(value){
    this.storage[this.last+1] = value;
    this.last += 1;
  }

  Queue.prototype.dequeue = function(){
    if (this.last >= this.first){
      var retValue = this.storage[this.first];
      delete this.storage[this.first];
      this.first += 1;
      return retValue;
    }
  }

  Queue.prototype.size = function(){
    return this.last - this.first + 1;
  }

  Stack = function() {
    // Hey! Rewrite in the new style. Your code will wind up looking very similar,
    // but try not not reference your old code in writing the new style.
    this.length = 0;
    this.storage = {};

  };

  Stack.prototype.push = function(value){
    this.storage[this.length] = value;
    this.length += 1;
  }

  Stack.prototype.pop = function(){
    if (this.length > 0){
      var retVal = this.storage[this.length-1];
      delete this.storage[this.length -1];
      this.length -= 1;
      return retVal;
    }
  }

  Stack.prototype.size = function(){
    return this.length;
  }
}

