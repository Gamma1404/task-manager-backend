const { getAllTasksService, getTaskByIDService, createTaskService, updateTaskService, deleteTaskService } = require('../services/tasksService');

module.exports = {
    getAllTasks: async (req, res) => {
        try {
            const tasks = await getAllTasksService(req.query.status);
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    getTaskByID: async (req, res) => {
        try {
            const task = await getTaskByIDService(req.params.id);
            if (!task) return res.status(404).json({error: 'Task not found'});
            res.status(200).json(task);
        } catch (error) {
            if (error.name === 'CastError') return res.status(400).json({error: 'Invalid ID'});
            res.status(500).json({error: error.message});
        }
    },
    createTask: async (req, res) => {
        try {
            const newTask = await createTaskService(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    },
    updateTask: async (req, res) => {    
        try {
            const task = await updateTaskService(req.params.id, req.body);
            if (!task) return res.status(404).json({error: 'Task not found'});
            res.status(200).json(task);
        } catch (error) {
            if (error.name === 'CastError') return res.status(400).json({error: 'Invalid ID'});
            res.status(500).json({error: error.message});
        }
    },
    deleteTask: async (req, res) => {
        try {
            const task = await deleteTaskService(req.params.id);
            if (!task) return res.status(404).json({error: 'Task not found'});
            res.status(200).json(task);
        } catch (error) {
            if (error.name === 'CastError') return res.status(400).json({error: 'Invalid ID'});
            res.status(500).json({error: error.message});
        }
    }
}