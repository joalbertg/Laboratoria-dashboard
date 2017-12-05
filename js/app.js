/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// constantes para total de puntos tech y hse
var TECH = 1800;
var HSE = 1200;

// se crearan las keys cohorts y cohortsList, las cuales representan
// el numero de cohortes y una lista de las cohortes respectivamente
var centers = [
  {
    name: 'arequipa',
    key: 'AQP'
  },
  {
    name: 'ciudad de méxico',
    key: 'CDMX'
  },
  {
    name: 'lima',
    key: 'LIM'
  },
  {
    name: 'santiago de chile',
    key: 'SCL'
  }
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

// cargamos los keys para identificar los cohorts
getCohorts();

var ZERO = 0;
var campusDefault = centers[ZERO].key;
var cohortDefault = centers[ZERO].cohortsList[ZERO];

// Función que retorna estudiantes del campus y cohort seleccionado
function getStudents(data, campus = campusDefault, cohort = cohortDefault) {
  return data[campus][cohort].students;
}

// Función que retorna los ratings del campus y cohort seleccionado
function getRatings(data, campus, cohort) {
  return data[campus][cohort].ratings;
}
/* var temp = getStudents(data); */

function campusCohortDropdown(campus = centers) {
  var totalCampus = Object.keys(campus).length;
  var title = document.getElementsByClassName('cohort')[0].firstElementChild;
  var dropdown = document.getElementsByClassName('dropdown')[0];
  var itemList = dropdown.getElementsByClassName('item-list')[0];

  title.textContent = campus[0].name.toUpperCase() + ' ' + campus[0].cohortsList[0];
  itemList.textContent = '';

  for (var i = 0; i < totalCampus; i++) {
    var li = document.createElement('li');
    var span = document.createElement('span');
    var totalCohort = campus[i].cohorts;

    li.classList.add('line');
    span.classList.add('checkbox');

    li.appendChild(span);
    li.appendChild(document.createTextNode(campus[i].name));

    itemList.appendChild(li);

    for (var j = 0; j < totalCohort; j++) {
      li = document.createElement('li');
      span = document.createElement('span');

      span.classList.add('checkbox');

      li.appendChild(span);
      li.appendChild(document.createTextNode(campus[i].cohortsList[j]));

      itemList.appendChild(li);
    }
  }
}

campusCohortDropdown();

// llenar dropdown
// Funcionalidad del dropdown
var dropdowns = document.getElementsByClassName('dropdown');
var totalDropdowns = dropdowns.length;

// se agregan el evento click por cada dropdown
for (var i = 0; i < totalDropdowns; i++) {
  dropdowns[i].addEventListener('click', showMenu);
}

function showMenu(event) {
  var parent = event.target.parentElement;

  if (parent.className === 'dropdown') {
    var listMenu = parent.getElementsByClassName('item-list')[0];

    listMenu.classList.toggle('hide');
    listMenu.classList.toggle('show');
  }
}

var menuSedeCohort = document.querySelector('.item-list-sede-cohort-js');

menuSedeCohort.addEventListener('click', selectCampusCohort);

// logica para seleccionar dropdown
function selectCampusCohort(event) {
  var currentMenu = document.getElementsByClassName('menu-nav active')[0];
  var campus = null;
  var cohort = null;

  if (event.target.className === 'line') {
    var totalCenters = Object.keys(centers).length;
    var centinel = false;

    for (var i = 0; i < totalCenters && !centinel; i++) {
      if (centers[i].name === event.target.textContent.toLowerCase().trim()) {
        centinel = true;
        campus = centers[i];
      }
    }

    var title = document.getElementsByClassName('cohort')[0].firstElementChild;

    cohort = Object.keys(data[campus.key])[0];

    title.textContent = (campus.name + ' ' + cohort).toUpperCase();
  } else {
    var centinel = false;
    var sibling = event.target;

    // se busca el hermano anterior para encontrar la sede
    while (!centinel) {
      sibling = sibling.previousElementSibling;

      if (sibling.className === 'line') {
        centinel = true;
      }
    }

    var totalCenters = Object.keys(centers).length;

    centinel = false;

    for (var i = 0; i < totalCenters && !centinel; i++) {
      if (centers[i].name === sibling.textContent.toLowerCase().trim()) {
        centinel = true;
        campus = centers[i];
      }
    }

    var title = document.getElementsByClassName('cohort')[0].firstElementChild;

    cohort = event.target.textContent.toLowerCase().trim();
    title.textContent = (campus.name + ' ' + cohort).toUpperCase();
  }

  if (currentMenu.textContent.toLowerCase() === 'overview') {
    callOverview(data, campus.key, cohort);
  } else if (currentMenu.textContent.toLowerCase() === 'students') {
    showStudentDetail(data, campus.key, cohort);
  }
  
  event.target.parentElement.classList.toggle('hide');
  event.target.parentElement.classList.toggle('show');
}

// se llaman a los metodos que modifican el overview
function callOverview(data, campus = campusDefault, cohort = cohortDefault) {
  showEnrollment(data, campus, cohort);
  showAchievement(data, campus, cohort);
  showNetPrometerScore(data, campus, cohort);
  showTechSkills(data, campus, cohort);
  showStudentSatisfaction(data, campus, cohort);
  showTeacherRating(data, campus, cohort);
  showLastJediMasterRating(data, campus, cohort);
}
