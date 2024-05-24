const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const routes = require("./view/Route");
const cors = require("cors");
const bodyParser = require("body-parser");

// Connection establishment
mongoose.connect(process.env.DB_connect, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log("Error connecting to database: " + err.message);
});

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);

// Porting
const PORT = process.env.PORT || 1001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
