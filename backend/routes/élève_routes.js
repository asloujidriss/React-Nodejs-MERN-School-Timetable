const express = require ('express')
const router = express.Router()
const eleveControllers = require ('../controllers/élève_controllers')

router.post("/create",eleveControllers.create)
router.get("/getAll",eleveControllers.getAll)
router.get("/getbyID/:id",eleveControllers.getID)
router.put("/put/:id",eleveControllers.update)
router.delete("/delet/:id",eleveControllers.delete)

module.exports= router