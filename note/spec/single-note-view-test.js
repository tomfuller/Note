'use strict';

function testDisplaySingleNote() {
  var singleNote = new SingleNoteView;
  singleNote.returnSingleNoteHTML();
  console.log("TEST: testDisplaySingleNote")
  assert.isTrue(singleNote.returnSingleNoteHTML() === "<div>View a single note</div>" )
};

testDisplaySingleNote();
