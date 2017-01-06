'use strict';

function testNewListCreated() {
  var list = new NoteList();
  console.log("TEST: testNewListCreated")
  assert.isTrue( list.seeList() instanceof Array )
};

function testNoteIsInList() {
  var list = new NoteList();
  var note = new Note('yo');
  list.addNote(note);
  console.log("TEST: testNoteListIsInList")
  assert.isTrue(list.seeList().length === 1)
};

function testNewNoteHasId() {
  var noteList = new NoteList();
  noteList.addNote("Note with an id")
  console.log("TEST: testNewNoteHasId")
  assert.isTrue ( noteList._list[0].noteId === 0 );
};

testNewListCreated();
testNoteIsInList();
testNewNoteHasId();
