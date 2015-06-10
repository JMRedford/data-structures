var Queue = function(){
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

