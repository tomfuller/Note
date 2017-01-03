var noteList;
var noteListView;

(function() {
  noteList = new NoteList();
  noteList.addNote("This is a note.");
  noteListView = new NoteListView(noteList);
  var app = document.getElementById("app");
  app.innerHTML = noteListView.returnHTML();
})();
