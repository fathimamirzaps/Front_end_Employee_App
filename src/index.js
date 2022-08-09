import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import EmployeeList from './pages/EmployeeListing';
import CreateEmployee from './pages/CreateEmployee';
import Counter from './pages/Counter';
import { Provider } from 'react-redux';
import { store } from './store/store';
import EmployeeDetails from './pages/EmployeeDetails';
import UpdateEmployee from './pages/UpdateEmployee.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/list" element={<EmployeeList/>}></Route>
      <Route path="/counter" element={<Counter/>}></Route>
      <Route path="/create" element={<CreateEmployee/>}></Route>
      <Route path="/details/:id" element={<EmployeeDetails/>}></Route>
      <Route path="/update/:id" element={<UpdateEmployee/>}></Route>

    </Routes>
    </Provider>
    </BrowserRouter>

    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
