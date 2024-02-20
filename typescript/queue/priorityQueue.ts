export class Queue {
  private fifo: boolean;
  private queue: any[];

  constructor(fifo = false) {
    this.fifo = fifo;
    this.queue = [];
  }

  /**
   * note, we move the logic for priority to the pop() method.
   * that way the pop() method always removes front the front for both "modes" of the Queue(fifo or lifo)
   * 
   * 
   * Trade Offs:
   * FIFO
   * - push is O(1)
   * - pop is O(n*log(n)) + O(n)
   * LIFO
   * - push is O(n)
   * - pop is O(n*log(n)) + O(n)
   * 
   * If you sort in the push() method instead:
   * FIFO
   * - push is O(n*log(n)) + O(1)
   * - pop is O(n)
   * ❌LIFO
   * - push is O(n*log(n)) + O(1)
   * - pop is O(1)
   */
  public push(item: any, priority = 0) {
    if (this.fifo) {
      // FIFO queue
      // add item to the back of the array
      this.queue.push({ item, priority });
    } else {
      // LIFO stack
      // add item to the front of the array
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

    //  remove from the front of the array
    const { item } = this.queue.shift();

    return item;
  }
}
