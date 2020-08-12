class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  
  insert(value){
    const newNode = new Node(value)
    // check if the root is empty
    if(!this.root){
      this.root = newNode
      }
      else{
        let currentNode = this.root;
        // keep looping thru the tree
        while(true){
          if(value<currentNode.value){
            if(!currentNode.left){
              currentNode.left = newNode
              return this
            }else {currentNode = currentNode.left}
          }else{
            if(!currentNode.right){
              currentNode.right = newNode
              return this
            }else {currentNode= currentNode.right}
          }
        }
      }
    //Code here
  }
  lookup(value){
    if(!this.root){return false}
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left
      }else if(value > currentNode.value){
        currentNode= currentNode.right
      }else if(value === currentNode.value){
        return currentNode
      }
  
    }
    return false;
    //Code here
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
tree.lookup(20)
tree.lookup(3)
// JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





