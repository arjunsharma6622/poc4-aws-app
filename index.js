const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello from POC4 Server, updated code to test the CI/CD works");
})

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log(`POC4 Server Running on PORT ${PORT}`);
})