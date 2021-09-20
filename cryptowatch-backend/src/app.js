const express = require("express");
const app = express();
const cors = require("cors");
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const rankingsRouter = require("./rankings/rankings.router");
const morgan = require("morgan");

app.use(morgan("tiny"));

app.use(cors());
app.use(express.json());

app.use("/rankings", rankingsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
