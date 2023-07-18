var inorderTraversal = function(root) {
    let res = [];
    inOrderTra(root,res);
    console.log(res)
    return res;
};

function inOrderTra(root,res){
 if(root){
    inOrderTra(root.left,res);
    res.push(root.val);
    inOrderTra(root.right,res);
 }
}