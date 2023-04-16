
// Student object
// Stores identification info, current major, and an array of all taken classes
function Student(email, password, name, major, taken) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.major = major;
    this.taken = taken;
}

// Individual course object
// Stores course, an array of all prereq classes, and any major requirement they satisfy (ex: humanity or science)
function Class(course, prereqs, genreqs) {
    this.course = course;
    this.prereqs = prereqs;
    this.genreqs = genreqs;
}

// Program of study object
// Stores major name along with a 2D array for each semester of suggested courses
function Major(major, track) {
    this.major = major;
    this.track = track;
}