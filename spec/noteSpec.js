var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};

(function() {
  var note = new Note();
  assert.isTrue(note.text !== undefined)
})();
