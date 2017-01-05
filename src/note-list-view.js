(function(exports) {
var NoteListView = function(noteList) {
  this.allNotes = noteList.showNotes();
};

NoteListView.prototype.returnHTML = function() {
  var noteText = [];
  for (i = 0; i < this.allNotes.length; i++) {
    noteText.push(`<li><div><a href='#${this.allNotes[i].id}'>${this.allNotes[i].text.substring(0,20)}</a></div></li>`)
  }
  return "<ul>"  + noteText.join("") + "</ul>";
}
exports.NoteListView = NoteListView;
})(this);
