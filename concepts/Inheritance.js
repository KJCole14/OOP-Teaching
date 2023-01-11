const Person = function (fName, birthYear) {
    this.name = fName;
    this.yearOfBirth = birthYear;

}

Person.prototype.calcAge = function () {
    console.log(2034 - this.yearOfBirth)
};

// Making a child class of "Person" same properties, plus a little extra
const Student = function (fName, birthYear, course) {
    this.name = fName;
    this.yearOfBirth = birthYear;
    this.course = course;
    this.scores = [];
}

const Kabah = new Student("Kabah", 1999, "Science")