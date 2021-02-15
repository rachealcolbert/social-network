const router = require('express').Router();
const {
    createThought,
    getAllThoughts
} = require('../../controllers/thought-controller');

router.route('/:userId').post(createThought);

router.route('/').get(getAllThoughts);

module.exports = router;