// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let node = list.getFirst()
  let next = list.getFirst()
  while(next.next && next.next.next){
    next = next.next.next
    node = node.next
    if(node === next) {
      return true
    }
  }
  return false
}

module.exports = circular;
