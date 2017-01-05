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
  var noteList = new NoteList();
  noteList.addNote("this is a long long long long string");
  var listView = new NoteListView(noteList);
  console.log("TEST:testNoteListViewReturnsHTML");
  assert.isTrue(listView.returnNoteListHTML() === "<ul><li><div>this is a long long ");
};

testNewNoteListViewCreated();
testNoteListViewTakesNoteListModel();
testNoteListViewReturnsHTML();
