const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');

// CORS security
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Read body of request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// use file upload
app.use(fileUpload());

app.post('/', (req, res, next) => {
  if (req.body) {
    console.log(req.body);
  } else {
    console.log(`no body`);
    return req.send(`no body`)
  }

  if (req.files) {
    console.log(req.files);
    return res.send(req.files)
  } else {
    console.log(`no images`)
    res.send(`no image`)
  }
})

app.listen(6000, () => console.log(`connect to port 6000...`));