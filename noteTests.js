
function noteExists() {
  var note = new Note();
  assert.isTrue(note);
};

function noteTakesAndStoresText() {
  var note = new Note("Chris can't do Javascript");
  assert.isTrue(note._text === "Chris can't do Javascript");
};

function noteTakesAndStoresText() {
  var note = new Note("Chris can't do Javascript");
  assert.isTrue(note.returnText() === "Chris can't do Javascript");
};

noteExists();
noteTakesAndStoresText();
noteTakesAndStoresText();
