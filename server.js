const express = require('express')
const cors = require('cors')
const port = 8000
const dbname = "petshelter"
const app = express()


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



require('./server/config/mongoose.config')(dbname)
require('./server/routes/pet.routes')(app)


app.listen(port, () => console.log(`Server has connected successfully ++++++++++++++ on port: ${port}`));
