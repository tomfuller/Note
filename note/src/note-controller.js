'use strict';

(function(exports) {

  function NoteController() {
    this.list = new NoteList();
    this.list.addNote("favorite drink: seltzer");
    this.noteListView = new NoteListView(this.list);
  };

  NoteController.prototype.getNoteListHTML = function() {
   var app = document.getElementById("app");
   console.log(this.noteListView.returnNoteListHTML());
   app.innerHTML = this.noteListView.returnNoteListHTML();
 };

  exports.NoteController = NoteController;

})(this);
