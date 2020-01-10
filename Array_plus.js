var arr = [2, 23, 3]
var result = 0
for (var i = 0; i < 2; i++) {
    result += +(arr[i])
}
arr.splice(2, 1, result)
console.log(arr)