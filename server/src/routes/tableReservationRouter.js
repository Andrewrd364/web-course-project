import Router from "express"
import tableReservationController from "../controllers/tableReservationController.js";

const router = Router();

router.post('/', tableReservationController.create)
router.get('/', tableReservationController.getAll)
router.get('/:id', tableReservationController.getOne)
router.put('/', tableReservationController.update)
router.delete('/:id', tableReservationController.delete)

export default router;