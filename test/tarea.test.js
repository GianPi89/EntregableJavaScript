const { 
    sumArray, 
    filterEvenNumbers, 
    findMaxNumber, 
    toUpperCaseStrings, 
    calculateAverage, 
    sortNumbersAscending, 
    findFirstElement, 
    countElements, 
    concatenateArrays, 
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo,
    Automovil,
    Motocicleta, 
    Camion, 
    Autobus, 
    Bicicleta
     
  } = require('../tarea');
  
  describe('Pruebas para las funciones de manipulación de arrays', () => {
    // Pruebas para sumArray
    describe('sumArray', () => {
      test('Suma de elementos positivos', () => {
        expect(sumArray([1, 2, 3])).toEqual(6);
      });
  
      test('Suma de elementos negativos', () => {
        expect(sumArray([-1, -2, -3])).toEqual(-6);
      });
  
      test('Suma de elementos con cero', () => {
        expect(sumArray([0, 0, 0])).toEqual(0);
      });
  
      test('Suma de elementos en array vacío', () => {
        expect(sumArray([])).toEqual(0);
      });
  
      test('Suma de elementos con decimales', () => {
        expect(sumArray([1.5, 2.5, 3.5])).toEqual(7.5);
      });
    });
  
    // Pruebas para filterEvenNumbers
    describe('filterEvenNumbers', () => {
      test('Filtrar números pares', () => {
        expect(filterEvenNumbers([1, 2, 3, 4, 5])).toEqual([2, 4]);
      });
  
      test('Filtrar números pares en array vacío', () => {
        expect(filterEvenNumbers([])).toEqual([]);
      });
  
      test('Filtrar números pares en array de solo números impares', () => {
        expect(filterEvenNumbers([1, 3, 5, 7, 9])).toEqual([]);
      });
  
      test('Filtrar números pares en array de solo números pares', () => {
        expect(filterEvenNumbers([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
      });
  
      test('Filtrar números pares en array con números positivos y negativos', () => {
        expect(filterEvenNumbers([-2, 1, -4, 3, 6])).toEqual([-2, -4, 6]);
      });
    });
  
    // Pruebas para findMaxNumber
    describe('findMaxNumber', () => {
      test('Encontrar el máximo en un array de números positivos', () => {
        expect(findMaxNumber([1, 5, 3, 9, 2])).toEqual(9);
      });
  
      test('Encontrar el máximo en un array de números negativos', () => {
        expect(findMaxNumber([-1, -5, -3, -9, -2])).toEqual(-1);
      });
  
      test('Encontrar el máximo en un array con cero', () => {
        expect(findMaxNumber([0, 0, 0])).toEqual(0);
      });
  
      test('Encontrar el máximo en un array vacío', () => {
        expect(findMaxNumber([])).toEqual(undefined);
      });
  
      test('Encontrar el máximo en un array con un solo elemento', () => {
        expect(findMaxNumber([5])).toEqual(5);
      });
    });
  
    // Pruebas para toUpperCaseStrings
    describe('toUpperCaseStrings', () => {
      test('Convertir strings a mayúsculas en un array', () => {
        expect(toUpperCaseStrings(['hello', 'world'])).toEqual(['HELLO', 'WORLD']);
      });
  
      test('Convertir strings a mayúsculas en un array vacío', () => {
        expect(toUpperCaseStrings([])).toEqual([]);
      });
  
      test('Convertir strings a mayúsculas con strings vacías', () => {
        expect(toUpperCaseStrings(['', ''])).toEqual(['', '']);
      });
  
      test('Convertir strings a mayúsculas con strings ya en mayúsculas', () => {
        expect(toUpperCaseStrings(['HELLO', 'WORLD'])).toEqual(['HELLO', 'WORLD']);
      });
  
      test('Convertir strings a mayúsculas con strings con mezcla de mayúsculas y minúsculas', () => {
        expect(toUpperCaseStrings(['HeLLo', 'wOrLD'])).toEqual(['HELLO', 'WORLD']);
      });
    });


    // Pruebas para calculateAverage
  describe('calculateAverage', () => {
    test('Calcular promedio de números positivos', () => {
      expect(calculateAverage([1, 2, 3])).toEqual(2);
    });

    test('Calcular promedio de números negativos', () => {
      expect(calculateAverage([-1, -2, -3])).toEqual(-2);
    });

    test('Calcular promedio de números con decimales', () => {
      expect(calculateAverage([1.5, 2.5, 3.5])).toEqual(2.5);
    });

    test('Calcular promedio de un array vacío', () => {
      expect(calculateAverage([])).toBeNaN();
    });

    test('Calcular promedio de un único número', () => {
      expect(calculateAverage([5])).toEqual(5);
    });
  });

  // Pruebas para sortNumbersAscending
  describe('sortNumbersAscending', () => {
    test('Ordenar números de forma ascendente', () => {
      expect(sortNumbersAscending([3, 1, 5, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Ordenar números de forma ascendente con números negativos', () => {
      expect(sortNumbersAscending([-3, -1, -5, -2, -4])).toEqual([-5, -4, -3, -2, -1]);
    });

    test('Ordenar números de forma ascendente en array vacío', () => {
      expect(sortNumbersAscending([])).toEqual([]);
    });

    test('Ordenar números de forma ascendente con un solo número', () => {
      expect(sortNumbersAscending([5])).toEqual([5]);
    });

    test('Ordenar números de forma ascendente con números ya ordenados', () => {
      expect(sortNumbersAscending([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });
  });

  // Pruebas para findFirstElement
  describe('findFirstElement', () => {
    test('Encontrar el primer elemento que cumple una condición', () => {
      const array = [2, 4, 6, 8, 10];
      const condition = (element) => element % 3 === 0;
      expect(findFirstElement(array, condition)).toEqual(6);
    });

    test('Encontrar el primer elemento que cumple una condición en array vacío', () => {
      const array = [];
      const condition = (element) => element > 5;
      expect(findFirstElement(array, condition)).toEqual(undefined);
    });

    test('Encontrar el primer elemento que cumple una condición en array de strings', () => {
      const array = ['apple', 'banana', 'grape', 'orange'];
      const condition = (element) => element.length > 5;
      expect(findFirstElement(array, condition)).toEqual('banana');
    });

    test('Encontrar el primer elemento que cumple una condición en array de objetos', () => {
      const array = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 20 }];
      const condition = (element) => element.age > 25;
      expect(findFirstElement(array, condition)).toEqual({ name: 'Bob', age: 30 });
    });

    test('Encontrar el primer elemento que cumple una condición que no se cumple en ningún elemento', () => {
      const array = [1, 2, 3, 4, 5];
      const condition = (element) => element > 10;
      expect(findFirstElement(array, condition)).toEqual(undefined);
    });
  });

  // Pruebas para countElements
  describe('countElements', () => {
    test('Contar elementos en un array no vacío', () => {
      expect(countElements([1, 2, 3])).toEqual(3);
    });

    test('Contar elementos en un array vacío', () => {
      expect(countElements([])).toEqual(0);
    });

    test('Contar elementos en un array de objetos', () => {
      expect(countElements([{a: 1}, {b: 2}, {c: 3}])).toEqual(3);
    });

    test('Contar elementos en un array de strings', () => {
      expect(countElements(['a', 'b', 'c'])).toEqual(3);
    });

    test('Contar elementos en un array con elementos duplicados', () => {
      expect(countElements([1, 2, 2, 3, 3, 3])).toEqual(6);
    });
  });

 // Pruebas para concatenateArrays
 describe('concatenateArrays', () => {
    test('Concatenar dos arrays no vacíos', () => {
      expect(concatenateArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('Concatenar dos arrays con uno vacío', () => {
      expect(concatenateArrays([], [1, 2])).toEqual([1, 2]);
    });

    test('Concatenar dos arrays con ambos vacíos', () => {
      expect(concatenateArrays([], [])).toEqual([]);
    });

    test('Concatenar dos arrays con elementos duplicados', () => {
      expect(concatenateArrays([1, 2], [2, 3])).toEqual([1, 2, 2, 3]);
    });

    test('Concatenar dos arrays de objetos', () => {
      expect(concatenateArrays([{a: 1}], [{b: 2}])).toEqual([{a: 1}, {b: 2}]);
    });
  });

  // Pruebas para squareNumbers
  describe('squareNumbers', () => {
    test('Calcular cuadrados de números positivos', () => {
      expect(squareNumbers([1, 2, 3])).toEqual([1, 4, 9]);
    });

    test('Calcular cuadrados de números negativos', () => {
      expect(squareNumbers([-1, -2, -3])).toEqual([1, 4, 9]);
    });

    test('Calcular cuadrados de números con decimales', () => {
      expect(squareNumbers([1.5, 2.5, 3.5])).toEqual([2.25, 6.25, 12.25]);
    });

    test('Calcular cuadrados de un array vacío', () => {
      expect(squareNumbers([])).toEqual([]);
    });

    test('Calcular cuadrados de un array con un solo número', () => {
      expect(squareNumbers([5])).toEqual([25]);
    });
  });

});



describe('Pruebas para la función agregarHabilidad', () => {
    test('Agregar una habilidad a un jugador sin habilidades existentes', () => {
        const jugador = {
            nombre: "Juan",
            nivel: 5,
            experiencia: 120
        };
        const jugadorConHabilidad = agregarHabilidad(jugador, "Ataque especial");
        expect(jugadorConHabilidad.habilidades).toEqual(["Ataque especial"]);
    });

    test('Agregar una habilidad a un jugador con habilidades existentes', () => {
        const jugador = {
            nombre: "Maria",
            nivel: 3,
            experiencia: 80,
            habilidades: ["Ataque básico", "Defensa"]
        };
        const jugadorConHabilidad = agregarHabilidad(jugador, "Curación");
        expect(jugadorConHabilidad.habilidades).toContain("Curación");
    });

    test('No modificar las habilidades si la nueva habilidad ya existe', () => {
        const jugador = {
            nombre: "Pedro",
            nivel: 4,
            experiencia: 100,
            habilidades: ["Ataque básico", "Defensa", "Curación"]
        };
        const jugadorConHabilidad = agregarHabilidad(jugador, "Curación");
        expect(jugadorConHabilidad.habilidades.length).toBe(3);
    });

    test('Mantener las habilidades originales si no se agrega ninguna nueva', () => {
        const jugador = {
            nombre: "Ana",
            nivel: 6,
            experiencia: 150,
            habilidades: ["Ataque especial", "Defensa"]
        };
        const jugadorConHabilidad = agregarHabilidad(jugador);
        expect(jugadorConHabilidad.habilidades).toEqual(["Ataque especial", "Defensa"]);
    });

    test('Verificar que la función devuelve el objeto jugador modificado', () => {
        const jugador = {
            nombre: "Elena",
            nivel: 7,
            experiencia: 180,
            habilidades: ["Ataque básico"]
        };
        const jugadorConHabilidad = agregarHabilidad(jugador, "Defensa especial");
        expect(jugadorConHabilidad).toHaveProperty('nombre', 'Elena');
        expect(jugadorConHabilidad).toHaveProperty('nivel', 7);
        expect(jugadorConHabilidad).toHaveProperty('experiencia', 180);
        expect(jugadorConHabilidad.habilidades).toContain("Defensa especial");
    });
});



// Datos de prueba
const peliculas = [
    { titulo: 'Pelicula1', duracion: 120, genero: 'Aventura', puntaje: 7, año: 2020 },
    { titulo: 'Pelicula2', duracion: 90, genero: 'Drama', puntaje: 8, año: 2021 },
    { titulo: 'Pelicula3', duracion: 150, genero: 'Aventura', puntaje: 6, año: 2020 },
    { titulo: 'Pelicula4', duracion: 100, genero: 'Comedia', puntaje: 9, año: 2019 },
    { titulo: 'Pelicula5', duracion: 80, genero: 'Comedia', puntaje: 8, año: 2021 },
    { titulo: 'Pelicula6', duracion: 110, genero: 'Drama', puntaje: 7, año: 2019 }
];

describe('calcularDuracionTotal', () => {
    test('calcula la duración total de todas las películas correctamente', () => {
        expect(calcularDuracionTotal(peliculas)).toBe(650);
    });

    test('devuelve 0 si no se proporcionan películas', () => {
        expect(calcularDuracionTotal([])).toBe(0);
    });

    test('devuelve la duración de una sola película correctamente', () => {
        const peliculas = [{ titulo: 'Pelicula1', duracion: 120 }];
        expect(calcularDuracionTotal(peliculas)).toBe(120);
    });
    
    test('devuelve 0 si se proporcionan películas sin duración', () => {
        const peliculas = [{ titulo: 'Pelicula1' }, { titulo: 'Pelicula2' }];
        expect(calcularDuracionTotal(peliculas)).toBe(0);
    });
    
    test('ignora las películas con duración negativa', () => {
        const peliculas = [
            { titulo: 'Pelicula1', duracion: 120 },
            { titulo: 'Pelicula2', duracion: -90 },
            { titulo: 'Pelicula3', duracion: 150 }
        ];
        expect(calcularDuracionTotal(peliculas)).toBe(270);
    });
});

describe('buscarPeliculas', () => {
    test('encuentra correctamente las películas por título y género', () => {
        expect(buscarPeliculas(peliculas, 'Pelicula1', 'Aventura')).toEqual([
            { titulo: 'Pelicula1', duracion: 120, genero: 'Aventura', puntaje: 7, año: 2020 }
        ]);
    });

    test('retorna un array vacío si no se encuentran coincidencias', () => {
        expect(buscarPeliculas(peliculas, 'PeliculaX', 'Comedia')).toEqual([]);
    });

    test('encuentra todas las películas del género especificado', () => {
        expect(buscarPeliculas(peliculas, '', 'Drama')).toEqual([
            { titulo: 'Pelicula2', duracion: 90, genero: 'Drama', puntaje: 8, año: 2021 },
            { titulo: 'Pelicula6', duracion: 110, genero: 'Drama', puntaje: 7, año: 2019 }
        ]);
    });

    test('ignora el título si no se proporciona', () => {
        expect(buscarPeliculas(peliculas, '', 'Comedia')).toEqual([
            { titulo: 'Pelicula4', duracion: 100, genero: 'Comedia', puntaje: 9, año: 2019 },
            { titulo: 'Pelicula5', duracion: 80, genero: 'Comedia', puntaje: 8, año: 2021 }
        ]);
    });

    test('ignora el género si no se proporciona', () => {
        expect(buscarPeliculas(peliculas, 'Pelicula', '')).toEqual(peliculas);
    });
});

describe('calcularPromedioPuntajes', () => {
    test('calcula el promedio de puntajes correctamente', () => {
        expect(calcularPromedioPuntajes(peliculas)).toBeCloseTo(7.5, 1);
    });

    test('devuelve 0 si no se proporcionan películas', () => {
        expect(calcularPromedioPuntajes([])).toBe(0);
    });

    test('calcula el promedio para una sola película', () => {
        const peliculas = [{ titulo: 'Pelicula1', puntaje: 8 }];
        expect(calcularPromedioPuntajes(peliculas)).toBe(8);
    });

    test('ignora las películas sin puntaje', () => {
        const peliculas = [
            { titulo: 'Pelicula1', puntaje: 7 },
            { titulo: 'Pelicula2' },
            { titulo: 'Pelicula3', puntaje: 6 }
        ];
        expect(calcularPromedioPuntajes(peliculas)).toBeCloseTo(6.5, 1);
    });

    test('ignora los puntajes negativos', () => {
        const peliculas = [
            { titulo: 'Pelicula1', puntaje: 7 },
            { titulo: 'Pelicula2', puntaje: -8 },
            { titulo: 'Pelicula3', puntaje: 6 }
        ];
        expect(calcularPromedioPuntajes(peliculas)).toBeCloseTo(6.5, 1);
    });
});

describe('filtrarPorAño', () => {
    test('filtra correctamente las películas por año', () => {
        expect(filtrarPorAño(peliculas, 2019)).toEqual([
            { titulo: 'Pelicula4', duracion: 100, genero: 'Comedia', puntaje: 9, año: 2019 },
            { titulo: 'Pelicula6', duracion: 110, genero: 'Drama', puntaje: 7, año: 2019 }
        ]);
    });

    test('retorna un array vacío si no hay coincidencias', () => {
        expect(filtrarPorAño(peliculas, 2022)).toEqual([]);
    });

    test('ignora el año si no se proporciona', () => {
        expect(filtrarPorAño(peliculas)).toEqual([]);
    });

    test('maneja correctamente un año como string', () => {
        expect(filtrarPorAño(peliculas, '2019')).toEqual([
            { titulo: 'Pelicula4', duracion: 100, genero: 'Comedia', puntaje: 9, año: 2019 },
            { titulo: 'Pelicula6', duracion: 110, genero: 'Drama', puntaje: 7, año: 2019 }
        ]);
    });

    test('filtra correctamente las películas con años negativos', () => {
        const peliculas = [
            { titulo: 'Pelicula1', año: 2022 },
            { titulo: 'Pelicula2', año: -100 },
            { titulo: 'Pelicula3', año: 2000 }
        ];
        expect(filtrarPorAño(peliculas, -100)).toEqual([{ titulo: 'Pelicula2', año: -100 }]);
    });
});

describe('calcularPromedioDuracionPorGenero', () => {
    test('calcula correctamente el promedio de duración de las películas por género', () => {
        expect(calcularPromedioDuracionPorGenero(peliculas, 'Aventura')).toBeCloseTo(135, 1);
    });

    test('retorna 0 si no hay películas del género especificado', () => {
        expect(calcularPromedioDuracionPorGenero(peliculas, 'Terror')).toBe(0);
    });

    test('maneja correctamente géneros con mayúsculas y minúsculas', () => {
        expect(calcularPromedioDuracionPorGenero(peliculas, 'drama')).toBeCloseTo(100, 1);
    });

    test('retorna 0 si no se proporcionan películas', () => {
        expect(calcularPromedioDuracionPorGenero([], 'Drama')).toBe(0);
    });

   
});

// Pruebas para la clase Vehiculo
describe('Vehiculo', () => {
    // Prueba del constructor
    test('Constructor', () => {
        const vehiculo = new Vehiculo('Ford', 'Fiesta', 2020);
        expect(vehiculo.marca).toBe('Ford');
        expect(vehiculo.modelo).toBe('Fiesta');
        expect(vehiculo.año).toBe(2020);
    });

    // Prueba del método obtenerInformacion
    test('Método obtenerInformacion', () => {
        const vehiculo = new Vehiculo('Ford', 'Fiesta', 2020);
        expect(vehiculo.obtenerInformacion()).toBe('Marca: Ford, Modelo: Fiesta, Año: 2020');
    });
});

describe('Automovil', () => {
    // Prueba del constructor
    test('Constructor', () => {
        const automovil = new Automovil('Toyota', 'Corolla', 2022, 'Rojo', 2000, 150, 4, 5, 'Automática');
        expect(automovil.marca).toBe('Toyota');
        expect(automovil.modelo).toBe('Corolla');
        expect(automovil.año).toBe(2022);
        expect(automovil.color).toBe('Rojo');
        expect(automovil.cilindrada).toBe(2000);
        expect(automovil.potencia).toBe(150);
        expect(automovil.numPuertas).toBe(4);
        expect(automovil.numAsientos).toBe(5);
        expect(automovil.tipoTransmision).toBe('Automática');
    });

    // Prueba del paso de parámetros con super a la clase padre (Vehiculo)
    test('Paso de parámetros con super', () => {
        const automovil = new Automovil('Toyota', 'Corolla', 2022, 'Rojo', 2000, 150, 4, 5, 'Automática');
        expect(automovil.obtenerInformacion()).toBe('Marca: Toyota, Modelo: Corolla, Año: 2022, Color: Rojo, Cilindrada: 2000, Potencia: 150, Puertas: 4, Asientos: 5, Transmisión: Automática');
    });
});

describe('Motocicleta', () => {
    // Prueba del constructor
    test('Constructor', () => {
        const motocicleta = new Motocicleta('Honda', 'CBR', 2021, 'Negro', 1000, 200, 2, 'Deportiva');
        expect(motocicleta.marca).toBe('Honda');
        expect(motocicleta.modelo).toBe('CBR');
        expect(motocicleta.año).toBe(2021);
        expect(motocicleta.color).toBe('Negro');
        expect(motocicleta.cilindrada).toBe(1000);
        expect(motocicleta.potencia).toBe(200);
        expect(motocicleta.numRuedas).toBe(2);
        expect(motocicleta.tipo).toBe('Deportiva');
    });

    // Prueba del paso de parámetros con super a la clase padre (Vehiculo)
    test('Paso de parámetros con super', () => {
        const motocicleta = new Motocicleta('Honda', 'CBR', 2021, 'Negro', 1000, 200, 2, 'Deportiva');
        expect(motocicleta.obtenerInformacion()).toBe('Marca: Honda, Modelo: CBR, Año: 2021, Color: Negro, Cilindrada: 1000, Potencia: 200, Ruedas: 2, Tipo: Deportiva');
    });
});

describe('Camion', () => {
    // Prueba del constructor
    test('Constructor', () => {
        const camion = new Camion('Volvo', 'FH16', 2020, 'Blanco', 16000, 600, 3, 40, 'Remolque');
        expect(camion.marca).toBe('Volvo');
        expect(camion.modelo).toBe('FH16');
        expect(camion.año).toBe(2020);
        expect(camion.color).toBe('Blanco');
        expect(camion.cilindrada).toBe(16000);
        expect(camion.potencia).toBe(600);
        expect(camion.numEjes).toBe(3);
        expect(camion.capacidadCarga).toBe(40);
        expect(camion.tipoCarroceria).toBe('Remolque');
    });

    // Prueba del paso de parámetros con super a la clase padre (Vehiculo)
    test('Paso de parámetros con super', () => {
        const camion = new Camion('Volvo', 'FH16', 2020, 'Blanco', 16000, 600, 3, 40, 'Remolque');
        expect(camion.obtenerInformacion()).toBe('Marca: Volvo, Modelo: FH16, Año: 2020, Color: Blanco, Cilindrada: 16000, Potencia: 600, Ejes: 3, Capacidad de Carga: 40, Tipo de Carrocería: Remolque');
    });
});

describe('Autobus', () => {
    // Prueba del constructor
    test('Constructor', () => {
        const autobus = new Autobus('Mercedes-Benz', 'Tourismo', 2019, 'Azul', 12000, 400, 50, 'Diesel', 'Trasero');
        expect(autobus.marca).toBe('Mercedes-Benz');
        expect(autobus.modelo).toBe('Tourismo');
        expect(autobus.año).toBe(2019);
        expect(autobus.color).toBe('Azul');
        expect(autobus.cilindrada).toBe(12000);
        expect(autobus.potencia).toBe(400);
        expect(autobus.capacidadPasajeros).toBe(50);
        expect(autobus.tipoCombustible).toBe('Diesel');
        expect(autobus.tipoMotor).toBe('Trasero');
    });

    // Prueba del paso de parámetros con super a la clase padre (Vehiculo)
    test('Paso de parámetros con super', () => {
        const autobus = new Autobus('Mercedes-Benz', 'Tourismo', 2019, 'Azul', 12000, 400, 50, 'Diesel', 'Trasero');
        expect(autobus.obtenerInformacion()).toBe('Marca: Mercedes-Benz, Modelo: Tourismo, Año: 2019, Color: Azul, Cilindrada: 12000, Potencia: 400, Pasajeros: 50, Combustible: Diesel, Tipo de Motor: Trasero');
    });
});

describe('Bicicleta', () => {
    // Prueba del constructor
    test('Constructor', () => {
        const bicicleta = new Bicicleta('Trek', 'FX 2', 2021, 'Montaña', 21, 'Aluminio', 'Doble', 'Disco', 'Recto');
        expect(bicicleta.marca).toBe('Trek');
        expect(bicicleta.modelo).toBe('FX 2');
        expect(bicicleta.año).toBe(2021);
        expect(bicicleta.tipo).toBe('Montaña');
        expect(bicicleta.numMarchas).toBe(21);
        expect(bicicleta.material).toBe('Aluminio');
        expect(bicicleta.suspencion).toBe('Doble');
        expect(bicicleta.frenos).toBe('Disco');
        expect(bicicleta.tipoManubrio).toBe('Recto');
    });

    // Prueba del paso de parámetros con super a la clase padre (Vehiculo)
    test('Paso de parámetros con super', () => {
        const bicicleta = new Bicicleta('Trek', 'FX 2', 2021, 'Montaña', 21, 'Aluminio', 'Doble', 'Disco', 'Recto');
        expect(bicicleta.obtenerInformacion()).toBe('Marca: Trek, Modelo: FX 2, Año: 2021, Tipo: Montaña, Marchas: 21, Material: Aluminio, Suspensión: Doble, Frenos: Disco, Tipo de Manubrio: Recto');
    });
});
