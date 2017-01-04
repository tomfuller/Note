
(function(exports) {

  var NoteController = function() {
  this.noteList = new NoteList()
  this.noteListView = new NoteListView(this.noteList)
};


  NoteController.prototype.createNote = function(note) {
    return this.noteList.addNote(note);
  }

  NoteController.prototype.updateHTML = function() {
    var app = document.getElementById("app");
    app.innerHTML = this.noteListView.returnHTML();
  }

  exports.NoteController = NoteController;

})(this);

var notecontroller = new NoteController()
notecontroller.createNote("Second Note")
notecontroller.updateHTML()
