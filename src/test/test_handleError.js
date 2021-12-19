handleError = (fuc) => async (req, res, next) => {
    try {
      await fuc(req, res, next);
    } catch (err) {
      console.log(err)
    }
  };

function sum (req, res, next) {
    console.log(req,res,next)
}

handleError(sum('1','1','1'))