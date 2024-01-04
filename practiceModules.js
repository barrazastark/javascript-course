import { 
    suma, 
    resta, 
    division, 
    multiplicacion
} from "./utils.js"

import { test, expect } from "./testingFramework.js";

// Hay que implementar las pruebas

test("Probando suma", function(){
    var result = suma(10,50);
    var result2 = suma(-10,-10);


    expect(result).toBe(60);
    expect(result2).toBe(-20);
});

test("Probando resta", function(){
    var result = resta(10,50);
    var result2 = resta(-10,-10);

    expect(result).toBe(-40);
    expect(result2).toBe(0);
});