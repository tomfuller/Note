var NoteList = function() {
  this.notes = [];
};

NoteList.prototype.showNotes = function() {
  return this.notes;
};

NoteList.prototype.addNote = function(message) {
  this.notes.push(new Note(message));
}
