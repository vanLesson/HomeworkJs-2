var number1 = Number(prompt('Input your number'))

while (isNaN(number1)) {

    number1 = Number(prompt('Пожалуйста,число'))
}
if (number1 % 2 === 0) {
    alert('Чётное')
} else alert("Не чётное")