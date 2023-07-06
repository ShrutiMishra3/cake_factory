const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: [true, 'Name is required']
        },
        description: {
          type: String,
          required: [true, 'Description is required']
        },
        price: {
          type: Number,
          required: [true, 'Price is required']
        },
        flavors: [{
          type: String,
          required: [true, 'Flavors are required']
        }],
        sizes: [{
          type: String,
          required: [true, 'Sizes are required']
        }],
        ingredients: [{
          type: String,
          required: [true, 'Ingredients are required']
        }],
        image: {
          type: String,
          required: [true, 'Image URL is required']
        },
        category: {
          type: String,
          required: [true, 'Category is required']
        },
        ratings: [{
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'User ID is required']
          },
          rating: {
            type: Number,
            required: [true, 'Rating is required']
          },
          review: {
            type: String,
            required: [true, 'Review is required']
          }
        }],
        stock: {
          type: Number,
          required: [true, 'Stock quantity is required']
        }
      }      
)

module.exports = mongoose.model('Cake', CakeSchema);