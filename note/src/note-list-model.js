'use strict';

(function(exports) {
  function NoteList() {
    this._list = [];
  };

  NoteList.prototype.seeList = function() {
    return this._list;
  };

  exports.NoteList = NoteList;

})(this);
