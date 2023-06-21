import { generateId } from "../utils/generateId.js";

export class House {
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get CardTemplate() {
    return /*html*/ `
    <div class="col-10 m-auto p-3">

      <div class="row elevation-5 mb-2">
        <div class="col-4">
          <img class="img-fluid house-img"
            src= "${this.imgUrl}"
            alt="House">
        </div>
        <div class="col-8">
          <div class="d-flex justify-content-around">
            <h1>${this.name}</h1>
            <h2>Year Built: ${this.year}</h2>
          </div>

          <h2>Price: $${this.price}</h2>
          <h4>Number of Bedrooms: ${this.bedrooms}</h4>
          <h4>Number of Bathrooms: ${this.bathrooms}</h4>
          <h4>Square Footage: ${this.sqft}</h4>
          <p>${this.description}</p>
        </div>

      </div>
    </div>
    `
  }

}