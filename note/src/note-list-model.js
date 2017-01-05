'use strict';

(function(exports) {

  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.seeList = function() {
    return this._list;
  };

  NoteList.prototype.addNote = function(text) {
    var note = new Note(text);
    this._list.push(note)
  };

  exports.NoteList = NoteList;

})(this);
