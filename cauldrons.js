const data = {
  "cauldrons": {
    "winter_seasson": [
      { "id": "JN1AZ4EH3EM175457", "name": "Linaceae", "magic_description": "ZINC OXIDE", "type": "Plexiglass", "damaged": false, "color": "Yellow" },
    ],
    "summer_seasson": [
      { "id": "1D7CW5GK4AS440105", "name": "Asteraceae", "magic_description": "LEVOMENOL", "type": "Plexiglass", "damaged": true, "color": "Teal" },
    ],
    "spring_seasson": [
      { "id": "WUADU98E88N046445", "name": "Ptychomitriaceae", "magic_description": "Sesame", "type": "Rubber", "damaged": true, "color": "Orange" },
    ]
  }
};

// 1.- Mostrar la cantidad total de cauldrons
function contarCauldrons(data) {
  const seasons = Object.values(data.cauldrons);

  // usa flat para juntar todos los arrays de temporadas y obtener la cantidad total de calderos
  const totalCauldrons = seasons.flat().length;

  return totalCauldrons;
}

// llamada a la función y mostrar resultado
const cantidadCauldrons = contarCauldrons(data);
console.log(`Cantidad de cauldrons: ${cantidadCauldrons}`);

// 2- Mostrar la cantidad de cauldrons separados por temporada
function cauldronsSeasson(data) {
  const cauldrons = data.cauldrons;

  // recorre cada temporada y contamos los calderos
  for (const seasson in cauldrons) {
    const cantidad = cauldrons[seasson].length;
    console.log(`Cantidad de calderos en ${seasson}: ${cantidad}`);
  }
}

// Llamada a la función
cauldronsSeasson(data);

// 3.- Mostrar la cantidad de Cauldrons rotos agrupados por temporada

// 4.- Mostrar el color de los cauldron con magic_description "Naproxen"

// 5.- Mostrar el total de cauldrons de madera "Wood" rotos, suma de todas las temporadas

// 6.- Mostrar la Id y magic_description de los cauldron llamados "Brassicaceae"

// 7.- Mostrar el porcentaje de cauldrons dañados separados por temporada

// 8.- Mostrar el porcentaje de cauldrons de "Plexiglass" en "winter_seasson"

// 9.- Mostrar el número de cauldrons de color "Orange" en buen estado

// 10.- Mostrar el listado de posibles colores de cauldrons, sin repetir color.

