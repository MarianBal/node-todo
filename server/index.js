const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('assets'));

const port = 4000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Im connected');
});

const notesSchema = new mongoose.Schema({ data: String });

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
      console.error(err);
      for (let key in err.errors) {
        let error = err.errors[key];
        console.log(error);
      }
      res.status(400).json(err);
      return;
    } else {
      Notes.find(function (err, notes) {
        if (err) {
          res.status(400);
        }
        res.status(200);
        res.json(notes);
        return;
      });
    }
  });
});

// app.delete('/:userId', (req, res) => {
//   const id = req.params.userId;

//   const removeUser = async () => {
//     const response = await User.remove({ _id: id });
//     return response.deletedCount;
//   };

//   removeUser();

//   User.find(function (err, users) {
//     if (err) return console.error(err);
//     return res.json(users);
//   });
// });

// app.put('/:userId/edit', (req, res) => {
//   const id = req.params.userId;
//   console.log(req.body);

//   const editUser = async () => {
//     let response = await User.findOneAndUpdate({ _id: id }, req.body, {
//       new: true
//     });
//     await response.save();
//     return response;
//   };
//   editUser();

//   User.find(function (err, users) {
//     if (err) return console.error(err);
//     console.log(users);
//     return res.json(users);
//   });
// });

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
