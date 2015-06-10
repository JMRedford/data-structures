var Stack = function(){
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
