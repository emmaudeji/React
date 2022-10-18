import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ProjectApp from "./ProjectApp";


const Router = () => {
  return (
    <BrowserRouter >
      <ProjectApp />
    </BrowserRouter>
  )
}

export default Router