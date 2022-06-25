const router = require('express').Router()
const { getAllThoughts, addThought, updateThought, removeThought, addReaction, removeReaction, getThoughtById}= require('../../controllers/thought-controller')



router.route('/:id').get(getThoughtById)


router
.route('/:userId')
.post(addThought)


router.route('/').get(getAllThoughts)

router.route('/:id').put(updateThought)




router
.route('/:userId/:thoughtId')

.put(addReaction)
.delete(removeThought)



router.route('/:userId/:thoughtId/:reactionId').delete(removeReaction)
module.exports = router