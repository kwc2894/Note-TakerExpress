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



module.exports = app;