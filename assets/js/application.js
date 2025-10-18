var courses = document.querySelectorAll('#coursesGrid .course-item .course-body .course-title');
var buttons = document.querySelectorAll('a.enroll-btn');

for(i = 0; i < buttons.length; i++) {
  var courseName = courses[i].textContent.trim();
  var message = encodeURIComponent("I want to register for " + courseName);
  buttons[i].setAttribute("href", "https://wa.me/14373441072?text=" + message);
  buttons[i].setAttribute("target", "_blank");
}

console.log(courses[0].innerHTML);
