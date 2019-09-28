// 1
const cube = (n) => n ** 3
alert(cube(+prompt('variant')))

// 2
const addDivide = (a, b, c) => (a + b) / c
let a = +prompt('a')
let b = +prompt('b')
let c = +prompt('c')
alert(addDivide(a, b, c))

// 3
function getDay(n) {
  switch(n) {
    case 1: return 'Понеділок'
    case 2: return 'Вівторок'
    case 3: return 'Середа'
    case 4: return 'Четвер'
    case 5: return 'П`ятниця'
    case 6: return 'Субота'
    case 7: return 'Неділя'
  }
}
alert(getDay(+prompt('Номер дня')))

// 4
const getDay = (n) => {
  switch(n) {
    case 1: return 'Понеділок'
    case 2: return 'Вівторок'
    case 3: return 'Середа'
    case 4: return 'Четвер'
    case 5: return 'П`ятниця'
    case 6: return 'Субота'
    case 7: return 'Неділя'
  }
}
alert(getDay(+prompt('Номер дня')))

// 5.1
const factorial = (n) => {
  let result = 1;
  for (let i = n; i > 0; i--) {
    debugger;
    result *= i;
  }
  return result;
}

// 5.2
const factorial2 = (n, result = 1) => {
  if (n != 1) {
    result *= n;
    return factorial(n-1, result);
  } else {
    return result;
  }
}

alert(factorial(+prompt('Факторіал числа 1-им способом')))
alert(factorial(+prompt('Факторіал числа 2-им способом')))