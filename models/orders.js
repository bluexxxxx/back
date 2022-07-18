import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users',
    required: [true, '缺少使用者欄位']
  },
  products: [
    {
      product: {
        type: mongoose.ObjectId,
        ref: 'products',
        required: [true, '缺少商品欄位']
      },
      quantity: {
        type: Number,
        required: [true, '缺少數量欄位']
      }
    }
  ],
  date: {
    type: Date,
    // 拿目前的時間戳記當預設值
    default: Date.now()
  }
}, { versionKey: false })

export default mongoose.model('orders', schema)
