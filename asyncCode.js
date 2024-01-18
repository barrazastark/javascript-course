
// cualquier codigo asincrono siempre se ejecutaraá despues del codigo sincrono


// Problemas en UI: esperar requests y luego mostrar la informacion

// Promesas: objecto espcial en js para manejar codigo asincrono

/* var promesa = new Promise((resolved, rejected) => {
    // AQUI yo haremos algun request o tarea asincrona

    /* setTimeout(() => {
    
        resolved(10);

    }, 2_000); 

    fetch("https://jsonplaceholder.typicode.com/todos/1").then(response => {

        response.json().then(data => {

            resolved(data);

        });

    });

});

// states: Pending, fulfilled, rejected

promesa.then((valorAny) => {
    console.log(valorAny);
    document.body.innerText = valorAny.title;
    // pinto en la UI el valor
}); */

 // esto esta mal implementado, 
 // callback hell: cuando tenemos muchos callbacks anidados

// Async / Await: es una forma de escribir codigo asincrono que paresza sincrono

async function getTodo(id) {
    var resultContainer = document.getElementById("resultContainer");
    resultContainer.innerHTML = "<p>Cargando...</p>";

    
    // al poner la palabra await, el thread de ejecucion se detendra hasta que la promsea se resuelva
    var response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`); // 1s
    var data = await response.json(); // .5s
    resultContainer.innerHTML = "";
    var div = document.createElement("div");
    

    if (response.ok) {
        div.innerText = data.title;
        div.classList.add(data.completed ? "completed" : "not-completed")
    }
    else {
        div.innerText = "Error: No existe ese todo!!";
    }

    resultContainer.appendChild(div);
}

document.onreadystatechange = () => {

    if (document.readyState === 'complete') {
        
        var input = document.getElementById("input");
        var button = document.getElementById("button");


        button.addEventListener("click", () => {

            var id = input.value;

            getTodo(id);

        });

    }

}

