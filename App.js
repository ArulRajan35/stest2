### src/App.js
```javascript
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AddTask from './Components/Addtask';
import ViewTasks from './Components/Viewtask';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/view-tasks" element={<ViewTasks />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
```
