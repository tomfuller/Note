(function aNewControllerIsInstantiated() {
  var noteController = new NoteController()
assert.isTrue(noteController instanceof NoteController)
})();

(function checkingInnerHTMLProperty() {

  function NoteListViewDouble() {};

  NoteListViewDouble.prototype = {
    returnHTML: function() { return "<ul><li><div id=\"app\">Mock Text</div></li></ul>"}
  };


  var noteListViewDouble = new NoteListViewDouble()
  var noteController = new NoteController()
  noteController.noteListView = noteListViewDouble;
  noteController.updateHTML()

  element = document.getElementById("app")
  assert.isTrue(element.innerHTML === noteListViewDouble.returnHTML())

})();
