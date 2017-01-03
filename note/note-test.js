'use strict';

var Note = require("./note-model").Note;

Note("yo teaka");

if (Note.readNote() != "yo teaka") {
  throw new Error("Note hasn't been taken")
} else {
  console.log("Yo teaka has been successfully saved as a note");
};



//
// var exclaim = require("./exclaim").exclaim;
//
// if (exclaim("hi") !== "hi!!!!!") {
//   throw new Error("Exclaiming hi should equal hi!!!!!");
// } else {
//   console.log(".");
// }
