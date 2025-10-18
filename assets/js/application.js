var courses = document.querySelectorAll('#coursesGrid .course-item .course-body .course-title');
var buttons = document.querySelectorAll('a.enroll-btn');

for(i = 0; i < buttons.length; i++) {
  var courseName = courses[i].textContent.trim();
  var message = encodeURIComponent("My name is {} and i want to register for " + courseName + " course on WYMNET.");
  buttons[i].setAttribute("href", "https://wa.me/14373441072?text=" + message);
  buttons[i].setAttribute("target", "_blank");
}

console.log(courses[0].innerHTML);
