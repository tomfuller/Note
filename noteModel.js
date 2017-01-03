function Note(text) {
  this._text = text
};

Note.prototype.returnText = function() {
  return this._text
};
