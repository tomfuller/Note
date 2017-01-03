'use strict';

function testNewListCreated() {
  var list = new NoteList();
  assert.isTrue( list.seeList() instanceof Array )
  console.log("This returned: " + list.seeList())
};

testNewListCreated();
