### src/Components/Viewtask.jsx
```javascript
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Viewtask.css';

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/tasks');
      setTasks(response.data.tasks || []);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch tasks');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleRefresh = () => {
    fetchTasks();
  };

  return (
    <div className="viewtasks-container">
      <div className="viewtasks-content">
        <h2>All Tasks</h2>
        
        <div className="actions">
          <button onClick={handleRefresh} className="btn btn-info">Refresh</button>
          <Link to="/" className="back-link">Back to Home</Link>
        </div>

        {loading && <div className="loading">Loading tasks...</div>}
        
        {error && <div className="alert alert-danger">{error}</div>}

        {!loading && tasks.length === 0 && (
          <div className="empty-state">No tasks found</div>
        )}

        {!loading && tasks.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Task Name</th>
                <th>Description</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.name}</td>
                  <td>{task.description}</td>
                  <td>{new Date(task.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewTasks;
```
