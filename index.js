// const BinarySearchTree = require('./bst')
// const { findHeight, isBST, thirdLargest, balancedBST, duplicateTrees } = require('./bstHelpers')



function main() {
  const BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);



  console.log(BST);
  console.log(findHeight(BST));


}

main();

function mainString() {
  const BST = new BinarySearchTree();
  BST.insert("E");
  BST.insert("A");
  BST.insert("S");
  BST.insert("Y");
  BST.insert("Q");
  BST.insert("U");
  BST.insert("E");
  BST.insert("S");
  BST.insert("T");
  BST.insert("I");
  BST.insert("O");
  BST.insert("N");



  console.log(BST);
}

function height(t, counter = 0) {
  if (!t) {
    return 0;
  }
  counter++;
  let left = counter;
  let right = counter;
  if (t.left) left = height(t.left, counter);
  if (t.right) right = height(t.right, counter);

  return left > right ? left : right;
}





/////

function trubst(t) {
  if (!t) {
    return null;
  }
  //traverse tree left and right
  //if value is lower on left and on right is higher true, else false;
  let leftCondition;
  let rightCondition;
  if (t.left < t) {
    leftCondition = trubst(t.left);
  } else {
    return false;
  }

  if (t.right > t) {
    rightCondition = trubst(t.right);
  } else {
    return false;
  }
  return !leftCondition || !rightCondition ? false : true;
}
// console.log(height(BST));

// mainString();

// function findBSTHeight(tree) {
//   if (!tree) {
//     return 0;
//   }
//   if (!tree.left && !tree.right) {
//     return 1;
//   }
//   let height = 0;
//   if (tree.right) {
//     let rightHeight = 1 + findBSTHeight(tree.right);
//     if (rightHeight > height) height = rightHeight;
//   }
//   if (tree.left) {
//     let leftHeight = 1 + findBSTHeight(tree.left);
//     if (leftHeight > height) height = leftHeight;
//   }
//   return height;
// }

// console.log(findBSTHeight(main(5)));

// function findHeight(BST) {
//   //check every possible branch of the tree
//   //increment a counter for every step down the tree
//   //return the maximum number found
//   //time complexity O(n)
//   const distances = [];
//   _leafDist(BST, 0, distances);
//   return Math.max(...distances);
// }

// function _leafDist(t, count = 0, arr = []) {
//   if (!t) {
//     arr.push(count);
//   }
//   else {
//     count++;
//     _leafDist(t.left, count, arr);
//     _leafDist(t.right, count, arr);
//   }
// }

// findHeight(BST)



// function findHeight(tree) {

//   if (tree === null) {
//     return 0
//   }

//   else {

//     let leftTree = findHeight(tree.left)
//     let rightTree = findHeight(tree.right)

//     let height = Math.max(leftTree, rightTree) + 1

//     return height
//   }

// }

// findHeight(main(tree))