import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from 'react-router-dom';
import './index.css';
import Root from './components/Root.jsx';
import Landing from './pages/Landing/Landing.jsx'
import Home from './pages/Home/Home.jsx'
import Weather from './pages/Weather/Weather.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/weather" element={<Weather />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
