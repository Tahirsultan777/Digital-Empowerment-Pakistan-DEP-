import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login'
import Logout from "./pages/Logout";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Iphones from "./accessories/Iphones";
import Mackbook from "./accessories/Mackbook";
import HeadPhones from "./accessories/HeadPhones"
import Footer from "./components/Footer";
import Admin_Layouts from "./components/layouts/Admin_Layouts";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminServices from "./pages/Admin_Services";
import AdminUpdate from "./pages/Admin_Update";
import SearchProduct from "./components/SearchProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <SearchProduct> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Error />} />

            <Route path="/iphones" element={<Iphones />} />
            <Route path="/macbooks" element={<Mackbook />} />
            <Route path="/headPhones" element={<HeadPhones />} />

            <Route path="/admin" element={<Admin_Layouts />}>
              <Route path="users" element={<AdminUsers />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="services" element={<AdminServices />} />
              <Route path="users/:id/edit" element={<AdminUpdate />} />
            </Route>

            <Route path="/product/search/:term" element={<SearchProduct />} />
          </Routes>
          <Footer />
        {/* </SearchProduct> */}
      </BrowserRouter>
    </>
  )
}

export default App;