'use strict';

function testNoteOnWebPage() {
  var controller = new NoteController;
  controller.getHTML();
  console.log(controller.getHTML());
  var app = document.getElementById("app");
  console.log("TEST: showsNoteOnWebPageTest")
  assert.isTrue(app.innerHTML === "<ul><li><div>favorite drink: seltzer</div></li></ul>");
};

testNoteOnWebPage();
