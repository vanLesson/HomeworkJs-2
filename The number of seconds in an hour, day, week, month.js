var hours = +(prompt('Введите сколько часов хотите посчитать'))
while (isNaN(hours)) {
    hours = +(prompt('Введите число'))
}
console.log(hours * 60 * 60)

var number = prompt('Input number day (d) or week (w) or month (m)')
var result = parseInt(number)
for (var i = 0; i < number.length; i++) {
    if (number.charAt(i) === "m") {
        result = result * 60 * 60 * 24 * 30
    } else if (number.charAt(i) === "w") {
        result = result * 60 * 60 * 24 * 7
    }
    else if (number.charAt(i) === "d") {
        result = result * 60 * 60 * 24
    }

}
console.log(result)
