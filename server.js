const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.get("/photo1", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./1.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo2", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./2.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo3", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./3.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo4", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./4.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo5", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./5.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo6", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./6.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo7", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./7.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo8", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./8.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo9", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./9.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo10", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./10.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo11", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./11.png"), (err) => {
    if (err) console.log(err);
  });
});
app.get("/photo12", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "./12.png"), (err) => {
    if (err) console.log(err);
  });
});

app.listen(port, () => {
  console.log("ready");
});
