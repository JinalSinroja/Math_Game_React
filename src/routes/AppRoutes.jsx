import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Layout from '../Layout';
import SignUp from '../pages/SignUp';
import Login from '../pages/LogIn';
import MathGame from '../pages/MathGame';
import Result from '../pages/Result';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/game/:id' element={<MathGame />} />
          <Route path='/result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
