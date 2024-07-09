const express = require('express');
const loggingMiddleware = require('./logMiddleware');

const app = express();


app.use(loggingMiddleware);


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
