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

//customer router
//index
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/index.html');
});
app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/login.html');
});
app.get('/sign-up', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/sign-up.html');
});
//products
app.get('/products', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/product.html');
});
app.get('/products/:id', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/product-detail.html');
});
app.get('/comment/:id', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/reviewing.html');
}); 
app.get('/cart', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/cart.html');
});
//user
app.get('/user_info', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/user_info.html');
});
app.get('/history_transaction', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/history_transaction.html');
});
app.get('/payment', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/payment.html');
});
app.get('/payment-success', function (req, res) {
    res.sendFile(__dirname + '/src/views/customer/payment-success.html');
});

//Admin router

//route api init
app.use('/', apiRouter)


app.use(express.static(path.join(__dirname, '/src/public')));

app.listen(PORT, () => {
    console.log("server start - " + PORT);
})
