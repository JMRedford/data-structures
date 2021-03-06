describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a("function");
    expect(tree.contains).to.be.a("function");
    expect(tree.hasOwnProperty("value")).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function(){
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function(){
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function(){
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should have links to a parent', function() {
    expect(tree.parent).to.equal(null);
    tree.addChild(15);
    var child = tree.children[0];
    expect(child.parent).to.equal(tree);
  });

  it('should disconnect both trees when removeFromParent is called on the child', function() {
    tree.addChild(15);
    var child = tree.children[0];
    child.removeFromParent();
    expect(child.parent).to.equal(null);
    expect(tree.children.length).to.equal(0);
    tree.addChild(5);
    tree.children[0].addChild(2);
    tree.children[0].addChild(3);
    var grandChild = tree.children[0].children[1];
    grandChild.removeFromParent();
    expect(grandChild.parent).to.equal(null);
    expect(tree.children[0].children.length).to.equal(1);
  })

  it('should traverse the tree and call a function at each node', function() {
    tree.addChild(1);
    tree.addChild(2);
    child1 = tree.children[0];
    child2 = tree.children[1];
    child1.addChild(11);
    child1.addChild(12);
    child2.addChild(21);

    var array = [];
    var func = function(value) {array.push(value);};
    tree.traverse(func);
    expect(array).to.eql([undefined, 1,11,12,2,21]);
  });
});
