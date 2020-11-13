const { Pet } = require('../models/pet.model')

module.exports.addPet = (req,res)=>{
    const {name, petType, description, skillOne, skillTwo, skillThree} = req.body;
    Pet.create({
        name,
        petType,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
    .then(pet=> res.json(pet))
    .catch(err=>res.json(err))
}

module.exports.getAll =(req,res)=>{
    Pet.find({})
        .then(pets=> res.json(pets))
        .catch(err=>res.json(err))
}


module.exports.getOne = (req,res)=>{
    Pet.findOne({_id:req.params.id})
        .then(pet=>res.json(pet))
        .catch(err=>res.json(err))
}

module.exports.updatePet=(req,res)=>{
    Pet.findOneAndUpdate({_id:req.params.id}, req.body,{ new: true, runValidators: true })
    .then(newPet => res.json(newPet))
    .catch(err => res.json(err));
}

module.exports.adoptPet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(adopted => res.json(adopted))
        .catch(err => res.json(err))
}