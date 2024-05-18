

class HashTable{
    constructor(size){
        this.table = Array(size)
        this.size = size
    }

    hash(key){
        let sumOfCharsCode = 0
        for(let i = 0; i < key.length; ++i){
            sumOfCharsCode += key.charCodeAt(i)
        }
        return sumOfCharsCode % this.size
    }

    set(key, value){
        let index = this.hash(key)
        let item = this.table[index]
        if(!item){
            item = [[key, value]]
        }else{
            let sameKey = item.find((elem) => elem[0] === key)
            if(sameKey){
                sameKey[1] = value
            }else{
                item.push([key, value])
            }
        }

        this.table[index] = item
    }

    get(key){
        let index = this.hash(key)
        let item = this.table[index]
        if(item){
            let sameKey = item.find((elem) => elem[0] === key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
    }

    delete(key){
        let index = this.hash(key)
        let item = this.table[index]

        if(item){
            let sameKey = item.find((elem) => elem[0] === key)
            if(sameKey){
                item.splice(item.indexOf(sameKey), 1)
            }
        }
    }

    printElements(){
        for(let i = 0; i < this.table.length; ++i){
            if(this.table[i] !==  undefined){
                console.log(`[ ${i} : ${this.table[i]} ]`)
            }
        }
    }
}

// let hashTable = new HashTable(50)
// hashTable.set('name', "John")
// hashTable.set('surename', "Smith")
// console.log(hashTable.printElements())
// console.log(hashTable.get('name'))
// hashTable.set("name", "Luiza")
// hashTable.set("mane", "something")
// console.log(hashTable.printElements())
// hashTable.delete("name")
// hashTable.printElements()
