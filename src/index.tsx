import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './components/app/App';
import { App } from './task-2/App';
import { Project } from './task-2/Project';
import { Task } from './task-2/Task';
import { User } from './task-2/User';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const app = new App('my-app');
const project = new Project();
const dev_1 = new User('Petro');
const task = new Task(30, 'Create ui', dev_1);
project.addTask(task);
app.addProject(project);
project.editTask({ id: task.getTaskId(), completed: true });
