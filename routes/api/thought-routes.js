const router = require('express').Router();
const {
    createThought,
    getAllThoughts
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// router.route('/:userId').post(createThought);

module.exports = router;