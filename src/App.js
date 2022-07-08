import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoute from './components/HOC/PrivateRoute';
import Layout from './components/layout/index.js';
import Signin from "./components/signin/index.js";
import Reg from "./components/shops/reg.js";
import "react-datepicker/dist/react-datepicker.css";


function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
           
            {/* <Route exact path="/"  component={Signin} /> */}
            <Route exact path="/" element={<Signin />} />
            <Route exact path="/shop/reg" element={<Reg />} />
            
            <PrivateRoute path="/cms">
              <Layout />
            </PrivateRoute>
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
