### index.js
```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./routers/taskRouter');

const app = express();
const PORT = 8080;

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/taskdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    
    app.use('/', taskRouter);
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

module.exports = app;
```
