const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
const target = 5

function bianrySearch (arr,target) {
let low = 0
let high = arr.length - 1

while (low<=high){
  console.log('runnin')
    const mid = Math.floor((low+high)/2)
    const midValue = arr[mid]
    if(midValue===target) {
        return mid
    } else if (target < midValue) {
        high= mid - 1
    } else {
        low  = mid + 1
    }
}
return false 

}
console.log(bianrySearch(arr,target))