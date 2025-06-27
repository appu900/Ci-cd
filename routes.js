const express = require('express');
const Task = require('./models/task');
const router = express.Router();

/**
 * @swagger
 * /api/task:
 *   post:
 *     summary: Create a task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created
 */
router.post('/task', async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ message: 'Task created', task });
});

/**
 * @swagger
 * /api/task:
 *   get:
 *     summary: Get all tasks
 *     responses:
 *       200:
 *         description: List of tasks
 */
router.get('/task', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

module.exports = router;
