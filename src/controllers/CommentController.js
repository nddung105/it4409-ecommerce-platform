const pool = require('../constants/db')

class CommentControler{

    commentPost(req,res){
        const  content  = req.body.content
        const  user_id  = req.user.id
        const  product_id  = req.params.id
        const addComment = 'INSERT INTO TABLE comments VALUES'
        pool.query(addComment)
        .then(data => res.send(data))
        .catch(err => {
          res.status(500).send({
              message:
              err.message || "Some error occurred while creating the comment."
          })
        })
    }

    deleteComment(req,res){
        const {id} = req.body.id
        const deleteComment = 'DELETE FROM comments WHERE id = {id}'
        pool.query(deleteComment)
        .then(data => {
          if(!data)
            res.status(404).send({message: "The comment is not existed"})
          else res.send("Comment delete successfully")
        })
        .catch(err => {
          res.status(500).send({message: "Error deleting comment with id" + id})
        })
    }

    getProductComment(req,res){
        const id = req.params.id
        const productComment = 'SELECT * FROM comments WHERE product_id = {{id}} INNER JOIN users ON comments.user_id = users.id'
        pool.query(addComment)
        .then(data => res.send(data))
        .catch(err => {
          res.status(500).send({
              message:
              err.message || "Some error occurred while creating the comment."
          })
        })
    }

    editComment(req,res){
        const user_id = req.user.id
        const {comment_id,content} = req.body
        const editCommentQuery = 'UPDATE FROM comments SET content = {content} WHERE id = comment_id'
        pool.query(editCommentQuery)
        .then(data => {
          if(!data)
            res.status(404).send({message: "The comment is not existed"})
          else res.send("Comment edit successfully")
        })
        .catch(err => {
          res.status(500).send({message: "Error editing product with id" + id})
        })
    }

}