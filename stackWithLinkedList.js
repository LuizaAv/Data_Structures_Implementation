const LinkedList = require('./linkedListWithTailPointer.js')


class Stack{
    constructor(){
        this.list = new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.removeFront()
    }

    peek(){
        return this.head.value
    }

    getSize(){
        return this.list.getSize()
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    print(){
        return this.list.print()
    }
}




// let stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// console.log(stack.print())
// stack.pop()
// console.log(stack.print())
