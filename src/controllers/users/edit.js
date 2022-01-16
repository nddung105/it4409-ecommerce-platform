const User = require("../../models/Users");
const httpStatus = require("../../constants/http_status");

async function edit(req, res, next) {
  try {
    const { name, phonenumber } = req.body;
    const file = req.file
    let user = await User.findOne({ where: { id: req.userId } });
    if (user == null) {
      return res.status(httpStatus.BAD_REQUEST).json({
        message: "Username already exists",
      });
    }
    if(!file) {
      abort(400,"File not found")
    }
    else{
      user.avatar = file.location
    }
    if (name) {
      user.name = name;
    }
    if (phonenumber) {
      user.phonenumber = phonenumber;
    }
    await user.save();
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      username: user.username,
      avatar: user.avatar,
      phonenumber: user.phonenumber,
      name: user.name,
    });
  } catch (e) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: e.message,
    });
  }
}

module.exports = edit;
