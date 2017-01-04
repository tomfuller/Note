var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

(function() {
  var note = new Note(" ", 0);
  assert.isTrue(note.text !== undefined)
})();

(function() {
  var note = new Note("My favourite language is JavaScript.", 0);
  assert.isTrue(note.text === "My favourite language is JavaScript.")
})();

(function() {
  var note = new Note("My favourite language is JavaScript.", 0);
  assert.isTrue(note.showNote() === "My favourite language is JavaScript.")
})();

(function createIDProperty() {
  var note = new Note("test", 0);
  assert.isTrue(note.id !== undefined)
})();
