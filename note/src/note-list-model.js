'use strict';

(function(exports) {

  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.seeList = function() {
    return this._list;
  };

  NoteList.prototype.addNote = function(text) {
    var id = this._list.length;
    var note = new Note(text, id);
    this._list.push(note)
  };


  exports.NoteList = NoteList;

})(this);
