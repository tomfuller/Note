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
      output +=  "<li><div>" + list[i].readNote() + "</div></li>"
    }
      output += "</ul>";
      if(output.length > 33) {
        output = output.substring(0,33);
        console.log(output.substring(0,33))
      };
      return output;
  };

  exports.NoteListView = NoteListView;

})(this);
