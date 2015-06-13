var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent || null;

  // your code here
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};

var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
}



var treeMethods = {};

treeMethods.addChild = function(value){
  var toAdd = Tree(value, this);
  this.children.push(toAdd);
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  }
  return _.some(this.children, function(child){
    return child.contains(target);
  });
};

treeMethods.removeFromParent = function(){
  var parent = this.parent;
  if (!parent) return;
  var ind = parent.children.indexOf(this);
  parent.children.splice(ind,1);
  this.parent = null;
};

treeMethods.traverse = function(cb) {
  cb(this.value);
  _.each(this.children, function(child) {
    child.traverse(cb);
  })
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
