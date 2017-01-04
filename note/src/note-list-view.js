'use strict';

(function(exports) {

  function NoteListView(noteList) {
    this._noteList = noteList;
  };

  NoteListView.prototype.getListOfNotes = function() {
    return this._noteList;
  };

  NoteListView.prototype.returnHTML = function() {
    var list = this._noteList._list;
    var output = "<p>";
    for (var i = 0; i < list.length; i++) {
      output += list[i].readNote();
    }
    return output + "</p>";
  };


  exports.NoteListView = NoteListView;

})(this);
