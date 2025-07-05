
const sumArray = (array) => {
  return array.reduce((acc, num) => acc + num, 0);
};

// Función filterEvenNumbers
const filterEvenNumbers = (array) => {
  return array.filter(num => num % 2 === 0);
};

// Función findMaxNumber
const findMaxNumber = (array) => {
  return array.length > 0 ? Math.max(...array) : undefined;
};

// Función toUpperCaseStrings
const toUpperCaseStrings = (array) => {
  return array.map(str => str.toUpperCase());
};

// Función calculateAverage
const calculateAverage = (array) => {
  if (array.length === 0) return NaN;
  return sumArray(array) / array.length;
};

// Función sortNumbersAscending
const sortNumbersAscending = (array) => {
  return [...array].sort((a, b) => a - b);
};

// Función findFirstElement
const findFirstElement = (array, condition) => {
  return array.find(condition);
};

// Función countElements
const countElements = (array) => {
  return array.length;
};

// Función concatenateArrays
const concatenateArrays = (array1, array2) => {
  return [...array1, ...array2];
};

// Función squareNumbers
const squareNumbers = (array) => {
  return array.map(num => num ** 2);
};

// Función agregarHabilidad
const agregarHabilidad = (jugador, nuevaHabilidad) => {
  if (!jugador.habilidades) jugador.habilidades = [];
  if (!jugador.habilidades.includes(nuevaHabilidad)) {
    jugador.habilidades.push(nuevaHabilidad);
  }
  return jugador;
};

// Función calcularDuracionTotal
const calcularDuracionTotal = (peliculas) => {
    if (!Array.isArray(peliculas)) return 0;

    return peliculas
        .filter(p => typeof p.duracion === 'number' && p.duracion >= 0)
        .reduce((total, p) => total + p.duracion, 0);
};

// Función buscarPeliculas
const buscarPeliculas = (peliculas, titulo, genero) => {
    return peliculas.filter(p =>
        p.titulo.toLowerCase().includes(titulo.toLowerCase()) &&
        (genero === '' || (p.genero && p.genero.toLowerCase() === genero.toLowerCase()))
    );
};

// Función calcularPromedioPuntajes
const calcularPromedioPuntajes = (peliculas) => {
    if (!Array.isArray(peliculas) || peliculas.length === 0) return 0;

    const puntajesValidos = peliculas
        .filter(p => typeof p.puntaje === 'number' && p.puntaje >= 0);

    if (puntajesValidos.length === 0) return 0;

    const suma = puntajesValidos.reduce((acc, p) => acc + p.puntaje, 0);
    return suma / puntajesValidos.length;
};

const filtrarPorAño = (peliculas, año) => {
    const añoNum = parseInt(año);
    return peliculas.filter(p => Number(p.año) === añoNum);
};

// Función calcularPromedioDuracionPorGenero
const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
    if (!Array.isArray(peliculas) || peliculas.length === 0) return 0;

    const filtradas = peliculas.filter(p =>
        p.genero &&
        typeof p.genero === 'string' &&
        typeof p.duracion === 'number' &&
        p.duracion >= 0 &&
        p.genero.toLowerCase() === genero.toLowerCase()
    );

    if (filtradas.length === 0) return 0;

    const suma = filtradas.reduce((acc, p) => acc + p.duracion, 0);
    return suma / filtradas.length;
};

// Clase base Vehiculo
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}

class Automovil extends Vehiculo {
  constructor(marca, modelo, año, color, cilindrada, potencia, numPuertas, numAsientos, tipoTransmision) {
    super(marca, modelo, año);
    this.color = color;
    this.cilindrada = cilindrada;
    this.potencia = potencia;
    this.numPuertas = numPuertas;
    this.numAsientos = numAsientos;
    this.tipoTransmision = tipoTransmision;
  }

  obtenerInformacion() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Puertas: ${this.numPuertas}, Asientos: ${this.numAsientos}, Transmisión: ${this.tipoTransmision}`;
  }
}

class Motocicleta extends Vehiculo {
  constructor(marca, modelo, año, color, cilindrada, potencia, numRuedas, tipo) {
    super(marca, modelo, año);
    this.color = color;
    this.cilindrada = cilindrada;
    this.potencia = potencia;
    this.numRuedas = numRuedas;
    this.tipo = tipo;
  }

  obtenerInformacion() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ruedas: ${this.numRuedas}, Tipo: ${this.tipo}`;
  }
}

class Camion extends Vehiculo {
  constructor(marca, modelo, año, color, cilindrada, potencia, numEjes, capacidadCarga, tipoCarroceria) {
    super(marca, modelo, año);
    this.color = color;
    this.cilindrada = cilindrada;
    this.potencia = potencia;
    this.numEjes = numEjes;
    this.capacidadCarga = capacidadCarga;
    this.tipoCarroceria = tipoCarroceria;
  }

  obtenerInformacion() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ejes: ${this.numEjes}, Capacidad de Carga: ${this.capacidadCarga}, Tipo de Carrocería: ${this.tipoCarroceria}`;
  }
}

class Autobus extends Vehiculo {
  constructor(marca, modelo, año, color, cilindrada, potencia, capacidadPasajeros, tipoCombustible, tipoMotor) {
    super(marca, modelo, año);
    this.color = color;
    this.cilindrada = cilindrada;
    this.potencia = potencia;
    this.capacidadPasajeros = capacidadPasajeros;
    this.tipoCombustible = tipoCombustible;
    this.tipoMotor = tipoMotor;
  }

  obtenerInformacion() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Pasajeros: ${this.capacidadPasajeros}, Combustible: ${this.tipoCombustible}, Tipo de Motor: ${this.tipoMotor}`;
  }
}

class Bicicleta extends Vehiculo {
  constructor(marca, modelo, año, tipo, numMarchas, material, suspencion, frenos, tipoManubrio) {
    super(marca, modelo, año);
    this.tipo = tipo;
    this.numMarchas = numMarchas;
    this.material = material;
    this.suspencion = suspencion;
    this.frenos = frenos;
    this.tipoManubrio = tipoManubrio;
  }

  obtenerInformacion() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Tipo: ${this.tipo}, Marchas: ${this.numMarchas}, Material: ${this.material}, Suspensión: ${this.suspencion}, Frenos: ${this.frenos}, Tipo de Manubrio: ${this.tipoManubrio}`;
  }
}

module.exports = {
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
  Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
};

  