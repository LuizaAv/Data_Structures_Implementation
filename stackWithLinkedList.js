
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


class Node{
    constructor(value){
        this.next = null
        this.value = value
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    print(){
        let element = this.head
        while(element){
            console.log(element.value)
            element = element.next
        }
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }

        ++this.size
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        } else{
            this.tail.next = node
            this.tail = node
        }

        ++this.size
    }

    removeFront(){
        if(this.isEmpty()){
            return null
        }

        const value = this.head.value
        this.head = this.head.next
        --this.size
        return value
    }

    removeEnd(){
        if(this.isEmpty()){
            return null
        }

        const value = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            const element = this.head
            while(element.next !== this.tail){
                element = element.next
            }

            element.next = null
            this.tail = element
        }

        --this.size
        return value
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
