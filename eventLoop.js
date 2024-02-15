
setInterval(() => { 
    // esto se va ejecurta cada 1s
}, 1000);

setTimeout(() => {

    console.log('Timeout 2')

}, 3_000);

setTimeout(() => {

    console.log('Timeout 1')

}, 0);

const sayGoodbye = () => {
    console.log('Goodbye')

}

const sayHello = () => {

    
    console.log('Hello')
    // al invovcar la funcion sayGoodbye, estamos creando un segundo: execution context
    sayGoodbye();
    // al terminar la ejecucion de la funcion sayGoodbye, se elimina el execution context
    // ...
}

// al invocar la funcion estamos creando un: execution context
sayHello();

// hay un execution context por default, que es el global execution context o main



// Todos los execution context asynronos, se van a la cola de tareas, Task Queue