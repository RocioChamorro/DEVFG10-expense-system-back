const asyncHandler = require('express-async-handler')

const Expense = require('../models/expenseModel')

const getExpenses = asyncHandler(async (req, res) => {

    const expenses = await Expense.find({ user: req.user.id })

    res.status(200).json(expenses)
})
// objeto de solicitud (req), al objeto de respuesta (res)
const postExpenses = asyncHandler(async (req, res) => {

    if (!req.body.amount) {
        res.status(400)
        throw new Error('Ingresa un monto')
    }

    const expense = await Expense.create({
        amount: req.body.amount,
        user: req.user.id,
        description: req.body.description
    })

    res.status(200).json(expense)
})

const deleteExpenses = asyncHandler(async (req, res) => {

    const expense = await Expense.findById(req.params.id)

    if (!expense) {
        res.status(400)
        throw new Error('Monto no encontrado')
    }

    if (expense.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso No Autorizado')
    }

    await expense.remove()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getExpenses,
    postExpenses,
    deleteExpenses
}