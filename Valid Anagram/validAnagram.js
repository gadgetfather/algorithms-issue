const s ="anagram"
const t = "nagaram"
function checkValidAnagram(s,t) { 
    //make objects to count 
    const obj1= {}
    const obj2={}
    for(let i of s) {
       if(obj1[i]) {
        obj1[i] = obj1[i] + 1
       }
       else {
        obj1[i] = 1
       }
    }

    for(let i of t) {
        if(obj2[i]) {
         obj2[i] = obj2[i] + 1
        }
        else {
         obj2[i] = 1
        }
     }

     console.log(obj1,obj2);
// check each letter
const result = shallowCheck(obj1,obj2)
return result

    
}
function shallowCheck(obj1,obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if(keys1.length!==keys2.length) {
        return false 
    }

    for(let key of keys1) {
        if(obj1[key]  !== obj2[key]) {
            return false
        }
    }
    return true
}

const output = checkValidAnagram(s,t)
console.log('Output is ', output)