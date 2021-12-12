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
  
const User = require('../models/Users')
// User.sync({ force: true }).then(
//     (res) => {console.log(res)}
// )
func =  async () => {
    // const user = await User.create({ firstName: 'Jane', lastName: 'Doe' });
    const users = await User.findAll();
    // await user.save()
    return users
}

// func().then(
//  (res) => console.log(JSON.stringify(res, null, 2))
// )

User.drop()