const express = require ('express')
const router = express.Router()
const enseignantControllers = require ('../controllers/enseignant_controllers')
const {verifytoken,verifytokenAndAuthorization}=require("../middlewares/auth")

router.post("/register",enseignantControllers.register)
router.get("/getAll",enseignantControllers.getAll)
router.get("/getbyID/:id",enseignantControllers.getID)
router.put("/update/:id",enseignantControllers.update)
router.delete("/delet/:id",enseignantControllers.delete)

module.exports= router


