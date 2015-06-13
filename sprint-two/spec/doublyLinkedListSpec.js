describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and a tail', function() {
    expect(doublyLinkedList).to.have.property("head");
    expect(doublyLinkedList).to.have.property("tail");
  });

  it('should add nodes at the head', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(7);
    expect(doublyLinkedList.head.value).to.equal(7);
  });

  it('should designate a new tail when a new node is added to an empty list', function() {
    doublyLinkedList.addToHead(5);
    doublyLinkedList.addToHead(7);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });

  it('should add a previous pointer to a new head node', function() {
    doublyLinkedList.addToHead(1);
    var oldHead = doublyLinkedList.head;
    doublyLinkedList.addToHead(2);
    var newHead = doublyLinkedList.head;
    expect(oldHead.previous).to.equal(newHead);
  });

  it('should add nodes at the tail', function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    var head = doublyLinkedList.head;
    var tail = doublyLinkedList.tail;
    expect(head.value).to.equal(1);
    expect(tail.value).to.equal(2);
    expect(tail.previous).to.equal(head);
    expect(tail.next).to.equal(null);
    expect(head.next).to.equal(tail);
    expect(head.previous).to.equal(null);
  })

  it("should return the value of the former head when removeHead is called", function(){
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it("should update the head pointer when removeHead is called", function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(2);
  });

  it("contains should return wether the value is in the list", function() {
    doublyLinkedList.addToTail(1);
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToHead(4);
    expect(doublyLinkedList.contains(3)).to.equal(true);
  });

  it("remove tail should return null for an empty list", function(){
    var val = doublyLinkedList.removeTail();
    expect(val).to.equal(null);
  });

  it("should return the value of a tail and adjust the tail", function(){
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    var val = doublyLinkedList.removeTail();
    expect(val).to.equal(3);
    expect(doublyLinkedList.tail.value).to.equal(2);
  });
});
