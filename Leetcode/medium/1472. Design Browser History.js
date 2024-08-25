class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class BrowserHistory {
  constructor(homepage) {
    this.current = new Node(homepage);
  }

  visit(url) {
    this.current.next = new Node(url, this.current);
    this.current = this.current.next;
  }

  back(steps) {
    while (this.current.prev && steps > 0) {
      this.current = this.current.prev;
      steps--;
    }

    return this.current.value;
  }

  forward(steps) {
    while (this.current.next && steps > 0) {
      this.current = this.current.next;
      steps--;
    }

    return this.current.value;
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
