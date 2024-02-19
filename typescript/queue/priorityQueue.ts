export class Queue {
  private fifo: boolean;
  private queue: any[];

  constructor(fifo = false) {
    this.fifo = fifo;
    this.queue = [];
  }

  /**
   * note, we move the logic how to retrieve the next item to the pop method here.
   * that way the pop method simply takes the first item from the queue
   */
  public push(item: any, priority = 0) {
    if (this.fifo) {
      this.queue.push({ item, priority });
    } else {
      this.queue.unshift({ item, priority });
    }
  }


  public pop() {
    this.queue = this.queue.map((obj, index) => ({ ...obj, index })).sort((a, b) => {
      if (a.priority === b.priority) {
        return a.index - b.index; // ascending order by original index if priorities are equal
      }

      return b.priority - a.priority; // descending order by priority
    });

    const { item } = this.queue.shift();

    return item;
  }
}
