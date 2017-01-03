function controllerExists() {
  var noteController = new NoteController()
  assert.isTrue(noteController);
};

function controllerInitializeNote() {
  var noteController = new NoteController()
  noteController.Seltzernote()
  assert.isTrue(noteController.Seltzernote() );
};

controllerExists();
