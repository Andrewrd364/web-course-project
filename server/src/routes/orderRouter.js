import Router from "express"
import orderController from "../controllers/orderController.js";

const router = Router();

router.post('/', orderController.create)
router.get('/', orderController.getAll)
router.get('/:id', orderController.getOne)
router.put('/', orderController.update)
router.delete('/:id', orderController.delete)

export default router;