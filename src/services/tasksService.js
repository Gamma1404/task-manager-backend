const Task = require('../models/Task');

module.exports = {
    getAllTasksService: async (status) => {
        if (!status) return await Task.find()
        if (status !== 'completed' && status !== 'pending') throw new Error('Invalid status parameter')
        return await Task.find({ completed: status === 'completed' })
    },
    getTaskByIDService: async (id) => {
        const task = await Task.findById(id)
        return task
    },
    createTaskService: async (task) => {
        return await Task.create(task)
    },
    updateTaskService: async (id, task) => {
        const updatedTask = await Task.findByIdAndUpdate(id, task)
        return updatedTask
    },
    deleteTaskService: async (id) => {
        const deletedTask = await Task.findByIdAndDelete(id)
        return deletedTask
    }
}