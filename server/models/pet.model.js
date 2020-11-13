const mongoose =  require('mongoose')

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, "This name is already taken"],
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be at least 3 characters long"]
    },
    petType: {
        type: String,
        required: [true, "Pet type is required"],
        minlength: [3, "Type must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Please provide the description"],
        minlength: [3, "Description must be at least 3 characters long"]
    },
    skillOne: {
        type: String
    },
    skillTwo: {
        type: String
    },
    skillThree: {
        type: String
    },
}, { timestamps: true })


module.exports.Pet = mongoose.model("Pet", petSchema)