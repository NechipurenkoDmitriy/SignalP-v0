document.body.innerHTML = '<h2>Hello JS</h2>'

import getValue from './modules/getValues.js'
import mapArray from './modules/map.js'
// const dataTest = [1, 4, 5]
// const dataFromFile = [-5.57e-7, -0.116255]

// console.log(dataTest)
// console.log(dataFromFile)

// массив тестовый
const superHero = [
  { id: 12, hero: 'batman', power: 'money' },
  { id: 34, hero: 'aquaman', power: 'fishpower' },
]

// let res = []
// for (let i = 0; i < superHero.length; i++) {
//   res.push(superHero[i]['power'])
// }

console.log(getValue(superHero, 'hero'))
console.log(getValue(superHero, 'power'))
console.log(getValue(superHero, 'id'))
console.log(mapArray(superHero, 'hero'))

// function getValue (array, key) {
//     let res = []
//     for (let i = 0; i < array.length; i++) {
//       res.push(array[i][key])
//     }
//     return res
// }
