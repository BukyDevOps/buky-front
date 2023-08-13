import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../components/Home/Home";
import Accommodations from "../components/Accommodations/Accommodations";
import About from "../components/About/About";
import Login from "../components/Auth/Login/Login";
import Register from "../components/Auth/Register/Register";
import Reservations from "../components/Reservations/Reservations";
import MyProfile from "../components/Profile/MyProfile";
import MyAccommodations from "../components/MyAccommodations/MyAccommodations";
import Accommodation from "../components/Accommodations/Accommodation/Accommodation";
import AccommodationModify from "../components/Accommodations/AccommodationModify/AccommodationModify";

const MyRoutes = () => {
  return (
    <Routes>
      <Route exact path="" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/accommodations" element={<Accommodations />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/my-accommodations" element={<MyAccommodations />} />
      <Route exact path="/my-reservations" element={<Reservations />} />
      <Route exact path="/my-profile" element={<MyProfile />} />
      <Route
        exact
        path="/accommodations/create"
        element={<AccommodationModify accommodation={null} />}
      />
      <Route exact path="/accommodations/:id" element={<Accommodation />} />
    </Routes>
  );
};

export default MyRoutes;
