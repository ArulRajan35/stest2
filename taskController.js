### controllers/taskController.js
```javascript
const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
  try {
    const { name, description } = req.body;
    
    if (!name || !description) {
      return res.status(400).json({ 
        message: 'Name and description are required' 
      });
    }

    const task = await Task.create({ name, description });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ 
      tasks,
      count: tasks.length 
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```
