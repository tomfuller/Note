(function(exports) {
  var SingleNoteView = function(note){
    this.note = note
  };

SingleNoteView.prototype.returnHTML = function() {
  return `<div>${this.note.showNote()}</div>`
}

  exports.SingleNoteView = SingleNoteView;
})(this);
