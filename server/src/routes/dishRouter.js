import Router from "express"
import DishController from "../controllers/dishController.js";

const router = Router();

/**
 * @swagger
 * /dishes:
 *   post:
 *     summary: Create a new dish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - picture
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               picture:
 *                 type: string
 *             example:
 *               name: Caesar salad
 *               description: Fresh romaine lettuce, Parmesan cheese, and croutons
 *               picture: url_to_picture
 *     responses:
 *       200:
 *         description: Returns the created dish
 *       500:
 *         description: Server error
 */
router.post('/', DishController.create)

/**
 * @swagger
 * /dishes:
 *   get:
 *     summary: Get all dishes
 *     responses:
 *       200:
 *         description: A list of dishes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dish'
 *       500:
 *         description: Server error
 */
router.get('/', DishController.getAll)

/**
 * @swagger
 * /dishes/{id}:
 *   get:
 *     summary: Get a dish by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the dish to retrieve
 *     responses:
 *       200:
 *         description: A single dish
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dish'
 *       400:
 *         description: ID not provided
 *       500:
 *         description: Server error
 */
router.get('/:id', DishController.getOne)

/**
 * @swagger
 * /dishes:
 *   put:
 *     summary: Update a dish
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dish'
 *     responses:
 *       200:
 *         description: The updated dish
 *       400:
 *         description: ID not provided
 *       500:
 *         description: Server error
 */
router.put('/', DishController.update)

/**
 * @swagger
 * /dishes/{id}:
 *   delete:
 *     summary: Delete a dish by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the dish to delete
 *     responses:
 *       200:
 *         description: The deleted dish
 *       400:
 *         description: ID not provided
 *       500:
 *         description: Server error
 */
router.delete('/:id', DishController.delete)

export default router;