(function() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div></div></li></ul>')
})();

(function() {
  var noteList = new NoteList();
  noteList.addNote("a")
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div><a href=\'#0\'>a</a></div></li></ul>');
})();

(function() {
  var noteList = new NoteList();
  noteList.addNote("a");
  noteList.addNote("b");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div><a href=\'#0\'>a</a></div></li><li><div><a href=\'#1\'>b</a></div></li></ul>');
})();

(function showOnlyFirstTwentyCharacters() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.addNote("This note is longer than twenty characters")
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div><a href=\'#0\'>This note is longer </a></div></li></ul>')
})();

(function createLinkForNote() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  noteList.addNote("Hopefully this will have a link")
  assert.isTrue(noteListView.returnHTML() === "<ul><li><div><a href='#0'>Hopefully this will </a></div></li></ul>")
})();
