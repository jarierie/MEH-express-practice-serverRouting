const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => res.send("Homepage"));

app.get("/charts", (req, res) => res.send("this is the charts page"));

app.get("/about", (req, res) => res.send("this is the about page"));

app.get("/items", (req, res) => res.send("this is the Item Page"));

app.listen(port, () => console.log("Server started"));
