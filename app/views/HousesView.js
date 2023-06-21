export const HousesView = /*html*/`
<section class="container-fluid">

<div class="row">
<div class="col-12 text-center">
  <h1>Houses For Sale</h1>
  <button class="btn btn-primary mb-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseHouse"
    aria-expanded="false" aria-controls="collapseExample">
    List House
  </button>
</div>
</div>
<div class="row">
<div class="col-10 m-auto text-bg-primary rounded elevation-5">
  <div class="collapse" id="collapseHouse">
    <form onsubmit="app.HousesController.createHouse(event)">
      <div class="my-3">
        <input type="text" class="form-control" id="houseName" required name="name" placeholder="House Name">
      </div>
      <div class="my-3">
        <input type="text" class="form-control" id="houseYear" required name="year" placeholder="Year Built">
      </div>
      <div class="my-3">
        <input type="text" class="form-control" id="houseBedrooms" required name="bedrooms" placeholder="Number of Bedrooms">
      </div>
      <div class="my-3">
        <input type="number" class="form-control" id="houseBathrooms" required name="bathrooms" placeholder="Number of Bathrooms">
      </div>
      <div class="my-3">
        <input type="number" class="form-control" id="houseSqft" required name="sqft" placeholder="Square Footage">
      </div>
      <div class="my-3">
        <input type="number" class="form-control" required  id="housePrice" required name="price" placeholder="Price">
      </div>
      <div class="mb-3">
        <label for="houseDescription" class="form-label">Home Description</label>
        <textarea class="form-control" id="houseDescription" name="description" rows="3"></textarea>
      </div>
      <div class="my-3">
        <input type="url" class="form-control" id="houseImg" required name="imgUrl" placeholder="House Img URL">
      </div>

      <button type="submit" class= "rounded m-3 text-bg-success">Submit</button>
    </form>
  </div>
</div>
</div>


  <div id='houseListing' class="row"></div>
</section>
`