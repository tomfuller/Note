'use strict';

(function(exports) {

  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.getListOfNotes = function() {
    return this._noteList;
  };

  NoteListView.prototype.returnNoteListHTML = function() {
    var list = this._noteList._list;
    var output = "<ul>";
    for (var i = 0; i < list.length; i++) {
      var shortString = list[i].readNote().substring(0, 20);
      var showIdHTML = list[i].noteId;
      output +=  "<li><div><a href=#" + showIdHTML + ">" + shortString + "</a></div></li>"
    }
      output += "</ul>";
      return output;
  };

  exports.NoteListView = NoteListView;

})(this);
