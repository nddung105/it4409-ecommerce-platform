const User = require("../../models/Users");
const httpStatus = require("../../constants/http_status");
const { ROLE_SALE } = require("../../constants/constants");


async function show(req, res, next) {
  try {
    const id = req.params.id
    let user = await User.findOne({where: {id: id}});
    if (user.role == ROLE_SALE){
        await user.destroy();
        return res.send({ message: "Delete Ok"  });
    }
    else{
        return res.send({message: "Can't delete user role customer or admin"})
    }
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = show;
