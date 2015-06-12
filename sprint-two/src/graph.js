

var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

Graph.prototype.addNode = function(node){
  if(this.contains(node)) {
    return;
  }

  this.nodes.push(node);
};

Graph.prototype.contains = function(node){
  return _.contains(this.nodes, node);
};

Graph.prototype.removeNode = function(node) {
  var ind = this.nodes.indexOf(node);
  if(ind != -1) {
    this.nodes.splice(ind, 1);
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode){

  return _.some(this.edges, function(edge) {
    if(edge[fromNode] && edge[toNode]) {
      return true;
    }
  });
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.hasEdge(fromNode, toNode)) return null;
  var edge = {};
  edge[fromNode] = true;
  edge[toNode] = true;
  this.edges.push(edge)
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var ind;
  _.each(this.edges, function(edge, index) {
    if(edge[fromNode] && edge[toNode]) {
      ind = index;
    }
  });

  if(ind != -1) {
    this.edges.splice(ind, 1);
  }
};

Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, function(node){
    cb(node);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



