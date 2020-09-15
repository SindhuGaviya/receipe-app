const express=require('express')
const router=express.Router()
const usersController=require('../app/controller/UsersController')
const {authenticateUser}=require('../app/middlewares/authentication')
const receipesController=require('../app/controller/receipeController')

router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)
router.get('/users/account',authenticateUser,usersController.account)
router.delete('/users/logout',authenticateUser,usersController.logout)

router.get('/receipes',receipesController.list)
router.get('/receipes/:id',receipesController.show)
router.post('/receipes',receipesController.create)
router.put('/receipes/:id',receipesController.update)
router.delete('/receipes/:id',receipesController.destroy)

module.exports=router