var BinarySearchTree = function(value){
  var bst = Object.create(bstMethods);
  bst.left = null;
  bst.right = null;
  bst.value = value;
  return bst;
};

var bstMethods = {};

bstMethods.insert = function(value){
  if (this.value > value){
    if (this.left) {
      this.left.insert(value);
    }
    else {
      this.left = BinarySearchTree(value);
    }
  }
  else {
    if (this.right) {
      this.right.insert(value);
    }
    else {
      this.right = BinarySearchTree(value);
    }
  }
}

bstMethods.contains = function(value){
  if (this.value === value) return true;
  if (this.value > value){
    if (this.left){
      return this.left.contains(value);
    }
    else {
      return false;
    }
  }
  else {
    if (this.right){
      return this.right.contains(value);
    }
    else {
      return false;
    }
  }
}

bstMethods.depthFirstLog = function(cb){
  cb(this.value);
  if(this.left) {
    this.left.depthFirstLog(cb);
  }
  if(this.right) {
    this.right.depthFirstLog(cb);
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
