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

// var temp = enrollment(data);
// fin de funcionalidad de Enrollment

// inicio de funcionalidad de Achievement
function getTargetedStudents(students) {
  var targetedStudents = 0;
  var studentsLength = getTotalStudents(students);

  for (var i = 0; i < studentsLength; i++) {
    var student = students[i];

    if (student.active) {
      var totalTech = 0, totalHse = 0;
      var sprints = student.sprints;
      var sprintsLength = sprints.length;
      var totalSprints = sprints.length;
      var hasMetTechTarget = 0;
      var hasMetHseTarget = 0;

      for (var j = 0; j < sprintsLength; j++) {
        var sprint = sprints[j];

        totalTech += sprint.score.tech;
        totalHse += sprint.score.hse;
      }

      hasMetTechTarget = (totalTech / totalSprints) > 1260;
      hasMetHseTarget = (totalHse / totalSprints) > 840;

      if (hasMetTechTarget && hasMetHseTarget) {
        targetedStudents++;
      }
    }
  }
}

function achievement(data, campus = campusDefault, cohort = cohortDefault) {
  var objAchievement = {};
  var students = getStudents(data, campus, cohort);

  objAchievement.targetedStudents = getTargetedStudents(students);
  // objAchievement.targetedStudentsPercent = getAchievementPercent(totalStudents, targetedStudents);
  // objAchievement.totalStudents = getActiveStudents(students);

  return objAchievement;
}

var temp = achievement(data);
// fin de funcionalidad de Achievement
