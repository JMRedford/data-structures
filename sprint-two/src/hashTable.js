var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var listAtIndex = this._storage.get(i);
  if(listAtIndex === undefined) {
    listAtIndex = LinkedList();
    listAtIndex.addToTail([k,v]);
    this._storage.set(i,listAtIndex);
  } else {
    var nodePoint = listAtIndex.findKey(k);
    if(nodePoint) {
      nodePoint.value[1] = v;
    } else {
      listAtIndex.addToTail([k,v]);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var listAtIndex = this._storage.get(i);
  if(!listAtIndex) {
    return null;
  } else {
    var node = listAtIndex.findKey(k);
    if (node){
      return node.value[1];
    }
    else {
      return null;
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var listAtIndex = this._storage.get(i);
  listAtIndex.removeKey(k);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
