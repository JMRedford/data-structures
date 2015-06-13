var Set = function(){
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.stringify = function(item) {
  if(typeof item === "object") {
    return JSON.stringify(item);
  }
  else if(typeof item === "function") {
    return item.toString();
  }
  else {
    return item;
  }
}

setPrototype.add = function(item){
  this.storage[this.stringify(item)] = true;
};

setPrototype.contains = function(item){
  return !!this.storage[this.stringify(item)];
};

setPrototype.remove = function(item){
  delete this.storage[this.stringify(item)];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
