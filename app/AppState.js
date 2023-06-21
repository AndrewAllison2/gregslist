import { Car } from "./models/Car.js"
import { House } from "./models/House.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Car.js').Car[]} */
  cars = loadState('cars', [Car])


  /** @type {import('./models/House.js').House[]} */
  // houses = [new House({ name: 'Basic', year: 2000, bedrooms: 3, bathrooms: 2, sqft: 1200, price: 400000, description: 'It is way overpriced!', imgUrl: 'https://media.istockphoto.com/id/1442148484/photo/3d-rendering-of-modern-suburban-house-in-the-garden.webp?b=1&s=170667a&w=0&k=20&c=acVdz2wMQAu_M9ZXOuECxSJwoKavvgo1_ZJUr8pOYWA=' })]

  houses = loadState('houses', [House])

  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
