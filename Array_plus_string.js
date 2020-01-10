var arr = ["ljsdhglk", "ajshguhg", "ksdngljsg", "awojgtpi"]
var result = ""
for (var i = 0; i < 3; i++) {
    result += (arr[i])
}
arr.splice(3, 1, result)
console.log(arr)