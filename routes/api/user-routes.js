const router = require('express').Router()
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller')



router 
.route('/')
.get(getAllUser)
.post(createUser)



router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)





router
.route('/friends/:userId').put(addFriend)



router.route('/friends/:userId/:friendId').delete(removeFriend)





module.exports = router