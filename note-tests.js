
function noteExists() {
  var note = new Note();
  assert.isTrue(note);
};

function noteTakesAndStoresText() {
  var note = new Note("Chris can't do Javascript");
  assert.isTrue(note._text === "Chris can't do Javascript");
};

function noteReturnsText() {
  var note = new Note("Chris can't do Javascript");
  assert.isTrue(note.returnText() === "Chris can't do Javascript");
};

function noteListExists() {
  var noteList = new NoteList();
  assert.isTrue(noteList);
};

function noteListReturnsList() {
  var noteList = new NoteList();
  assert.isTrue(noteList.returnList() instanceof Array);
};

function noteListCreatesNote() {
  var noteList = new NoteList();
  noteList.createNote("Tom can do Javascript");
  assert.isTrue(noteList._list.length === 1);
};


noteExists();
noteTakesAndStoresText();
noteReturnsText();
noteListExists();
noteListReturnsList();
noteListCreatesNote();
