const arr = [1,2,3,5]
const target = 6

function insertInOrderedArray(arr,num) {
    for(let i = 0; i<arr.length;i++) {
        if(arr[i]>num) {
            arr.splice(i,0,num)
            return arr
        } 
        console.log(arr[i])
    }
    arr.splice(arr.length,0,num)
           
    return arr
}

console.log(insertInOrderedArray(arr,target))