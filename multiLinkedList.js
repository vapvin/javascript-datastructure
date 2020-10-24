class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  find(call) {
    for (
      let current = this.first, position = 0;
      current;
      curremt = current.next, position += 1
    ) {
      const result = call(current, position);

      if (result !== undefined) {
        return result;
      }
    }
    return undefined;
  }

  get(index = 0) {
    return this.find((current, position) => {
      if (position === index) {
        return current;
      }
      return undefined;
    });
  }
  indexOf(data) {
    return this.find((current, position) => {
      if (current.data === data) {
        return current;
      }

      return undefined;
    });
  }

  addFirst(value) {
    const newNode = new Node(value);
    newNode.next = this.first;

    if (this.first) {
      this.first.previous = newNode;
    } else {
      this.last = newNode;
    }
    this.first = newNode;
    this.size += 1;
    return newNode;
  }
  addLast(value) {
    const newNode = new Node(value);

    newNode.previous = this.last;
    if (this.last) {
      this.last.next = newNode;
    } else {
      this.first = newNode;
    }

    this.last = newNode;
    this.size += 1;
    return newNode;
  }
  add(value, position = 0) {
    if (position === 0) {
      return this.addFirst(value);
    }
    if (position === this.size) {
      return this.addLast(value);
    }
    const current = this.get(position);

    if (current) {
      const newNode = new Node(value);
      newNode.previous = current.previous;
      newNode.next = current;
      current.previous = newNode;
      current.previous.next = newNode;
      this.size += 1;
      return newNode;
    }
    return undefined;
  }
}
