const treeify = require('treeify')

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
            return this
        }
        let current = this.root

        while(true){
            
            if(value < current.value){
                if(!current.left){
                    current.left = newNode
                    return this

                }
                current = current.left;
            }else{
                if(!current.right){
                    current.right = newNode
                    return this
                }
                current = current.right;
            }
        }
        
    }
    
    
}

const tree = new BST()
tree.insert(20);
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(30)
console.log(treeify.asTree(tree,true))
