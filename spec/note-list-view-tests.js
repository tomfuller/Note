function noteListViewExists() {
  var noteListView = new NoteListView();
  assert.isTrue(noteListView);
};

function noteListExistsInView() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.noteList);
};

function htmlStringOneNote() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList);
  noteListView.noteList.createNote('Chris is slightly better at Javascript');
  assert.isTrue(noteListView.htmlString() === "<ul><li><div>Chris is slightly better at Javascript</div></li></ul>");
};

function htmlStringMultipleNotes() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList);
  noteListView.noteList.createNote('Chris is slightly better at Javascript');
  noteListView.noteList.createNote('Tom is also slightly better at Javascript');
  noteListView.noteList.createNote('Chris spotted the text');
  assert.isTrue(noteListView.htmlString() === "<ul><li><div>Chris is slightly better at Javascript</div></li><li><div>Tom is also slightly better at Javascript</div></li><li><div>Chris spotted the text</div></li></ul>");
};

function htmlStringZeroNotes() {
  var noteList = new NoteList()
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.htmlString() === "<ul></ul>");
};

noteListViewExists();
noteListExistsInView();
htmlStringOneNote();
htmlStringMultipleNotes();
htmlStringZeroNotes();
