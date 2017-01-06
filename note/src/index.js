var controller = new NoteController();

(function makeUrlChangeShowNoteForCurrentPage() {
        window.addEventListener("hashchange", controller.showNoteForCurrentPage);
      })();

controller.getNoteListHTML();
