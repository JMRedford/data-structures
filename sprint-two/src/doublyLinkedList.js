var DoublyLinkedList = function() {
  var dll = Object.create(dllMethods);
  dll.head = null;
  dll.tail = null;

  return dll;
}

var dllMethods = {}

dllMethods.addToHead = function(value) {
  var node = Node(value);
  node.next = this.head;
  if(this.head)
    this.head.previous = node;
  this.head = node;

  if(!this.tail) {
    this.tail = node;
  }
}

dllMethods.removeTail = function() {

}

dllMethods.removeHead = function() {
  if(this.head) {
    var head = this.head;
    var newHead = this.head.next;

    if(newHead) {
      this.head = newHead;
      newHead.previous = null;
    }
    else {
      this.tail = null;
    }

    return head.value;
  }
  else {
    return null;
  }
}

dllMethods.addToTail = function(value) {
  var node = Node(value);
  node.previous = this.tail;
  if(this.tail)
    this.tail.next = node;
  this.tail = node;

  if(!this.head) {
    this.head = node;
  }
}

dllMethods.contains = function(value) {
  var node = this.tail;
  if (node){
    do {
      if (node.value) return true;
      node = node.next;
    } while (node);
  }
  return false;
}

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};
