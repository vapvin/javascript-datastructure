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
}
