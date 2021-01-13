import express from 'express';
import mongoose from 'mongoose';
const connection_url = `mongodb+srv://admin:zPI6hg86dcn1wxXR@cluster0.f6rno.mongodb.net/tinderdb?retryWrites=true&w=majority`

//usually const express = require('express')
// but setting in "type": "module" in package.json

// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});


// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello server!'))

// Listener - Terminal
app.listen(port, () => console.log(`listen on localhost: ${port}`));