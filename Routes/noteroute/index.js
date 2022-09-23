const app = require('express').Router();
const path = require("path");
// const app = express().Router();
const fs = require('fs');
const getDB = require('../../Develop/db/db.json');

function listTheNotes( allTHENotes){

}

function saveNewNote(body, listNotes) {
  const newNote = body;





  listNotes.push(newNote);
  fs.writeFileSync(
      path.join(__dirname, '../../Develop/db/db.json'),
      JSON.stringify(listNotes, null, 2)
  );
      listTheNotes();
      return newNote;
}


app.post('/notes', (req, res) => {
  const newNote = saveNewNote(req.body, getDB);
  res.json(newNote);
});


function deleteNote(id, listNotes) {
  for (let i = 0; i < listNotes.length; i++) {
      let note = listNotes[i];

      if (note.id == id) {
          listNotes.splice(i, 1);
          fs.writeFileSync(
              path.join(__dirname, '../../Develop/db/db.json'),
              JSON.stringify(listNotes, null, 2)
          );

          break;
      }
  }
}

app.delete('/notes/:id', (req, res) => {
  deleteNote(req.params.id, getDB);
  res.json(true);
});

module.exports = app;