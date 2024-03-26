const nums = [2,7,11,15] 
const target = 9
function twoSum(nums,target) {
    const obj = {}
    for(let i = 0;i< nums.length;i++) {
        const currentNum = nums[i]
        const findIndex = target - currentNum
        const res = obj[findIndex]
        if(res!== undefined) {
            return [res,i]
        } else {
            obj[currentNum] = i
        }
    }
    return []

} 

const output = twoSum(nums,target)
console.log(output);