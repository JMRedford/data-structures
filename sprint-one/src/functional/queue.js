var Queue = function(){
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
