// const FileSystem = import("fs");



if (localStorage.getItem("opened") == null) {
    console.log("User has never opened before. Class list set to empty.")
    classes = [];
    localStorage.setItem("classes", classes);
} else {
    classes = localStorage.getItem("classes");
}
localStorage.setItem("opened", "bruh");

function Class(course, prereqs, genreqs) {
    this.course = course;
    this.prereqs = prereqs;
    this.genreqs = genreqs;
}

function addClass() {
    console.log("Added class");
    var courseNum = document.getElementById("course").value;
    var prereqslist = document.getElementById("prereqs").value;
    var req = document.getElementById("req").value;

    if (prereqslist != "") {
        var i = 0;
        var parsedPrereqs = [];
        while (prereqslist != "") {
            parsedPrereqs[i] = prereqslist.substring(0, 6);
            prereqslist = prereqslist.substring(7);
            i++;
        }
    }
    var cur = new Class(courseNum, parsedPrereqs, req);
    
    classes.push(cur);
    localStorage.setItem("classes", JSON.stringify(classes));
}
console.log("Loaded file");