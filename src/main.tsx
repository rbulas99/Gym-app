import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserContextProvider } from './context/userContext.tsx';
import './index.css';
import App from './App.tsx';
import ViewUser from './views/ViewUser.tsx';
import ViewWorkoutHistory from './views/ViewWorkoutHistory.tsx';
import ViewAddWorkout from './views/ViewAddWorkout.tsx';
import SelectUser from './components/SelectUser.tsx';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route key="index" element={<App />} >
              <Route
                path="/"
                element={<ViewUser />}
              />
              <Route
                path="/history"
                element={<ViewWorkoutHistory />}
                />
              <Route
                path="/new-workout"
                element={<ViewAddWorkout />}
              />
              <Route
                path="/edit-user"
                element={<SelectUser />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
