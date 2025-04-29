import logo from "./logo.svg";
import "./App.css";
import LoginSignUp from "./components/loginSignUp";
import DonorForm from "./components/donorForm";
import FoodListings from "./components/foodListings";
import { Routes, Route, useLocation } from "react-router-dom";
import Volunteer from "./components/volunteer";
import Navbar from "./components/navbar";
import MyRequests from "./components/myRequests";
import MyDonations from "./components/myDonations";
import MyGoogleMap from "./components/map";
import LandingPage from "./components/landingPage";

function App() {
  const path = useLocation();

  return (
    <>
      {path.pathname != "/loginsignin" && <Navbar />}
      <>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/loginsignin' element={<LoginSignUp />} />
          <Route path='/donatefood' element={<DonorForm />} />
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/myrequests' element={<MyRequests />} />
          <Route path='/mydonations' element={<MyDonations />} />
          <Route path='/map' element={<MyGoogleMap />} />

          <Route path='/foodlistings' element={<FoodListings />} />
        </Routes>
      </>
    </>
  );
}

export default App;
