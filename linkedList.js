class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class LinkedList{
    constructor(value){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(arg){
        const node = new Node(arg)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }

        ++this.size
    }

    print(){
        let element = this.head
        while(element){
            console.log(element.value)
            element = element.next
        }
    }

    append(arg){
        const node = new Node(arg)
        if(this.isEmpty()){
            this.head = node
        }else{
            let element = this.head
            while(element.next){
                element = element.next
            }

            element.next = node
        }
        ++this.size
    }

    insert(index, value){
        const node = new Node(value)

        if(index < 0 || index > this.size){
            return undefined
        }
        if(index === 0){
            this.prepend(value)
        }else{
            let element = this.head
            for(let i = 0; i < index - 1; ++i){
                element = element.next
            }

            node.next = element.next
            element.next = node

            ++this.size
        }
    }

    deleteByIndex(index){
        if(index < 0 || index >= this.size){
            return undefined
        }

        if(index === 0){
            this.head = this.head.next
            --this.size
        }else{
            let element = this.head
            for(let i = 0; i < index - 1; ++i){
                element = element.next
            }
            element.next = element.next.next
            --this.size
        }
    }

    deleteByValue(value){
        if(this.isEmpty()){
            return undefined
        }

        if(this.head.value === value){
            this.head = this.head.next
            --this.size
        }else{
            
            let element = this.head
            
            while(element.next.value !== value && element.next){
                element = element.next
            }

            if(element.next){
                element.next = element.next.next
                --this.size
                return
            }

            return undefined
        }
    }

    search(value){

        if(this.isEmpty()){
            return -1
        }

        let element = this.head
        let index = 0

        while(element){
            if(element.value === value){
                return index
            }
            element = element.next
            ++index
        }
        return -1
    }

    reverse(){
        let previous = null
        let current = this.head

        while(current){
            let next = current.next
            current.next = previous
            previous = current
            current = next
        }

        this.head = previous
    }
}


// const list = new LinkedList()
// console.log(list.isEmpty())
// console.log(list.getSize())
// list.prepend(10)
// list.append(5)
// list.insert(1, 3)
// console.log(list.print())
// list.deleteByIndex(1)
// list.deleteByValue(1)
// console.log(list.search(20))
// list.reverse()
