const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const Vans = require('./models/vans');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello!!');
});
app.get('/api/v1/vans', async (req, res) => {
  try {
    const allVans = await Vans.find({});
    res.status(200).json({ allVans });
    console.log('user has logged');
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/api/v1/vans/:id', async (req, res) => {
  try {
    const van = await Vans.findById(req.params.id);
    res.status(200).json({ van });
  } catch (error) {
    res.status(500).send(error);
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');
    app.listen(5000, () => {
      console.log('server is listening to port 5000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
