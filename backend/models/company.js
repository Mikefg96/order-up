import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image: {
        url: String,
        public_id: String
    },
    category: String,
    stock: Number,
})

const companySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    description: {
        type: String, 
        required: true
    },
    logo: {
        url: String,
        public_id: String
    },
    categories: [
        {
            type: String
        }
    ],
    products: [ productSchema ],
}, {
    timestamps: true
})

const Company = mongoose.model('companie', companySchema)

export default Company