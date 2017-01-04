(function(exports) {
var NoteList = function() {
  this.notes = [];
};

NoteList.prototype.showNotes = function() {
  return this.notes;
};

NoteList.prototype.addNote = function(message) {
  var idNumber = this.notes.length;
  this.notes.push(new Note(message, idNumber));
};

exports.NoteList = NoteList;
})(this);
