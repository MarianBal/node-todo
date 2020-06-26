const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('assets'));

const port = 4000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Im connected');
});

const notesSchema = new mongoose.Schema({
  data: {
    type: String,
    unique: [true, 'Nota repetida']
  }
});

notesSchema.methods.remember = function () {
  const remember = 'Dont forget to ' + this.data;
  console.log(remember);
};

const Notes = mongoose.model('Notes', notesSchema);

app.all('/', (req, res, next) => {
  console.log('¡Hello World!');
  next();
});

app.get('/', (req, res) => {
  Notes.find(function (err, notes) {
    if (err) return console.error(err);
    return res.json(notes);
  });
});

app.post('/', (req, res) => {
  const newNotes = new Notes({ data: req.body.data });

  newNotes.save(function (err, notes) {
    if (err) {
      res.status(400).json(err);
      return;
    } else {
      Notes.find(function (err, notes) {
        if (err) {
          res.status(400);
        }
        res.status(200);
        return res.json(notes);
      });
    }
  });
});

app.delete('/:noteId', (req, res) => {
  Notes.findOneAndRemove(
    { _id: req.params.noteId },
    { new: true },
    (err, note) => {
      if (err) return console.error(err);
      res.status(200);

      Notes.find((err, notes) => {
        if (err) return console.error(err);
        return res.json(notes);
      });
    }
  );
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
