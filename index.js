'use strict';

class Stack {

    constructor(maxSize = 10000) {
        this._size = 0;
        this._maxSize = maxSize;
    }

    get size() {
        return this._size;
    }

    push(v) {
        this[this._size++] = v;
        if (this._size > this._maxSize) {
            throw new RangeError('Stack overflow');
        }
        return this._size;
    }

    pop() {
        if (this.isEmpty) {
            return;
        }
        const value = this[--this._size];

        delete this[this._size];
        return value;

    }

    pick() {
        if (this.isEmpty) {
            return;
        }
        return this[this._size - 1];

    }

    get isEmpty() {
        return this.size === 0;
    }

}

const userInput = prompt();
const bracketsStack = new Stack();
let flag = true;
for (const c of userInput) {
    if (c === '(') {
        bracketsStack.push(c);
    }
    if (c === ')') {
        if (bracketsStack.pick() === '(') {
            bracketsStack.pop();
        } else {
            flag = false;
            break;
        }
    }
}

if (!bracketsStack.isEmpty) {
    flag = false;
}

flag ? alert('Brackets are OK') :  alert('Something is wrong with brackets');
