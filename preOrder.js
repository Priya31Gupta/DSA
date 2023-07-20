var preorderTraversal = function(root) {
    let res = [];
    preOrder(root,res);
    console.log(res)
    return res;
};

function preOrder(root,res){
    if(root){
        res.push(root.val)
        preOrder(root.left,res);
        preOrder(root.right,res);
    }
}

var postorderTraversal = function(root) {
    let res = [];
   postOrder(root,res);
   console.log(res)
   return res;
};
function postOrder(root,res){
   if(root){
       
       postOrder(root.left,res);
       postOrder(root.right,res);
       res.push(root.val)
   }
}