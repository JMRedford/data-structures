function test() {
  var stacks = [];
  var queues = [];

  for(var i=0; i<1000; i++) {
    var stack = Stack();
    for(var j=0; j<i; j++) {
      stack.push(j);
      if (j % 5 == 0){
        stack.size();
      }
    }
    for(var j=0; j<i; j++) {
      stack.pop();
    }
    stacks.push(stack);
  }

  for(var i = 0;i<1000;i++){
    var queue = Queue();
    for (var j=0; j<i; j++){
      queue.enqueue(j);
      if (j % 5 == 0){
        queue.size();
      }
    }
    for (var j = 0; j < i; j++){
      queue.dequeue();
    }
    queues.push(queue);
  }
};

function pctest(){
  var stacks = [];
  var queues = [];

  for(var i=0; i<1000; i++) {
    var stack = new Stack();
    for(var j=0; j<i; j++) {
      stack.push(j);
      if (j % 5 == 0){
        stack.size();
      }
    }
    for(var j=0; j<i; j++) {
      stack.pop();
    }
    stacks.push(stack);
  }

  for(var i = 0;i<1000;i++){
    var queue = new Queue();
    for (var j=0; j<i; j++){
      queue.enqueue(j);
      if (j % 5 == 0){
        queue.size();
      }
    }
    for (var j = 0; j < i; j++){
      queue.dequeue();
    }
    queues.push(queue);
  }
};


/*functional:
dequeue: 102.4
pop: 75.3
push: 15.1
enqueue: 10*/

/*functional-shared:
dequeue: 89
pop: 67
enqueue: 5
push: 3*/

/*prototypal
pop:3.0
dequeue:2.0
enqueue:1.0
push:1.0
*/

/*pseudoclassical
pop: 6
dequeue: 4
enqueue:??
push:??*/
