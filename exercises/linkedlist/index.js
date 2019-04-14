// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null){
    this.data = data,
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.tail = null
  }

  insertFirst(val){
    const node = new Node(val, this.head)
    this.head = node
  }

  size(){
    let counter = 0
    let current = this.head

    while(current){
      counter++
      current = current.next
    }

    return counter
  }

  getFirst(){
    // return this.head
    return this.getAt(0)
  }

  getLast(){
    // if(!this.head){
    //   return null
    // }
    //
    // let node = this.head
    // while(node){
    //   if(!node.next){
    //     return node
    //   }
    //   node = node.next
    // }
    //
    // return this.tail
    return this.getAt(this.size() - 1)
  }

  clear(){
    // this.head = null
    let node = this.head
    while (node){
      node = node.next
      this.head = node
    }
  }

  removeFirst(){
    const node = this.head
    if(node){
      this.head = node.next
      node.next = null
    }
  }

  removeLast(){
    let prev = this.head
    if(!prev){
      return;
    }


    let node = this.head.next
    if(!node){
      this.head = null
      return;
    }

    while(node.next){
      prev = node
      node = node.next
    }

    this.tail = prev
    prev.next = null
  }

  insertLast(data){
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index){
    let counter = 0
    let node = this.head

    while(node){
      if(counter === index){
        return node
      }
      counter++
      node = node.next
    }
    return null
  }

  removeAt(index){
    const prev = this.getAt(index - 1)
    const node = this.getAt(index)
    if(!node){
      return;
    }

    if(index === 0 ){
      this.removeFirst()
    } else {
      prev.next = node.next
    }
  }

  insertAt(data, index){

    if(index === 0){
      this.insertFirst(data)
    } else {
      const previous = this.getAt(index - 1) || this.getLast()

      const node = new Node(data, previous.next)
      previous.next = node
    }
  }

  forEach(func){
    let counter = 0
    let node = this.head
    while(node){
      func(node, counter)
      counter++
      node = node.next
    }
    console.log(func)
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
