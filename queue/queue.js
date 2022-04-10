class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    isEmpty() {
        return this.count === this.lowestCount;
    }
    isSize() {
        return this.count - this.lowestCount;
    }

    clear() {
        this.lowestCount = 0;
        this.count = 0;
        this.items = {};
    }
    peek() {

        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const res = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return res;
    }
    toString() {
        if (this.isEmpty()) {
            return '';
        }
        return JSON.stringify(this.items);
    }
}

//击鼓传花
/**
 * 
 * @param {string[]} elementsList 
 * @param {number} num 
 */
function hotPotato(elementsList, num) {
    const queue = new Queue();
    const eliminatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]);
    }
    while (queue.isSize() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        eliminatedList.push(queue.dequeue());
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue(),
    }
}

const result = hotPotato(['John', 'Jack', 'Camila', 'Ingrid', 'Carl'], 7);

result.eliminated.forEach(item => {
    console.log(`%c ${item} has been out!!`, 'color:red');
})
console.log(`%c winner is ${result.winner}`, 'color:green');