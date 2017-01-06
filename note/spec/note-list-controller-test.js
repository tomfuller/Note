'use strict';

function testNoteOnWebPage() {
  var controller = new NoteController;
  controller.getNoteListHTML();
  var app = document.getElementById("app");
  console.log("TEST: showsNoteOnWebPageTest")
  console.log(app.innerHTML);
  assert.isTrue(app.innerHTML === '<ul><li><div><a href="#0">favorite drink: selt</a></div></li></ul>');
};

function testShowNoteForCurrentPage(){
  console.log("TEST: testUrlChangeShowNoteForCurrentPage")
  var controller = new NoteController;
  window.location.hash = "#0"
  controller.showNoteForCurrentPage();
  console.log(app.innerHTML)
  assert.isTrue(app.innerHTML === "favorite drink: seltzer")
};

testNoteOnWebPage();
testShowNoteForCurrentPage();
