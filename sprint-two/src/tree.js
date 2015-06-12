var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
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
  var toAdd = Tree(value);
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


/*
 * Complexity: What is the time complexity of the above functions?
 */
