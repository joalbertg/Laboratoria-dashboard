/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// se crearan las keys cohorts y cohortsList, las cuales representan
// el numero de cohortes y una lista de las cohortes respectivamente
var centers = [
  {name: 'arequipa',
    key: 'AQP'},
  {name: 'ciudad de mexico',
    key: 'CDMX'},
  {name: 'lima',
    key: 'LIM'},
  {name: 'santiago de chile',
    key: 'SCL'}
];

// se crean la cantidad de cohortes por sede
// y la lista de sus cohortes
function getCohorts() {
  for (var i = 0; i < centers.length; i++) {
    // cohortes por sede
    keys = Object.keys(data[centers[i].key]);
    // numero de cohortes
    centers[i].cohorts = keys.length;
    // cohortes
    centers[i].cohortsList = keys;
  }
}

getCohorts();
var ZERO = 0;
var campusDefault = centers[ZERO].key;
var cohortDefault = centers[ZERO].cohortsList[ZERO];

// Función que retorna estudiantes del campus y cohort seleccionado
function getStudents(data, campus = campusDefault, cohort = cohortDefault) {
  return data[campus][cohort].students;
}

/* var temp = getStudents(data); */
