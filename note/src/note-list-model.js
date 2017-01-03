'use strict';

(function(exports) {
  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.seeList = function() {
    return this._list;
  };

  NoteList.prototype.saveNote = function(note) {
    this._list.push(note)
  };

  exports.NoteList = NoteList;

})(this);
