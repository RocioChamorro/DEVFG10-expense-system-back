const express = require('express');
const router = express.Router();

const { getExpenses, postExpenses, deleteExpenses } = require('../controllers/expenseControllers')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getExpenses).post(protect, postExpenses)
router.route('/:id').delete(protect, deleteExpenses)

module.exports = router;