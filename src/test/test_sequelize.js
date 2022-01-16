// const {DATABASE_URL} = require('../constants/constants')
// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize(DATABASE_URL, {dialectOptions: {
//     "ssl": {"require":true , rejectUnauthorized: false }}
//   }
// )
// try {
//     sequelize.query('show tables').then(function(rows) {
//         console.log(JSON.stringify(rows));
//     });
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:');
//   }
  
const OrderDetail = require('../models/OrderDetail')
// User.sync({ force: true }).then(
//     (res) => {console.log('----')}
// )
func =  async () => {
    // const user = await User.create({ username: 'Jane', name: 'Doe' , hashed_password:"sdfsfa"});
    // await user.save()
    const users = await OrderDetail.sync({ force: true });
    return users
}

func().then(
 (res) => console.log(res)
)

// User.drop()