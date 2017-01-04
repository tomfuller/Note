(function(exports) {

  function NoteController() {
    this.noteList = new NoteList();
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.createNote = function(text) {
    this.noteList.createNote(text)
  };

  NoteController.prototype.HTMLconvert = function() {
    return this.noteListView.htmlString();
  };

  NoteController.prototype.insertHTML = function() {
    document.getElementById("app").innerHTML = this.HTMLconvert();
  };

  exports.NoteController = NoteController ;
})(this);
