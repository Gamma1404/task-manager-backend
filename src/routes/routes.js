const { Router } = require('express');
const { getAllTasks, getTaskByID, createTask, updateTask, deleteTask } = require('../controllers/tasksController');
const createdTaskValidator = require('../middlewares/createdTaskValidator');
const validate = require('../middlewares/validate');
const updateTaskValidator = require('../middlewares/updateTaskValidator');

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: string
 *           description: The unique ID of the task
 *         title:
 *           type: string
 *           required: true
 *           example: Task 1
 *           description: The title of the task
 *         description:
 *           type: string
 *           required: false
 *           example: Task description
 *           description: The description of the task
 *         completed:
 *           type: boolean
 *           default: false
 *           example: true
 *           description: The completion status of the task
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2022-01-01T00:00:00.000Z"
 *           description: The creation date of the task
 */


/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 required: true
 *                 example: Task 1
 *               description:
 *                 type: string
 *                 required: false
 *                 example: Task description
 *               completed:
 *                 type: boolean
 *                 default: false
 *     responses:
 *       201:
 *         description: Task created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/api/tasks', createdTaskValidator, validate, createTask)
/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Get all tasks
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [pending, completed]
 *         required: false
 *         description: Filter tasks by status
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.get('/api/tasks', getAllTasks)
/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: 6771c60c7210db255e5f1e88
 *         description: ID of the task to retrieve
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
router.get('/api/tasks/:id', getTaskByID)
/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Update a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: 6771c60c7210db255e5f1e88
 *         description: ID of the task to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 required: false
 *                 example: Task 1
 *               description:
 *                 type: string
 *                 required: false
 *                 example: Task description
 *               completed:
 *                 type: boolean
 *                 required: false
 *                 example: true
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
router.put('/api/tasks/:id', updateTaskValidator, validate, updateTask)
/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Delete a task by ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         example: 6771c60c7210db255e5f1e88
 *         description: ID of the task to delete
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Task not found
 *       500:
 *         description: Internal server error
 */
router.delete('/api/tasks/:id', deleteTask)

module.exports = router