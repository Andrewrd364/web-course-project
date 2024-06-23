import Router from "express"
import dishRouter from "./dishRouter.js";

const router = new Router()

router.use('/dishes', dishRouter);

export default router;
