var NoteListView = function(noteList) {
  this.allNotes = noteList.showNotes();
};

NoteListView.prototype.returnHTML = function() {
    var messages = [];
    for (i = 0; i < this.allNotes.length; i++) {
  	messages.push(this.allNotes[i].text)
    }
    console.log(messages);
  return `<ul><li><div>${messages.join('</div></li><li><div>')}</div></li></ul>`;
}
