(function(exports) {
  var Note = function(userNote, id) {
  this.text = userNote;
  this.id = id;
};

Note.prototype.showNote = function() {
return this.text;
}
exports.Note = Note;
})(this);
