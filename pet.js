const petNameInput = document.getElementById("petName");
const ownerNameInput = document.getElementById("ownerName");
const speciesInput = document.getElementById("species");
const breedInput = document.getElementById("breed");
const petList = document.getElementById("pet-list");

const pets = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }

  sameOwner = function (otherPet) {
    return this.ownerName === otherPet.ownerName;
  };
}

function confPets() {
  petList.innerHTML = "";

  pets.forEach(function (pet, i) {
    let sharedOwners = "";

    for (let j = 0; j < pets.length; j++) {
      if (j !== i && pet.sameOwner(pets[j])) {
        sharedOwners = sharedOwners + pets[j].petName;
      }
    }

    let b = "";
    if (sharedOwners.length > 0) {
      b = `<span class="badge bg-success mt-2">stesso padrone di: ${sharedOwners}</span>`;
    }

    const col = document.createElement("div");
    col.className = "col-6";
    col.innerHTML = `
      <div class="card border-0 rounded-4 p-3 h-100" style="background-color:#2c2c2c;">
        <div class="card-body">
          <h5 class="text-white fw-semibold mb-1">${pet.petName}</h5>
          <p class="text-secondary small mb-1">Padrone: ${pet.ownerName}</p>
          <p class="text-secondary small mb-1">Specie: ${pet.species}</p>
          <p class="text-secondary small mb-0">Razza: ${pet.breed}</p>
          ${b}
        </div>
      </div>
    `;
    petList.appendChild(col);
  });
}

const form = document.getElementById("pet-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const petName = petNameInput.value;
  const ownerName = ownerNameInput.value;
  const species = speciesInput.value;
  const breed = breedInput.value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);
  console.log("PET SALVATO!", newPet);

  confPets();
  form.reset();
});
