
//  DOM: Document Object Model, it represents the HTML document as a tree structure

// we can access the DOM using the global variable document
var cars = [
    {
        id: 1,
        brand: "BMW",
        model: "X5",
        year: 2019,
        owner: "John Doe",
        color: "white",
    },
    {
        id: 2,
        brand: "Mercedes",
        model: "C200",
        year: 2018,
        owner: "John Doe",
        color: "black",
    },
    {
        id: 3,
        brand: "Audi",
        model: "A6",
        year: 2023,
        owner: "Tony",
        color: "blue"
    },
    {
        id: 4,
        brand: "VW",
        model: "Golf",
        year: 1999,
        owner: "Jose",
        color: "red"
    },
];

function handleClick(event) {
    var reusltContainer = document.getElementById("resultContainer");
    reusltContainer.innerHTML = "";
                
    var id = Number(event.target.dataset.id);
    var foundCar = cars.find(c => c.id === id);
                
                
    var newDiv = document.createElement("div");
    newDiv.innerText = `${foundCar.brand} ${foundCar.model}, ${foundCar.year}`;
               
                
    var p = document.createElement("p");
    p.innerText = `Owner: ${foundCar.owner}`;
    newDiv.appendChild(p);

    reusltContainer.appendChild(newDiv);
}

// by Id:
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      // document ready
      var titleData = "Hello World!";
      // 1. Selecting elements
      var h1 = document.getElementById("title");
  
      h1.innerText = titleData;

      var container = document.getElementById("carsContainer"); // mejorar el performance

      
      // sorting the cars by year
      cars.sort((a, b) => {
          return b.year - a.year;
      });

      cars.forEach((car) => {
        // creatig elements
        var div = document.createElement("div");
        div.innerText = `${car.brand} ${car.model}, ${car.year}`;
        div.setAttribute("data-id", car.id);
        
        div.classList.add("carItem");

        if (car.year < 2000) {
           div.classList.add("red");
        }
        else if(car.year < 2020) {
           div.classList.add("yellow");
        }
        else {
           div.classList.add("green");
        }

        // adding elements to the DOM, manipulating the DOM
        container.appendChild(div);
      });

      // Adding an event listener
      var buttons = document.getElementsByClassName("carItem");
      for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", handleClick);
      }

    }
};
// getting an element from dom costs a lot of performance, so we should store it in a variable

// template literal string: ``, featre from ES6 (2015),