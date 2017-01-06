'use strict';

(function(exports) {

  function Note(text, id) {
    this._text = text;
    this.noteId = id;
  };

  Note.prototype.readNote = function() {
    return this._text;
  };

  exports.Note = Note;

})(this);
