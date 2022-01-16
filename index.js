require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");


const {PORT} = require("./src/constants/constants")
const apiRouter = require('./src/routes/index')

const app = express();

// use middleware to parse body req to json
app.use(express.json());

// use middleware to enable cors
app.use(cors());

//route init
app.use('/', apiRouter)

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/views/index.html');
  });

app.get('/products/:id', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/product-detail.html');
});
app.get('/comment/:id', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/reviewing.html');
}); 
app.use(express.static(path.join(__dirname, '/src/public')));

app.listen(PORT, () => {
    console.log("server start - " + PORT);
})
