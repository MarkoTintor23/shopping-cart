const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    manufacturedYear: 2019,
    doors: 4,
    price: 22000,
    available: "yes",
    image: "/img/toyota-corolla.png",
  },
  {
    id: 2,
    name: "Honda Civic",
    brand: "Honda",
    manufacturedYear: 2020,
    doors: 4,
    price: 25000,
    available: "yes",
    image: "/img/honda-civic.webp",
  },
  {
    id: 3,
    name: "Ford Mustang",
    brand: "Ford",
    manufacturedYear: 2018,
    doors: 2,
    price: 35000,
    available: "no",
    image: "/img/ford mustang.jpg",
  },
  {
    id: 4,
    name: "BMW 3 Series",
    brand: "BMW",
    manufacturedYear: 2021,
    doors: 4,
    price: 45000,
    available: "yes",
    image: "/img/bmw-3.avif",
  },
  {
    id: 5,
    name: "Chevrolet Camaro",
    brand: "Chevrolet",
    manufacturedYear: 2017,
    doors: 2,
    price: 32000,
    available: "no",
    image: "/img/chevrolet-camaro.webp",
  },
  {
    id: 6,
    name: "Audi A4",
    brand: "Audi",
    manufacturedYear: 2022,
    doors: 4,
    price: 42000,
    available: "yes",
    image: "/img/audi-a4.jpg",
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    manufacturedYear: 2020,
    doors: 4,
    price: 50000,
    available: "yes",
    image: "/img/mercedes-e.webp",
  },
  {
    id: 8,
    name: "Lexus IS",
    brand: "Lexus",
    manufacturedYear: 2019,
    doors: 4,
    price: 38000,
    available: "no",
    image: "/img/lexus.avif",
  },
  {
    id: 9,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    manufacturedYear: 2021,
    doors: 4,
    price: 28000,
    available: "yes",
    image: "/img/gol.jpg",
  },
  {
    id: 10,
    name: "Subaru Outback",
    brand: "Subaru",
    manufacturedYear: 2022,
    doors: 4,
    price: 32000,
    available: "yes",
    image: "/img/subaru.jpg",
  },
];

const carList = document.querySelector("#car-list");
const soldCars = document.querySelector("#soldFilter");
const sorting = document.querySelector("#sortOptions");

const renderCars = function () {
  carList.innerHTML = "";
  cars.forEach((car) => {
    const carsHtml = `
      <div class="car" id="car-${car.id}">
        <div class="first">
          <h2>${car.name}</h2>
          <img class="images" src="${car.image}" alt="${car.name}" />
        </div>
        <div class="first">
          <p>Brand: ${car.brand}</p>
          <p>Manufactured Year: ${car.manufacturedYear}</p>
          <p>Doors: ${car.doors}</p>
          <p>Price: $${car.price}</p>
        </div>
        <div class="first">
          <p>Status: ${car.available === "yes" ? "Available" : "Sold"}</p>
        </div>
        <div class="second">
          <button class="btn-delete">Delete</button>
        </div>
      </div>
    `;
    carList.insertAdjacentHTML("beforeend", carsHtml);
  });

  const deleteBtns = document.querySelectorAll(".btn-delete");
  deleteBtns.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", function () {
      const carElement = deleteBtn.closest(".car");
      carElement.classList.add("display-none");
    });
  });
};

soldCars.addEventListener("change", function (e) {
  const isChecked = e.target.checked;
  cars.forEach((car) => {
    const carElement = document.querySelector(`#car-${car.id}`);

    if (isChecked) {
      if (car.available === "no") {
        carElement.classList.add("display-none");
      } else {
        carElement.classList.remove("display-none");
      }
    } else {
      carElement.classList.remove("display-none");
    }
  });
});

const sortCars = function () {
  const sortBy = sorting.value;

  if (sortBy === "price-asc") {
    cars.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    cars.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name-asc") {
    cars.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "name-desc") {
    cars.sort((a, b) => b.name.localeCompare(a.name));
  }

  renderCars();
};

sorting.addEventListener("change", sortCars);

renderCars();
