'use strict';

function testNewNoteCreated() {
  var note = new Note('hi!');
  console.log("TEST: testNewNoteCreated")
  assert.isTrue( note.readNote() === 'hi!')
};

testNewNoteCreated();
