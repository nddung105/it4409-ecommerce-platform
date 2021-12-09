const productRouter = require('./products')

function route(app) {
    app.use('/api/products',productRouter)
}
  
module.exports = route
