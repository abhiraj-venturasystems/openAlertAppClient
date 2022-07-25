import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PrivateRoutes from './components/HOC/PrivateRoutes';
import Signin from "./components/signin/index.js";
import ShopReg from "./components/shops/reg.js";
import "react-datepicker/dist/react-datepicker.css";

import Layout from './components/layout/index.js';
import Dashboard from './components/dashboard/index.js';
import Shops from './components/shops/index.js';
import Tokens from './components/tokens/index.js';


function App() {
  return (
    <>
     <Router>
        <Routes>
           
            <Route exact path="/" element={<Signin />} />
            <Route path="/shop/reg" element={<ShopReg />} />

            <Route element={<PrivateRoutes />}>
               <Route path="/cms" element={<Layout />} >
                  <Route path="/cms/dashboard" element={<Dashboard />} />
                  <Route path="/cms/shops" element={<Shops />} />
                  <Route path="/cms/tokens" element={<Tokens />} />
               </Route>
            </Route>
            
        </Routes>
        
     </Router>
    </>
  );
}

export default App;
