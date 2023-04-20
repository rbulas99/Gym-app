import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route key="index" element={<App />} >
          <Route
            path="/"
            element={<div>Home</div>}
          />
          <Route
            path="/history"
            element={<div>Home</div>}
          />
          <Route
            path="/new-workout"
            element={<div>New Workout</div>}
          />
          <Route
            path="/edit-user"
            element={<div>Edit user</div>}
          />


        </Route>
      </Routes>

    </BrowserRouter>

  </React.StrictMode>,
);
