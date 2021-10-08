const {Router} = require('express')

const router = Router();

const { createOrder, createPayment, prueba  } = require('../controllers/Order')

router.post("/", createOrder)
router.get("/payment", createPayment)
router.get("/prueba", prueba)


module.exports = router;