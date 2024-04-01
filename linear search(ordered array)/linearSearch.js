const arr = [1,2,3,5]
const target = 6

function linearSearch (arr,target) {
    for(let i = 0;i<arr.length; i++) {
        if(arr[i] === target) {
            return i
        } else if(arr[i]>target) {
            break
        }
    }
    return false
}