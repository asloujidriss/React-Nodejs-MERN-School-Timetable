const express = require ('express')
const router = express.Router()
const absenceControllers = require ('../controllers/absence_controllers')


router.post("/create",absenceControllers.create)
router.get("/getall",absenceControllers.getAll)
router.delete("/delet/:id",absenceControllers.delete)

module.exports= router