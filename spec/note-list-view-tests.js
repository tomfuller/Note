function noteListViewExists() {
  var noteListView = new NoteListView(NoteList());
  assert.isTrue(noteListView);
};

function noteListExistsInView() {
  var noteListView = new NoteListView(NoteList());
  assert.isTrue(noteListView.noteList);
};

function htmlStringOneNote() {
  var noteListView = new NoteListView(NoteList());
  noteListView.noteList.createNote('Chris is slightly better at Javascript');
  assert.isTrue(noteListView.htmlString() === "<ul><li><div>Chris is slightly better at Javascript</div></li></ul>");
};

function htmlStringMultipleNotes() {
  var noteListView = new NoteListView(NoteList());
  noteListView.noteList.createNote('Chris is slightly better at Javascript');
  noteListView.noteList.createNote('Tom is also slightly better at Javascript');
  noteListView.noteList.createNote('Chris spotted the text');
  assert.isTrue(noteListView.htmlString() === "<ul><li><div>Chris is slightly better at Javascript</div></li><li><div>Tom is also slightly better at Javascript</div></li><li><div>Chris spotted the text</div></li></ul>");
};

function htmlStringZeroNotes() {
  var noteListView = new NoteListView(NoteList());
  assert.isTrue(noteListView.htmlString() === "<ul></ul>");
};

noteListViewExists();
noteListExistsInView();
htmlStringOneNote();
htmlStringMultipleNotes();
htmlStringZeroNotes();
