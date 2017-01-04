var noteList = new NoteList();
var noteListView;

(function() {

  var NoteController = function(noteList) {
  this.noteList = noteList
};

  this.noteList.addNote("Note 1.");
  noteListView = new NoteListView(this.noteList);

  var app = document.getElementById("app");
  app.innerHTML = noteListView.returnHTML();
})();
