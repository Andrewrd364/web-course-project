import Router from "express"
import dishRouter from "./dishRouter.js";
import categoryRouter from "./categoryRouter.js";
import orderRouter from "./orderRouter.js";
import tableReservationRouter from "./tableReservationRouter.js"

const router = new Router()

router.use('/dishes', dishRouter);
router.use('/categories', categoryRouter);
router.use('/orders', orderRouter);
router.use('/reservations', tableReservationRouter);

export default router;
