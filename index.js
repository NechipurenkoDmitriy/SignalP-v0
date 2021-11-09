document.body.innerHTML = '<h2>Hello JS</h2>'

// import getValue from './modules/getValues.js'
// import mapArray from './modules/map.js'
import { getValue, mapArray, p } from './modules/helpers_array.js'

const superHero = [
  { id: 12, hero: 'batman', power: 'money' },
  { id: 34, hero: 'aquaman', power: 'fishpower' },
]

console.log(getValue(superHero, 'hero'))
console.log(getValue(superHero, 'power'))
console.log(getValue(superHero, 'id'))
console.log(mapArray(superHero, 'hero'))
console.log(p)
