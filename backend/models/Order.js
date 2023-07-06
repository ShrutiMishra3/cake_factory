const mongoose = require('mongoose');

const OrderSchema = new Schema(
    {
        _id: {
          type: Schema.Types.ObjectId,
          required: [true, 'Order ID is required']
        },
        userId: {
          type: Schema.Types.ObjectId,
          ref: 'User',
          required: [true, 'User ID is required']
        },
        items: [{
          cakeId: {
            type: Schema.Types.ObjectId,
            ref: 'Cake',
            required: [true, 'Cake ID is required']
          },
          quantity: {
            type: Number,
            required: [true, 'Quantity is required']
          }
        }],
        totalPrice: {
          type: Number,
          required: [true, 'Total price is required']
        },
        status: {
          type: String,
          required: [true, 'Status is required']
        },
        shippingAddress: {
          street: {
            type: String,
            required: [true, 'Street is required']
          },
          city: {
            type: String,
            required: [true, 'City is required']
          },
          state: {
            type: String,
            required: [true, 'State is required']
          },
          country: {
            type: String,
            required: [true, 'Country is required']
          },
          postalCode: {
            type: String,
            required: [true, 'Postal code is required']
          }
        },
        paymentMethod: {
          type: String,
          required: [true, 'Payment method is required']
        },
        createdAt: {
          type: Date,
          required: [true, 'Creation timestamp is required']
        },
        updatedAt: {
          type: Date,
          required: [true, 'Update timestamp is required']
        }
      }    
)

module.exports = mongoose.model('Order', OrderSchema);