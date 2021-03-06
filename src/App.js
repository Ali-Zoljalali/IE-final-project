import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import HomePage from "./Components/HomePage/homePage"
import SignUpPage from "./Components/SignUpPage/signUpPage"
import SignUpUser from "./Components/SignUpPage/signUpUser"
import SignUpStore from "./Components/SignUpPage/signUpStore"
import Login from "./Components/SignUpPage/loginPage"
import Products from "./Components/Products/products"
import UserProfile from "./Components/Profile/userProfile"
import StoreProfile from "./Components/Profile/storeProfile"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage></HomePage>} />
          <Route exact path="/signup" element={<SignUpPage></SignUpPage>} />
          <Route exact path="/signup/user" element={<SignUpUser></SignUpUser>} />
          <Route exact path="/signup/store" element={<SignUpStore></SignUpStore>} />
          <Route exact path="/login" element={<Login></Login>} />
          <Route exact path="/mobiles" element={<Products></Products>} />
          <Route exact path="/mobiles/samsung" element={<Products></Products>} />
          <Route exact path="/mobiles/xiaomi" element={<Products></Products>} />
          <Route exact path="/mobiles/apple" element={<Products></Products>} />
          <Route exact path="/tablets" element={<Products></Products>} />
          <Route exact path="/tablets/samsung" element={<Products></Products>} />
          <Route exact path="/tablets/xiaomi" element={<Products></Products>} />
          <Route exact path="/tablets/apple" element={<Products></Products>} />
          <Route exact path="/laptops" element={<Products></Products>} />
          <Route exact path="/laptops/lenovo" element={<Products></Products>} />
          <Route exact path="/laptops/asus" element={<Products></Products>} />
          <Route exact path="/laptops/apple" element={<Products></Products>} />
          <Route exact path="/login/user/profile" element={<UserProfile></UserProfile>} />
          <Route exact path="/login/store/profile" element={<StoreProfile></StoreProfile>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
