'use strict';

(function(exports) {

  function SingleNoteView(){
      this.note = new Note("View a single note")
  };

  SingleNoteView.prototype.returnSingleNoteHTML = function() {
      var output = "<div>" + this.note.readNote() + "</div>"
      return output;
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
