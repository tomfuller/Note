function NoteList() {
  this._list = [];
};

NoteList.prototype.returnList = function() {
  return this._list;
};

NoteList.prototype.createNote = function(text) {
  note = new Note(text)
  this._list.push(note)
};
