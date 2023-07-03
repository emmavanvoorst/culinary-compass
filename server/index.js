"use strict";

const express = require("express");
const morgan = require("morgan");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))


  //endpoints
 .get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  })
  
  .get('/wXEEdKXqn6xFssLJXvD3YTWOT3DnNPmV')


.listen(PORT, () => console.info(`Listening on port ${PORT}`));