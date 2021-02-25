const express = require('express')
const router = express.Router()
const DasboardControl = require('../controllers/dashboardControl')
const mid = require('../middlewares/session')

router.use(mid)

router.get("/", DasboardControl.showProducts)
router.get("/:id/plus", DasboardControl.plusStock)
router.get("/:id/minus", DasboardControl.minusStock)
router.get("/:id/edit", DasboardControl.editProduct)
router.post("/:id/plus", DasboardControl.inputEditProduct)

module.exports = router