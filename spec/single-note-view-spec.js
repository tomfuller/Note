(function aSingleNoteIsDisplayed(){
    var note = new Note();
    var singleNoteView = new SingleNoteView(note);
    assert.isTrue(singleNoteView instanceof SingleNoteView)
})();

(function aSingleNoteReturnsSingleNoteView(){
  var note = new Note("hello");
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.returnHTML() === '<div>hello</div>')
})();
