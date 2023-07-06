const express = require("express");
const Cake = require("../../models/Cake");
const { findById } = require("../../models/User");

const router = express.Router();

router.use((res, req, next) => {
    next();
});

// View all the cakes
router.get("/api/cake", async (req, res) => {
    try {
        const cakes = await Cake.find();
        console.log("Orders: ", cakes);
        res.status(200).json(cakes);
    } catch (error) {
        console.error("Failed to retrieve orders:", error);
        res.status(500).json({ msg: error });
    }
});

// Save cake in database
router.post("/api/cake", async (req, res) => {

    Cake.find({ name: req.body.name }).then(async (data, error) => {
        if (!data) {
            console.log("Data: ", data, data.length);

            const cake = new Cake({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                flavors: req.body.flavors,
                sizes: req.body.sizes,
                ingredients: req.body.ingredients,
                image: req.body.image,
                category: req.body.category,
                ratings: req.body.ratings,
                stock: req.body.stock,
            });
            try {
                const savedCake = await cake.save();
                // console.log("Cake created:", savedCake);

                res.status(200).json(savedCake);
            } catch (error) {
                console.error("Failed to create cake:", error);
            }
        } else {
            console.log("Error: ", error);
            res.status(400).json({msg : "Add Unique Name"});
        }
    });
});


// Delete a cake
router.delete("/api/cake"  , async (req, res) => {
    Cake.deleteMany({ name: req.body.name }).then( async (result, err) => {
        if (err) {
          console.error('Failed to delete documents:', err);
          res.status(400);
        } else {
          console.log(`Deleted document(s) with name "${req.body.name}" from the collection.`);
          res.status(200).json({msg : "Delete Succesfully"});
        }
    })
})


module.exports = router;
