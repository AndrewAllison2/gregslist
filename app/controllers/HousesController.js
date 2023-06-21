import { AppState } from "../AppState.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";
import { houseService } from "../services/HousesService.js";

function _drawHouse() {
  // debugger
  const houses = AppState.houses
  let template = ''

  houses.forEach(house => template += house.CardTemplate)
  setHTML('houseListing', template)
    ;
}

export class HousesController {
  constructor() {
    console.log('This is the house controller', AppState.houses);
    _drawHouse()


    AppState.on('houses', _drawHouse)
  }

  createHouse(event) {
    event.preventDefault()
    console.log('Did it submit???');

    const form = event.target

    const houseData = getFormData(form)

    console.log('This is the house data', houseData);

    houseService.createHouse(houseData)
    form.reset()

  }
}