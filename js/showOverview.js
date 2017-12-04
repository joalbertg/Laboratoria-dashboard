function showEnrollment(data, campus = campusDefault, cohort = cohortDefault) {
  var studentsEnrolled = document.getElementById('students-enrolled');
  var dropoutPercent = document.getElementById('students-dropout');

  var obj = enrollment(data, campus, cohort);

  studentsEnrolled.textContent = obj.studentsCurrentEnrolled;
  dropoutPercent.textContent = obj.studentsDropout;
}

showEnrollment(data);