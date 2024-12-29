const { Router } = require('express');
const { getAllTasks, getTaskByID, createTask, updateTask, deleteTask } = require('../controllers/tasksController');
const createdTaskValidator = require('../middlewares/createdTaskValidator');
const validate = require('../middlewares/validate');
const updateTaskValidator = require('../middlewares/updateTaskValidator');

const router = Router();

router.post('/api/tasks', createdTaskValidator, validate, createTask)
router.get('/api/tasks', getAllTasks)
router.get('/api/tasks/:id', getTaskByID)
router.put('/api/tasks/:id', updateTaskValidator, validate, updateTask)
router.delete('/api/tasks/:id', deleteTask)

module.exports = router