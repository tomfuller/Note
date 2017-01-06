'use strict';

(function(exports) {

  function NoteController() {
    this.list = new NoteList();
    this.list.addNote("favorite drink: seltzer");
    this.noteListView = new NoteListView(this.list);
  };

  NoteController.prototype.getNoteListHTML = function() {
   var app = document.getElementById("app");
   app.innerHTML = this.noteListView.returnNoteListHTML();
 };

  exports.NoteController = NoteController;

})(this);
