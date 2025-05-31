// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/movie-booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).send({ message: 'User created' });
  } catch (err) {
    res.status(400).send({ error: 'Error creating user' });
  }
});

app.post('/api/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, 'secret_key');
    res.send({ token });
  } catch (err) {
    res.status(400).send({ error: 'Error signing in' });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
