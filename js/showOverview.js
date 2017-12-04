function showEnrollment(data, campus = campusDefault, cohort = cohortDefault) {
  var studentsEnrolled = document.getElementById('students-enrolled');
  var dropoutPercent = document.getElementById('students-dropout');

  var obj = enrollment(data, campus, cohort);

  studentsEnrolled.textContent = obj.studentsCurrentEnrolled;
  dropoutPercent.textContent = obj.studentsDropout;
}

showEnrollment(data);

function showAchievement(data, campus = campusDefault, cohort = cohortDefault) {
  var totalAchievements = document.getElementById('students-targeted');
  var achievementPercent = document.getElementById('achievement-percent');
  var activeStudents = document.getElementById('active-students');

  var obj = achievement(data, campus, cohort);

  totalAchievements.textContent = obj.targetedStudents;
  achievementPercent.textContent = obj.targetedStudentsPercent;
  activeStudents.textContent = obj.totalStudents;
}

showAchievement(data);

function showNetPrometerScore(data, campus = campusDefault, cohort = cohortDefault) {
  var nps = document.getElementById('cumulative-nps');
  var promoters = document.getElementById('cumulative-promoters');
  var passive = document.getElementById('cumulative-passive');
  var detractors = document.getElementById('cumulative-detractors');

  var obj = netPrometerScore(data, campus, cohort);

  nps.textContent = obj.nps;
  promoters.textContent = obj.promotersPercent;
  passive.textContent = obj.passivePercent;
  detractors.textContent = obj.detractorsPercent;
}

showNetPrometerScore(data);
  