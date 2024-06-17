function sumArray(arr){
    let sum = 0
    for(let item of arr){
        sum += item
    }
    return sum
}

let a = [1, 2, 3]
console.log(sumArray(a))