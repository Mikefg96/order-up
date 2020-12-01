import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    issued_by: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user'
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'companie'
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: ''
            }
        }
    ],
    total_price: {
        type: Number,
        required: true
    },
    is_confirmed: {
        type: Boolean,
        required: true,
        default: false
    },
    confirmed_at: Date,
    is_paid: {
        type: Boolean,
        required: true,
        default: false
    },
    paid_at: Date,
    is_delivered: {
        type: Boolean,
        required: true,
        default: false
    },
    delivered_at: Date
}, {
    timestamps: true
})

const Order = mongoose.model('order', orderSchema)

export default Order