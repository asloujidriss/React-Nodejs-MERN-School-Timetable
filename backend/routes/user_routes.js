const express = require ('express')
const router = express.Router()
const userControllers = require ('../controllers/user_controllers')

router.post("/register",userControllers.register)
router.post("/login",userControllers.login)
router.post("/refreshtoken",userControllers.refreshtoken)
router.post("/logout",userControllers.lagout)
router.get("/getAll",userControllers.getAll)
router.get("/getbyID/:id",userControllers.getID)
router.delete("/delet",userControllers.delete)

module.exports= router