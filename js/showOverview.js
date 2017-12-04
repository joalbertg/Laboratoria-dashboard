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

function showTechSkills(data, campus = campusDefault, cohort = cohortDefault) {
  var techTargeted = document.getElementById('tech-targeted-students');
  var techTargetedPercent = document.getElementById('tech-targeted-percent');
  var totalActiveStudents = document.getElementById('total-students');

  var obj = techSkills(data, campus, cohort);

  techTargeted.textContent = obj.targetedStudents;
  techTargetedPercent.textContent = obj.targetedStudentsPercent;
  totalActiveStudents.textContent = obj.totalStudents;
}

showTechSkills(data);

function showLifeSkills(data, campus = campusDefault, cohort = cohortDefault) {
  var avgHseStudents = document.getElementById('avg-hse-students');
  var hseTargetedStudents = document.getElementById('hse-targeted-students');

  var obj = lifeSkills(data, campus, cohort);

  avgHseStudents.textContent = obj.avgHse;
  hseTargetedStudents.textContent = obj.targetedStudents;
}

showLifeSkills(data);

function showStudentSatisfaction(data, campus = campusDefault, cohort = cohortDefault) {
  var satisfactionPercent = document.getElementById('satisfaction-percent');

  satisfactionPercent.textContent = lastStudentSatisfaction(data, campus, cohort);
}

showStudentSatisfaction(data);

function showTeacherRating(data, campus = campusDefault, cohort = cohortDefault) {
  var teacherRating = document.getElementById('teacher-rating');

  teacherRating.textContent = lastTeacherRating(data, campus, cohort);
}

showTeacherRating(data);

function showLastJediMasterRating(data, campus = campusDefault, cohort = cohortDefault) {
  var jediMasterRating = document.getElementById('jedi-rating');
  
  jediMasterRating.textContent = lastJediMasterRating(data, campus, cohort);  
}  

showLastJediMasterRating(data);
