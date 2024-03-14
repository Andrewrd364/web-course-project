import Router from "express"
import DishController from "./DishController.js";

const router = new Router()

router.post('/dishes', DishController.create)
router.get('/dishes', DishController.getAll)
router.get('/dishes/:id', DishController.getOne)
router.put('/dishes', DishController.update)
router.delete('/dishes/:id', DishController.delete)

export default router;