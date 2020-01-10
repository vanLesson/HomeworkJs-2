var str = 'abcde'
for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === 97 || str.charCodeAt(i) === 98 || str.charCodeAt(i) === 101) {
        console.log('Я знаю эту букв')
    }
}
