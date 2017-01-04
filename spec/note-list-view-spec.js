(function() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div></div></li></ul>')
})();

(function() {
  var noteList = new NoteList();
  noteList.addNote("a")
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div>a</div></li></ul>');
})();

(function() {
  var noteList = new NoteList();
  noteList.addNote("a");
  noteList.addNote("b");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div>a</div></li><li><div>b</div></li></ul>');
})();
