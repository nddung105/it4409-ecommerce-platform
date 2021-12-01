require('dotenv').config();
const express = require("express");
const cors = require("cors");

const {PORT} = require("./src/constants/constants")


const app = express();
// use middleware to parse body req to json
app.use(express.json());

// use middleware to enable cors
app.use(cors());

// route middleware
app.use("/",function (req, res) {
    res.send('Page');
});

app.listen(PORT, () => {
    console.log("server start - " + PORT);
})
