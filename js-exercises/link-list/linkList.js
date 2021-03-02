import LinkListNode from './linkListNode';

export default class LinkList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new LinkListNode(value);
    node.next = this.head;
    this.head = node;
  }

  append(value) {
    const endNode = new LinkListNode(value);
    let current = this.head;
    if (!current) {
      this.head = endNode;
      return;
    }
    while (current.next !== null) {
      current = current.next;
    }

    current.next = endNode;
  }

  delete(value) {
    let current = this.head;
    if (current.value === value) {
      this.head = this.head.next;
      return;
    }
    while (current) {
      if (current.next && current.next.value === value) {
        current.next = current.next.next;
      }
      current = current.next;
    }
  }

  traverse() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }

  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
  }

  length() {
    let length = 0;
    let current = this.head;
    while (current) {
      length += 1;
      current = current.next;
    }
    return length;
  }
}
