
/* `subject` is an array of strings */

class TutorRow {
    constructor(subject, tutor, availability) {
        this.subject = subject;
        this.tutor = tutor;
        this.availability = availability;
    }
}

var tutorRows = [
    new TutorRow("Math - Algebra, Calculus, Precalculus", "Cheney Ni", "1st, 2nd (Mon, Wed, Fri), 3rd (every day)"),
    new TutorRow("SAT and ACT Prep", "Marshall Lentz", "1st, 2nd (Mon, Wed, Fri), 3rd (every day)"),
    new TutorRow("Literature - American, World", "Austin James", "3rd (every day), 5th (odd days)"),
    new TutorRow("Math - Algebra, Precalculus", "Austin James", "3rd (every day), 5th (odd days)")
];

tutorRows.sort(function(a, b){
    var keyA = a.subject;
    var keyB = b.subject;
    if (keyA < keyB) return -1;
    if (keyB < keyA) return 1;
    return 0;
});

$(document).ready(function(){
    var tableBody = document.getElementById("tutoring-table").children[2];
    for (var i = 0; i < tutorRows.length; i++) {
        var row = document.createElement("tr");
        var subjectName = document.createElement("td");
        var tutorName = document.createElement("td");
        var availableTimes = document.createElement("td");
        var emailLink = document.createElement("a");

        var curTutorRow = tutorRows[i];

        row.appendChild(subjectName);
        row.appendChild(tutorName);
        row.appendChild(availableTimes);

        subjectName.appendChild(document.createTextNode(curTutorRow.subject));
        tutorName.appendChild(emailLink);
        emailLink.appendChild(document.createTextNode(curTutorRow.tutor));

        emailAddress = curTutorRow.tutor.split(" ")[0] + "." + curTutorRow.tutor.split(" ")[1] + "@ccs.us";
        emailLink.href = "mailto:" + emailAddress.toLowerCase();
        emailLink.target = "_blank";

        availableTimes.appendChild(document.createTextNode(curTutorRow.availability));

        subjectName.classList.add("keyrow");  // Not supported by IE9
        tutorName.classList.add("keyrow");  // Not supported by IE9
        availableTimes.classList.add("keyrow");  // Not supported by IE9
        tableBody.appendChild(row);
    }
});
