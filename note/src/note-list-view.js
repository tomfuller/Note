'use strict';

(function(exports) {

  function NoteListView() {
    this._noteList = new NoteList();
  };

  NoteListView.prototype.getListOfNotes = function() {
    return this._noteList
  };

  NoteListView.prototype.returnHTML = function() {
    var list = this._noteList;
    var html = "<p>";
    var i;
    for (i = 0; i < list.length; i++) {
      html + list[i] + "</p>";
      }
  };

  exports.NoteListView = NoteListView;

})(this);
