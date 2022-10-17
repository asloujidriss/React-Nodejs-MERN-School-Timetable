const express = require ('express')
const router = express.Router()
const classeControllers = require ('../controllers/classe_controllers')


router.post("/create",classeControllers.create)
router.get("/getall",classeControllers.getAll)
router.get("/getbyID/:id",classeControllers.getID)
router.get("/getbySection/:section",classeControllers.getbysection)
router.put("/updete/:id",classeControllers.update)
router.delete("/delet/:id",classeControllers.delete)



module.exports= router