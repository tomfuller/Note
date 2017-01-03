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
