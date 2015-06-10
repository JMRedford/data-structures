var Queue = function() {
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

