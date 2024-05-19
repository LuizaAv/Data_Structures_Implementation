class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        let node = new Node(value)

        if(this.isEmpty()){
            this.root = node
        }else{
            this.addNode(this.root, node)
        }
    }

    addNode(mainNode, node){
        if(node.value < mainNode.value){
            if(mainNode.left === null){
                mainNode.left = node
            }else{
                this.addNode(mainNode.left, node)
            }
        }else{
            if(mainNode.right === null){
                mainNode.right = node
            }else{
                this.addNode(mainNode.right, node)
            }
        }
    }

    search(mainNode, value){
        if(this.isEmpty()){
            return -1
        }else{
            if(value === mainNode.value){
                return true
            }else if(value < mainNode.value){
                this.search(mainNode.left, value)
            }else{
                this.search(mainNode.right, value)
            }
        }
    }

    delete(value){
        this.root = this.deleteRecursively(this.root, value)
    }

    deleteRecursively(node, value){
        if(node === null){
            return node
        }

        if(value < node.value){
            node.left = this.deleteRecursively(node.left, value)
        }else if(value > node.value){
            node.right = this.deleteRecursively(node.right, value)
        } else{
            if(!node.left && !node.right){
                return null
            }

            if(!node.left){
                return node.right
            }else if(!node.right){
                return node.left
            }

            node.value = this.min(node.right)
            node.right = this.deleteRecursively(node.right, value)
        }

        return node
    }

    //DFS traversal

    treeTraversePreorder(node){
        if(node){
            console.log(node.value)
            this.treeTraversePreorder(node.left)
            this.treeTraversePreorder(node.right)
        }
    }

    treeTraverseInorder(node){
        if(node){
            this.treeTraverseInorder(node.left)
            console.log(node.value)
            this.treeTraverseInorder(node.right)
        }
    }

    treeTraversePostorder(node){
        if(node){
            this.treeTraversePostorder(node.left)
            this.treeTraversePostorder(node.right)
            console.log(node.value)
        }
    }

    //BFS Traversal

    bfsTreeTraverse(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let currentElement = queue.shift()
            console.log(currentElement.value)
            if(currentElement.left){
                queue.push(currentElement.left)
            }

            if(currentElement.right){
                queue.push(currentElement.right)
            }
        }
    }

    min(node){
        let minNode 
        if(node){
            while(node.left){
                node = node.left
                minNode = node
            }
        }

        return minNode.value
    }


    max(node){
        let maxNode
        if(node){
            while(node.right){
                node = node.left
                maxNode = node
            }
        }

        return maxNode.value
    }

}

// let bsTree = new BinarySearchTree()
// bsTree.insert(20)
// bsTree.insert(15)
// bsTree.insert(25)
// bsTree.insert(7)
// bsTree.insert(3)
// console.log(bsTree)
// console.log(bsTree.search(60))
// console.log(bsTree.search(5))
// bsTree.treeTraversePreorder(bsTree.root)
// bsTree.treeTraverseInorder(bsTree.root)
// bsTree.treeTraversePostorder(bsTree.root)
// bsTree.bfsTreeTraverse()
// bsTree.delete(15)
// console.log(bsTree)
// console.log(bsTree.min(bsTree.root))
// console.log(bsTree.max(bsTree.root))