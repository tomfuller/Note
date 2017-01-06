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

 NoteController.prototype.showNoteForCurrentPage = function() {
   this.showNote(this.showNoteFromURL(window.location))
 };

 NoteController.prototype.showNoteFromURL = function(location) {
    var id = location.hash.split("#")[1];
    var note = this.list._list.find(function(note){return note.noteId.toString() === id})
    return note
 };

 NoteController.prototype.showNote = function(note) {
   document.getElementById("app").innerHTML = note._text;
 };

 NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
   window.addEventListener("hashchange", this.showNoteForCurrentPage.bind(this));
};



  exports.NoteController = NoteController;

})(this);
