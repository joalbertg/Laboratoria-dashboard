// inicio de funcionalidad de Enrollment

// obtiene el total de estudiantes
function getTotalStudents(students) {
  return students.length;
}

// obtiene el total de deserciones
function getDropoutStudents(students) {
  var totalDropouts = 0;
  var studentsLength = getTotalStudents(students);

  for (var i = 0; i < studentsLength; i++) {
    var student = students[i];

    if (!student.active) {
      totalDropouts++;
    }
  }
  return totalDropouts;
}

// obtiene el total de estudiantes actualmente cursando
function getStudentsCurrentEnrolled(totalStudents, totalDropouts) {
  return totalStudents - totalDropouts;
}

// obtiene el porcentaje de estudiantes con desercion
function getStudentsDropout(totalStudents, totalDropouts) {
  return (totalDropouts / totalStudents * 100).toFixed(2);
}

// crea un objeto para la funcionalidad de enrollment
// con la key studentsCurrentEnrolled y studentsDropout
function enrollment(data, campus = campusDefault, cohort = cohortDefault) {
  var objEnrollment = {};
  var students = getStudents(data, campus, cohort);

  var totalStudents = getTotalStudents(students);
  var totalDropouts = getDropoutStudents(students);

  objEnrollment.studentsCurrentEnrolled = getStudentsCurrentEnrolled(totalStudents, totalDropouts);
  objEnrollment.studentsDropout = getStudentsDropout(totalStudents, totalDropouts);

  return objEnrollment;
}

var temp = enrollment(data);
// fin de funcionalidad de Enrollment