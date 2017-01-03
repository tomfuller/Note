'use strict';

(function(exports) {

  function Note(text) {
    this._text = text;
  };

  Note.prototype.readNote = function() {
    return this._text;
  };

  exports.Note = Note;

})(this);
