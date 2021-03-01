const express = require('express');
const userRoutes = require('./routes/users');
const mongoose = require('mongoose');

const app = express();

// connect to MongoDB
const mongoDB = 'mongodb+srv://admin0:HDeq53775@cluster0.wilhr.mongodb.net/rest_project_data?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true} );
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to mongoDB database: rest_project_data'));

// middleware to allow json
app.use(express.json());

// routing middleware
app.use('/users', userRoutes);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(422).send(`${err.name}: ${err.message}`);
});

const PORT = process.env.PORT || 7000;
 /*
app.get('/', (req, res) => {
  console.log(`HTTP Method: ${req.method}`);
  res.end();
});
*/

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));