var year = prompt('Введите свой Возраст')

if (year<=18) {
    alert('Тебе надо учится')
}else if (year<=59) {
    alert('Тебе надо работать')
}else if (year<=150) {
    alert('Ты вроде Пенсионер')
}else {
    alert('Что то пошло не так')
}