import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/Navigation/Navigation";
import ProductCard from "./customer/Pages/HomePage/HomePage";
import Product from "./customer/components/Products/Product";
import HomePage from "./customer/Pages/HomePage/HomePage";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Footer from "./customer/components/Footer/Footer";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetail from "./customer/components/Order/OrderDetail";
import { Route, Routes } from "react-router-dom";
import CustomerRoutes from "./Routes/CustomerRoutes";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
