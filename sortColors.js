
/**
Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.
Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
 */

function sortColor(colors){
    let i=0,j=colors.length-1,low=0;
    while(i<=j){
        if(colors[i] == 0) {
            swap(i,low,colors);
            low++;
            i++;
        }
        else if (colors[i] == 2){
            swap(i,j,colors);
            j--;
        }else{
            i++
        }
    }
    console.log({colors})
}
function swap(i,j,colors){
    let temp = colors[i];
    colors[i]= colors[j];
    colors[j]= temp;
    return colors
}
sortColor([1,0,2]);
console.log('<---  ✌️new line    --->');
sortColor([2,0,2,1,1,0])