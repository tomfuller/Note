(function(exports) {

  function NoteListView(newlist) {
    this.noteList = newlist;
  };

  NoteListView.prototype.htmlString = function() {
    var htmlString = "<ul>"
    var length = this.noteList._list.length;
    for (var index = 0; index < length; index++) {
    htmlString += "<li><div>" + this.noteList._list[index]._text + "</div></li>"
    }
    htmlString += "</ul>"
    return htmlString
  };

  exports.NoteListView = NoteListView;

})(this);
