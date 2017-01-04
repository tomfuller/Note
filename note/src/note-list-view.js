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
    for (i = 0; i < list.length; i++) {
      this._noteList[i].text;
      }
    return `<p>${this._noteList.join()}</p>`
  };

  exports.NoteListView = NoteListView;

})(this);
