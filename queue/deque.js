class Deque {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[this.lowestCount] = element;
        }
    }
    removeBack() {
        if (this.isEmpty()) {
            return undefined;
        }
        const res = this.items[this.count - 1];
        delete this.items[this.count - 1];
        this.count--;
        return res;
    }

    addBack(element) {
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
    peekFront() {

        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    peekEnd() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count];
    }
    removeFront() {
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