// Q1
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
var objKeys = Object.keys(student);
console.log(objKeys.join(","));

//Q2
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(student);
delete student.rollno;
console.log(student);

//Q3
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
var objSize = Object.keys(student).length;
console.log("Size of the object is : " + objSize);

//Q4
var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

for (var i = 0; i < library.length; i++) {
  var book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
  if (library[i].readingStatus) {
    console.log("I read " + book);
  } else {
    console.log("I need to read " + book);
  }
}

//Q5
function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_height = cyl_height;
  this.cyl_diameter = cyl_diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
// Volume of the cylinder with four decimal places.
console.log("volume =", cyl.Volume().toFixed(4));

//Q6
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

function compare_to_sort(x, y) {
  if (x.title < y.title) return -1;
  if (x.title > y.title) return 1;
  return 0;
}

console.log(library.sort(compare_to_sort));
