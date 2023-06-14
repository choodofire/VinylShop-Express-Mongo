import {Schema, model} from 'mongoose'

const orderSchema = new Schema({
    articles: [
        {
            article: {
                type: Object,
                required: true,
            },
            count: {
                type: Number,
                required: true,
            }
        }
    ],
    user: {
        name: String,
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    // Status: Оформлен, Оплачен, Отправлен, Получен.
    status: {
        type: String,
        default: "Оформлен"
    }
})


export default model('Order', orderSchema)