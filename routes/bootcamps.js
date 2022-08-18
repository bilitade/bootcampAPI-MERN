const express = require('express');
const { getBootcamp,
        getBootcamps,
        createBootcamp,
        updateBootcamp,
        deleteBootcamp } = require('../controllers/bootcamps');

const router = express.Router();

 router.route('/')
        .get(getBootcamps)
        .post(createBootcamp);
 router.route('/:id')
      .get(getBootcamp)
      .put(updateBootcamp)
      .delete(deleteBootcamp);





// router.get('/', (req, res) => {

// });
// router.get('/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: `get single bootcamp  ${req.params.id}` });
// });

// router.post('/', (req, res) => {
//     res.status(200).json({ success: true, msg: "create nw bootcamp" });

// });

// router.put('/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` });

// });

// router.delete('/:id', (req, res) => {
//     res.status(200).json({ success: true, msg: `delete bootcamp  ${req.params.id}` });

// });

module.exports = router;