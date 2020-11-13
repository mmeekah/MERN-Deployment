const PetController = require('../controllers/pet.controller')

module.exports = (app) => {
    app.get('/api/pets', PetController.getAll);
    app.post('/api/pets', PetController.addPet);
    app.get('/api/pets/:id', PetController.getOne);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.adoptPet);
}