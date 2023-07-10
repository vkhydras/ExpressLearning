const express = require('express')
const router = express.Router()
const {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson,
    delePerson
} = require('../controllers/people')

// router.get('/',getPeople)
// router.post('/postman',createPersonPostman)
// router.post('/',createPerson)
// router.put('/:id',updatePerson)
// router.delete('/:id',delePerson)

router.route('/').get(getPeople).post(createPerson)
router.route('/posyman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(delePerson)

module.exports = router
