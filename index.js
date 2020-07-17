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
alert( checkCorrectBracketSequence( userInput )
    ? 'Brackets are OK'
    : 'Something is wrong with brackets' );

/**
 *
 * @param {string} str
 * @param {object} [options]
 * @param {object} options.brackets - description
 * @returns {boolean}
 */
function checkCorrectBracketSequence(str, options = {
    brackets: {
        '(': ')',
        '{': '}',
        '[': ']',
    }
}) {
    const bracketsStack = new Stack( str.length );
    const brackets = options.brackets;

    for (const s of str) {
        if (brackets[s]) {
            bracketsStack.push( s );
            continue;
        }
        if (brackets[bracketsStack.pick()] === s) {
            bracketsStack.pop();
        }
    }

    return bracketsStack.isEmpty;
}