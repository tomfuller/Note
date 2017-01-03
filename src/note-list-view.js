var NoteListView = function(noteList) {
  this.allNotes = noteList;
};

NoteListView.prototype.returnHTML = function() {
  return `<ul><li><div>${this.allNotes.join('</div></li><li><div>')}</div></li></ul>`;
}
