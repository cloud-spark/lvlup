class Stack {
  constructor() {
    this.stack = []
    this.top = -1
  }

  push(item) {
    this.stack.push(item)
    this.top += 1
  }

  pop() {
    if (!this.stack.length) {
      console.log('The stack is empty.');
      this.top = -1

      return undefined
    }

    const val = this.stack.pop()
    this.top -= 1

    return val
  }

  peek() {
    if (this.stack.length) {
      const idx = this.stack.length - 1

      return this.stack[idx]
    }

    console.log('The stack is empty.');
    return undefined
  }

  is_empty() {
    return this.top === -1
  }
}

const s = new Stack()

console.log(s.is_empty()) // true
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
console.log(s.is_empty()) // false
console.log(s.peek()) // 5
console.log(s.pop()) // 5
console.log(s.pop()) // 4
console.log(s.pop()) // 3
console.log(s.pop()) // 2
console.log(s.pop()) // 1
console.log(s.pop()) // "The stack is empty."
console.log(s.peek()) // "The stack is empty."
console.log(s.is_empty()) // true

