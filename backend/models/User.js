const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: [true, 'Name is required']
        },
        email: {
          type: String,
          required: [true, 'Email is required']
        },
        password: {
          type: String,
          required: [true, 'Password is required']
        },
        address: {
          street: {
            type: String,
            // required: [true, 'Street is required']
          },
          city: {
            type: String,
            // // required: [true, 'City is required']
          },
          state: {
            type: String,
            // // required: [true, 'State is required']
          },
          country: {
            type: String,
            // // required: [true, 'Country is required']
          },
          postalCode: {
            type: String,
            // required: [true, 'Postal code is required']
          }
        },
        wishlist: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Cake'
        }],
        orders: [{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Order'
        }]
      }      
)

module.exports = mongoose.model('User', UserSchema);