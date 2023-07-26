function ispar(x)
    {
        //your code here
        let stack = [];
        for(let i =0; i<x.length;i++){
            //console.log(x[i]);
            if(x[i] == '(' || x[i] == "{" || x[i] == "[")
                stack.push(x[i]);
            else{
                if(stack.length > 0){
                    const popped = stack.pop();
                    //console.log(popped,'popped',x[i],stack);
                    let exp1 = popped == "(" && x[i] != ")";
                    let exp2 = popped == "{" && x[i] != "}";
                    let exp3 = popped == "[" && x[i] != "]";
                    if(exp1 ) return false;
                    else if(exp2) return false;
                    else if(exp3) return false;
                }
                else{
                    return false
                }
            }
        }
        return stack.length > 0 ? false : true;
    }

console.log(ispar('{([])}'));