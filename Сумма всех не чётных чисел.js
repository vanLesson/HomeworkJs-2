var number = +(prompt('Your number'))
var result = 0
for (var i = 0; i < number; i++) {
    if (i % 2 !== 0) {
        result += i
    }
}
console.log(result)