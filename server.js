const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
