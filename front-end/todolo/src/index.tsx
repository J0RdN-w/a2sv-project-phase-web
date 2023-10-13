import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AddTodolo from './AddTodolo';
import EditTodolo from './EditTodolo';
import reportWebVitals from './reportWebVitals';
import {store} from './store';
import { Provider } from 'react-redux'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div style={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
  </div>
  },
  {
    path: '/addtodolo',
    element: <AddTodolo />,
  },
  {
    path: '/edittodolo/:todoloId',
    element: <EditTodolo />,
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
