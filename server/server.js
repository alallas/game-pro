const express = require("express");

const app = express();

const PORT = 8000;
const startDemand = () => {console.log("server running hhhh")};

app.listen(PORT, startDemand);