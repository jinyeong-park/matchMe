import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import db_Cards from './cardsSchema.js'
const connection_url = `mongodb+srv://admin:zPI6hg86dcn1wxXR@cluster0.f6rno.mongodb.net/tinderdb?retryWrites=true&w=majority`

//usually const express = require('express')
// but setting in "type": "module" in package.json

// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares
app.use(express.json())  // or app.use(bodyParser.json())
app.use(cors())

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello server!'))

// POST : post data into db
app.post('/tinder/cards', (req, res) => {
  const dbCard = req.body;

  // create new document
  db_Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
});

app.get('tinder/cards', (req, res) => {
  db_Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else  {
      res.status(200).send(data);
    }
  })
})

// Listener - Terminal
app.listen(port, () => console.log(`listen on localhost: ${port}`));