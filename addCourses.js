// const FileSystem = import("fs");



if (localStorage.getItem("opened") == null) {
    console.log("User has never opened before. Class list set to empty.")
    classes = [];
    localStorage.setItem("classes", classes);
} else {
    classes = localStorage.getItem("classes");
}
localStorage.setItem("opened", "YIPPEE");

function Class(course, prereqs, days, start, end) {
    this.course = course;
    this.prereqs = prereqs;
    this.days = days;
    this.start = start;
    this.end = end;
}

function addClass() {
    console.log("Added class");
    var courseNum = document.getElementById("course").value;
    var prereqslist = document.getElementById("prereqs").value;
    var dayslist = document.getElementById("days").value;
    var start = document.getElementById("start").value - 8;
    var end = document.getElementById("end").value - 8;

    if (prereqslist != "") {
        var i = 0;
        var parsedPrereqs = [];
        while (prereqslist != "") {
            parsedPrereqs[i] = prereqslist.substring(0, 6);
            prereqslist = prereqslist.substring(7);
            i++;
        }
    }
    if (dayslist != "") {
        var i = 0;
        var parsedDays = [];
        while (dayslist != "") {
            var temp = dayslist.substring(0, 2);
            if (temp == "Mo") parsedDays[i] = 0;
            else if (temp == "Tu") parsedDays[i] = 1;
            else if (temp == "We") parsedDays[i] = 2;
            else if (temp == "Th") parsedDays[i] = 3;
            else parsedDays[i] = 4;
            dayslist = dayslist.substring(2);
            i++;
        }
    }
    var cur = new Class(courseNum, parsedPrereqs, parsedDays, start, end);
    
    classes.push(cur);
    localStorage.setItem("classes", JSON.stringify(classes));
}
console.log("Loaded file");