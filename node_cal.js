const readline = require('readline-sync')
console.log('Welcome to my caluclator')
console.log('This  calculator is created by Krishna Gujrati')
const getinp = (a, b) => {
  if (isNaN(a) || a == '') {
    n1 = readline.question('Enter 1st number ')
    return getinp(n1, b)
  }
  if (isNaN(b) || b == '') {
    n2 = readline.question('Enter 2nd number ')
    return getinp(a, n2)
  }
  return { a, b }
}

const Add = (n1, n2) => {
  let sum = 0
  sum = Number(n1) + Number(n2)
  return `Total sum of ${n1} and ${n2} is ${sum}`
}
const subt = (n1, n2) => {
  let subtraction = 0
  subtraction = Number(n1) - Number(n2)
  return `The subtarcton of ${n1} and ${n2} is ${subtraction}`
}
const mult = (n1, n2) => {
  let total = 0
  total = Number(n1) * Number(n2)
  return `The Multiplication of ${n1} and ${n2} is ${total}`
}
const div = (n1, n2) => {
  total = 0
  total = Number(n1) / Number(n2)
  total = total.toFixed(2)
  return `The divison of ${n1} and ${n2} is ${total}`
}

const modulo = (n1, n2) => {
  total = 0
  total = Number(n1) % Number(n2)
  return `The modulo of ${n1} and ${n2} is ${total}`
}

while (true) {
  let { a, b } = getinp('', '')
  let n1 = a
  let n2 = b
  console.log(
    "Enter 1 for '+' 2 for '-' 3 for '*' 4 for / 5 for '%' 6 for exit",
  )
  let inp = readline.question('Enter your choice ')
  if (inp === '6') {
    console.log('The program terminated')
    break
  }
  switch (inp) {
    case '1':
      console.log(Add(n1, n2))
      break
    case '2':
      console.log(subt(n1, n2))
      break
    case '3':
      console.log(mult(n1, n2))
      break
    case '4':
      console.log(div(n1, n2))
      break
    case '5':
      console.log(modulo(n1, n2))
      break
    default:
      console.log('Invalid choice')
  }
}
