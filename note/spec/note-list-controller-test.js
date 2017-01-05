'use strict';

function showsNoteOnWebPageTest() {
  var controller = new NoteController;
  controller.getHTML();
  console.log("TEST: showsNoteOnWebPageTest")
  assert.isTrue(controller.getHTML() === "<ul><li><div>favorite drink: seltzer</div></li></ul>");
};
