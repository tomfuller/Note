'use strict';

function testNewNoteListViewCreated() {
  var listView = new NoteListView();
  console.log("TEST: testNewNoteListViewCreated")
  assert.isTrue(listView)
};

function testNoteListViewTakesNoteListModel() {
  var noteList = new NoteList();
  var listView = new NoteListView(noteList);
  console.log("TEST: testNoteListViewTakesNoteListModel")
  assert.isTrue(listView.getListOfNotes);
};

function testNoteListViewReturnsHTML() {
  var note = new Note("this is a string");
  var noteList = new NoteList();
  noteList.saveNote(note);
  var listView = new NoteListView();
  console.log("TEST:testNoteListViewReturnsHTML");
  assert.isTrue(listView.returnHTML() === "<p>this is a string</p>");
};

testNewNoteListViewCreated();
testNoteListViewTakesNoteListModel();
testNoteListViewReturnsHTML();