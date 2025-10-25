### src/Components/Addtask.jsx
```javascript
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Addtask.css';

const AddTask = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.description) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/tasks', formData);
      
      if (response.status === 201) {
        setSuccess('Task added successfully!');
        setFormData({ name: '', description: '' });
        
        setTimeout(() => {
          navigate('/view-tasks');
        }, 1500);
      }
    } catch (error) {
      setError('Failed to add task. Please try again.');
    }
  };

  return (
    <div className="addtask-container">
      <div className="addtask-content">
        <h2>Add New Task</h2>
        
        {error && <div className="alert alert-danger">{error}</div>}
        {success && <div className="alert alert-success">{success}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Task Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Task Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows="4"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">Add Task</button>
        </form>

        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    </div>
  );
};

export default AddTask;
```
