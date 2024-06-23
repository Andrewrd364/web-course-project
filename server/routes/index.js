import Router from "express"
import dishRouter from "./dishRouter.js";
import categoryRouter from "./categoryRouter.js";

const router = new Router()

router.use('/dishes', dishRouter);
router.use('/categories', categoryRouter);

export default router;
