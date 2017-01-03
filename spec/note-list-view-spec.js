(function() {
  var noteList = [];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div></div></li></ul>')
})();

(function() {
  var noteList = ['a'];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div>a</div></li></ul>');
})();

(function() {
  var noteList = ['a','b'];
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnHTML() === '<ul><li><div>a</div></li><li><div>b</div></li></ul>');
})();
