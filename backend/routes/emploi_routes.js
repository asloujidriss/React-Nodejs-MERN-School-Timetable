const express = require ('express')
const router = express.Router()
const emploiControllers = require ('../controllers/emploi_controllers')

router.post("/create",emploiControllers.create)
router.get("/getallC",emploiControllers.getAll)
router.get("/getbyID/:id",emploiControllers.getID)
router.put("/updete/:id",emploiControllers.update)
router.delete("/delet/:id",emploiControllers.delete)

module.exports= router