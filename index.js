const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const multer = require('multer');
const upload = multer({
  dest: './static/upload',
});
app.use(express.static('static'));
app.use(upload.any());

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});

server.post('/upload', (req, res, next) => {
  console.log(req.files);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
