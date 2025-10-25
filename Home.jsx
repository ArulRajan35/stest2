## Frontend Code

### src/Components/Home.jsx
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Task Manager</h1>
        <p>Manage your tasks efficiently</p>
        <div className="button-group">
          <Link to="/add-task">
            <button className="btn btn-primary">Add Task</button>
          </Link>
          <Link to="/view-tasks">
            <button className="btn btn-success">View Tasks</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
```

