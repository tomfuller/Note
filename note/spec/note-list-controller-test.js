'use strict';

function testNoteOnWebPage() {
  var controller = new NoteController;
  controller.getNoteListHTML();
  var app = document.getElementById("app");
  console.log("TEST: showsNoteOnWebPageTest")
  assert.isTrue(app.innerHTML === "<ul><li><div>favorite drink: seltzer</div></li></ul>");
};

testNoteOnWebPage();
