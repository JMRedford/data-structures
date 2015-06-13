var HashTable = function(){
  this._numValues = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var listAtIndex = this._storage.get(i);
  this.putIntoBucket(i,listAtIndex,k,v);
  this._numValues++;
  if (this._numValues >= 0.75 * this._limit){
    this.expand();
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

HashTable.prototype.putIntoBucket = function(index, listAtIndex, k, v) {
  if(listAtIndex === undefined) {
    listAtIndex = LinkedList();
    listAtIndex.addToTail([k,v]);
    this._storage.set(index,listAtIndex);
  } else {
    var nodePoint = listAtIndex.findKey(k);
    if(nodePoint) {
      nodePoint.value[1] = v;
    } else {
      listAtIndex.addToTail([k,v]);
    }
  }
}

HashTable.prototype.resize = function(newLimit){
  var newStorage = LimitedArray(newLimit);
  for (var i = 0; i < this._limit; i++){
    var curBucket = this._storage.get(i);
    if(curBucket) {
      var curNode = curBucket.head;
      while (curNode){
        var j = getIndexBelowMaxForKey(curNode.value[0],newLimit);
        var listAtIndex = newStorage.get(j);
        if (!listAtIndex){
          listAtIndex = LinkedList();
          newStorage.set(j, listAtIndex);
        }
        this.putIntoBucket(j,listAtIndex, curNode.value[0], curNode.value[1]);
        curNode = curNode.next;
      }
    }
  }
  this._limit = newLimit;
  this._storage = newStorage;
};

HashTable.prototype.expand = function() {
  this.resize(this._limit * 2);
}

HashTable.prototype.contract = function() {
  this.resize(this._limit / 2);
}
// HashTable.prototype.contract = function(){
//   var newLimit = this._limit / 2;
//   var newStorage = LimitedArray(newLimit);
//   for (var i = 0; i < this._limit; i++){
//     var curBucket = this._storage.get(i);
//     var curNode = curBucket.head;
//     while (curNode){
//       var j = getIndexBelowMaxForKey(curNode.value[0],newLimit);
//       var listAtIndex = newStorage.get(j);
//       this.putIntoBucket(j,listAtIndex, curNode.value[0], curNode.value[1]);
//       curNode = curNode.next;
//     }
//   }
//   this._limit = newLimit;
//   this._storage = newStorage;
// }

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var listAtIndex = this._storage.get(i);
  var didRemove = listAtIndex.removeKey(k);
  if (didRemove) this._numValues--;
  if (this._numValues <= 0.25 * this._limit && this._limit > 8) {
    this.contract();
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
