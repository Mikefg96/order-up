import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },   
    password: {
        type: String,
        required: true
    },
    companies: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'user'
    }],
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true
})

const User = mongoose.model('user', userSchema)

export default User