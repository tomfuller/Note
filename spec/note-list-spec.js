(function() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList.notes) === true);
})();

(function() {
  var noteList = new NoteList();
  assert.isTrue(noteList.showNotes() === noteList.notes);
})();

(function() {
  var noteList = new NoteList();
  noteList.addNote("My message.");
  assert.isTrue(noteList.showNotes()[0].showNote() === "My message.");
})();

(function assignIDtoNewNote (){
  var noteList = new NoteList();
  noteList.addNote("test");
  assert.isTrue(noteList.notes[0].id === 0);
})();

(function assignIDtoNewNote (){
  var noteList = new NoteList();
  noteList.addNote("Note 0");
  noteList.addNote("Note 1");
  assert.isTrue(noteList.notes[1].id === 1);
})();
