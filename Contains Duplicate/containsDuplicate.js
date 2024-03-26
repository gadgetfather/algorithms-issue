const nums = [1,2,3,1]
function checkContainsDuplicate(nums)  {
    const obj = {}
    for(let num of nums) {
        if(obj[num]) {
            return true
        }
        else {
            obj[num] = 1
        }
    }
    return false
};

const output = checkContainsDuplicate(nums)

console.log(output)