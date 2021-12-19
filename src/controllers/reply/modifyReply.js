const { abort } = require('../../utils/errors');
const Reply = require('../../models/Reply');

async function modifyReply(req,res){
    const reply_id = req.body.reply_id
    const response = await Reply.update(req.body,{where:{id: reply_id}})
    if (response){
        res.status(201).send("Update Reply successfully")
    } else{
        res.status(404).send({message: `Cannot find Reply with id=${reply_id}.`});
    }
}

module.exports = modifyReply