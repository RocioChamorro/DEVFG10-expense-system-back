const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    amount: {
        type: Number,
        required: [true, 'Ingresa un monto']
    },
    description: String
    
}, {
    timestamps: true,
})

module.exports = mongoose.model('Expense', expenseSchema)