import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import RenderPage from './Pages/RenderPage';
import Login from './EMR/Login/Login';



const App=()=>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      
      <RenderPage />
    </BrowserRouter>
  </React.StrictMode>
);
}

export default App