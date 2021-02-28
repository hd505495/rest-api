const express = require('express');
const userRoutes = require('./routes/users');

const app = express();

app.use('/users', userRoutes);

const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
  console.log(`HTTP Method: ${req.method}`);
  res.end();
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));