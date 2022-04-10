const _items = Symbol('stackItems');
class Stack {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    size() {
        return this.count;
    }
    isEmpty() {
        return this.count === 0;
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.count--;
        const res = this.items[this.count];
        delete this.items[this.count];
        return res;
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear() {
        this.count = 0;
        this.items = {};
    }

    toString() {
        if (this.isEmpty()) {
            return '';
        }
        return JSON.stringify(this.items);
    }
}

//十进制转二进制
/**
 * 
 * @param {number} decNumber 
 */
function decimalToBinary(decNumber) {
    const remStack = new Stack();
    let num = decNumber;
    let rem;
    let binaryStr = '';
    while (num > 0) {
        rem = Math.floor(num % 2);
        remStack.push(rem);
        num = Math.floor(num / 2);
    }
    while (!remStack.isEmpty()) {
        binaryStr += remStack.pop().toString()
    }
    return binaryStr;
}

console.log(decimalToBinary(343434));