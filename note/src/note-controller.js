'use strict';

(function(exports) {

  function NoteController() {
    this.list = new NoteList();
    this.list.addNote("favorite drink: seltzer");
    this.noteListView = new NoteListView(this.list);
  };

  NoteController.prototype.getHTML = function() {
   var app = document.getElementById("app");
   console.log(app);
   console.log(this.noteListView.returnHTML());
   app.innerHTML = this.noteListView.returnHTML();
 };

  exports.NoteController = NoteController;

})(this);
